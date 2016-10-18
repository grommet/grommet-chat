// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import LoginForm from 'grommet/components/LoginForm';
import ChatIcon from 'grommet/components/icons/base/Chat';
import TBD from 'grommet/components/TBD';

export default class Login extends Component {

  constructor (props) {
    super(props);
    this._onSubmit = this._onSubmit.bind(this);
    this.state = { busy: false };
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.busy) {
      this.setState({ busy: false });
    }
  }

  _onSubmit (fields) {
    this.setState({ busy: true });
    // this.props.dispatch(login('', fields.username, fields.password));
    this.context.router.push('/conversations'); /// for now
  }

  render () {
    return (
      <Split flex="left" separator={true}>
        <TBD />
        <Sidebar justify="center" pad="none" size="large">
          <LoginForm align="start"
            logo={<ChatIcon size="large" />}
            title="Chat"
            onSubmit={this.state.busy ? null : this._onSubmit}
            errors={[]}
            usernameType="email" />
        </Sidebar>
      </Split>
    );
  }
}

/// for now
Login.contextTypes = {
  router: PropTypes.any
};
