// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Layer from 'grommet/components/Layer';
import ConversationForm from './ConversationForm';

export default class ConversationAdd extends Component {

  constructor () {
    super();
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onSubmit (size) {
    const { router } = this.context;
    // this.props.dispatch(addItem(size));
    router.push({ pathname: '/conversations' });
  }

  render () {
    return (
      <Layer closer={false} align="right">
        <ConversationForm heading="Add Conversation" submitLabel="Add"
          conversation={{}} onSubmit={this._onSubmit} />
      </Layer>
    );
  }
}

ConversationAdd.contextTypes = {
  router: PropTypes.any
};
