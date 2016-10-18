// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import UserIcon from 'grommet/components/icons/base/User';
import NavAnchor from './NavAnchor';

export default class NavMenu extends Component {
  render() {
    return (
      <Box justify="between">
        <Menu primary={true}>
          <NavAnchor label="Conversations" path="/conversations" />
        </Menu>
        <Footer pad={{horizontal: 'medium', vertical: 'small'}}>
          <Menu icon={<UserIcon />} dropAlign={{ bottom: 'top' }}
            a11yTitle="Session">
            <Box pad="medium">
              <Heading tag="h3" margin="none">User name</Heading>
            </Box>
            <NavAnchor label="Logout" path="/login" />
          </Menu>
        </Footer>
      </Box>
    );
  }
}
