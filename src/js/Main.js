// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import SideSplit from 'grommet-addons/components/SideSplit';
import RoutedAnchor from 'grommet-addons/components/RoutedAnchor';
import RoutedButton from 'grommet-addons/components/RoutedButton';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Heading from 'grommet/components/Heading';
import UserIcon from 'grommet/components/icons/base/User';
import Box from 'grommet/components/Box';
import ChatIcon from 'grommet/components/icons/base/Chat';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import AddIcon from 'grommet/components/icons/base/Add';

export default class Main extends Component {

  constructor () {
    super();
    this.state = { navActive: true };
  }

  render () {
    const { navActive } = this.state;

    let sidebar;
    if (navActive) {
      sidebar = (
        <Sidebar colorIndex="grey-3" fixed={true}>
          <Header size="large" justify="between" pad={{horizontal: 'medium'}}>
            <Title>
              <ChatIcon />
              <span>Chat</span>
            </Title>
            <SideSplit.SideCloser
              onClick={() => this.setState({ navActive: false })} />
          </Header>
          <Box flex={true}>
            <Menu primary={true}>
              <RoutedAnchor label="Conversations" path="/conversations" />
            </Menu>
          </Box>
          <Footer pad={{horizontal: 'medium', vertical: 'small'}}>
            <Menu icon={<UserIcon />} dropAlign={{ bottom: 'top' }}
              a11yTitle="Session">
              <Box pad="medium">
                <Heading tag="h3" margin="none">User name</Heading>
              </Box>
              <RoutedAnchor label="Logout" path="/login" />
            </Menu>
          </Footer>
        </Sidebar>
      );
    }

    return (
      <SideSplit active={navActive}>
        {sidebar}
        <Box>
          <Header size="large" pad={{horizontal: 'medium'}}>
            <SideSplit.SideOpener active={! navActive}
              onClick={() => this.setState({ navActive: true })}>
              <ChatIcon />
            </SideSplit.SideOpener>
            <Search placeHolder="Search" size="medium"
              inline={true} fill={true} />
            <Menu inline={true} direction="row" responsive={false}>
              <RoutedButton icon={<AddIcon />} path="/conversations/add" />
            </Menu>
          </Header>
          {this.props.children}
        </Box>
      </SideSplit>
    );
  }
}
