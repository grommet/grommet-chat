// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Button from 'grommet/components/Button';

/**
* This component is used to augment Grommet Button
* with routing/history capabilities
*/
export default class NavButton extends Component {

  constructor () {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick (event) {
    const { router } = this.context;
    event.preventDefault();
    router.push(this.props.path);
  }

  render () {
    const { router } = this.context;
    const { path } = this.props;
    let className = this.props.className || '';
    if (router.isActive(path)) {
      className += ' active';
    }
    let href = router.createHref(path);
    return (
      <Button {...this.props} href={href} onClick={this._onClick} />
    );
  }
};

NavButton.propTypes = {
  path: PropTypes.string.isRequired
};

NavButton.contextTypes = {
  router: PropTypes.any
};
