// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Anchor from 'grommet/components/Anchor';

/**
* This component is used to augment the Grommet Anchor
* with routing/history capabilities
*/
export default class NavAnchor extends Component {

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
      <Anchor {...this.props} className={className} href={href}
        onClick={this._onClick} />
    );
  }
};

NavAnchor.propTypes = {
  path: PropTypes.string.isRequired
};

NavAnchor.contextTypes = {
  router: PropTypes.any
};
