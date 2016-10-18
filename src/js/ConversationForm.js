// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import Footer from 'grommet/components/Footer';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import TrashIcon from 'grommet/components/icons/base/Trash';
// import SizeRemove from './SizeRemove';
import RoutedAnchor from 'grommet-addons/components/RoutedAnchor';

export default class ConversationForm extends Component {

  constructor (props) {
    super(props);
    this._onSubmit = this._onSubmit.bind(this);
    this._onRemoveOpen = this._onRemoveOpen.bind(this);
    this._onRemoveClose = this._onRemoveClose.bind(this);

    this.state = {
      errors: {},
      removing: false,
      conversation: props.conversation
    };
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ conversation: nextProps.conversation });
  }

  _onSubmit (event) {
    event.preventDefault();
    let conversation = this.state.conversation;
    let errors = {};
    let noErrors = true;
    if (! conversation.name) {
      errors.name = 'required';
      noErrors = false;
    }
    if (noErrors) {
      this.props.onSubmit(conversation);
    } else {
      this.setState({ errors: errors });
    }
  }

  _change (propertyName) {
    return (event) => {
      let conversation = { ...this.state.conversation };
      let value = event.target.value;
      let errors = this.state.errors;
      conversation[propertyName] = value;
      this.setState({ conversation: conversation, errors: errors });
    };
  }

  _onRemoveOpen () {
    this.setState({ removing: true });
  }

  _onRemoveClose () {
    this.setState({ removing: false });
  }

  render () {
    let { conversation, errors } = this.state;

    let removeControl;
    if (this.props.removable) {
      removeControl = (
        <Button plain={true} icon={<TrashIcon />} label="Remove"
          onClick={this._onRemoveOpen}
          a11yTitle={`Remove ${conversation.name} Conversation`} />
      );
    }

    let removeConfirm;
    // if (this.state.removing) {
    //   removeConfirm = (
    //     <SizeRemove size={size} onClose={this._onRemoveClose} />
    //   );
    // }

    return (
      <Article align="center" primary={true}>
        <Form onSubmit={this._onSubmit}>

          <Header size="large" justify="between" pad="none">
            <h2><strong>{this.props.heading}</strong></h2>
            <RoutedAnchor icon={<CloseIcon />} path="/conversations"
              a11yTitle={`Close ${this.props.heading} Form`} />
          </Header>

          <FormFields>

            <fieldset>
              <FormField label="Name" htmlFor="name" error={errors.name}>
                <input id="name" name="name" type="text"
                  value={conversation.name || ''}
                  onChange={this._change('name')} />
              </FormField>
            </fieldset>

          </FormFields>

          <Footer pad={{vertical: 'medium'}} justify="between">
            <Button type="submit" primary={true} label={this.props.submitLabel}
              onClick={this._onSubmit} />
            {removeControl}
          </Footer>
        </Form>

        {removeConfirm}
      </Article>
    );
  }
}

ConversationForm.propTypes = {
  busyMessage: PropTypes.string,
  heading: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  removable: PropTypes.bool,
  size: PropTypes.object,
  submitLabel: PropTypes.string.isRequired
};
