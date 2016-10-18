// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';

// hard code for now
const STATE = {
  conversations: [
    {
      _id: '1',
      name: 'grommet-core',
      messages: [
        {
          _id: '1',
          text: 'Where do you guys eat lunch?',
          personId: '1',
          date: (new Date()).toISOString()
        },
        {
          _id: '2',
          text: 'Sushirito',
          personId: '2',
          date: (new Date()).toISOString()
        }
      ]
    }
  ],
  people: {
    1: { name: 'Alan' },
    2: { name: 'Chris' }
  }
};

export default class Conversations extends Component {

  constructor () {
    super();
    this._onSubmit = this._onSubmit.bind(this);
    this.state = STATE;
  }

  _onSubmit (size) {
    const { router } = this.context;
    // this.props.dispatch(addItem(size));
    router.push({ pathname: '/conversations' });
  }

  render () {
    const { conversations } = this.state;

    const tiles = conversations.map(conversation => {
      const messages = conversation.messages.map(message => {
        return (
          <Box key={message._id}>
            {message.text}
          </Box>
        );
      });
      return (
        <Tile key={conversation._id}>
          <Heading tag="h3">{conversation.name}</Heading>
          {messages}
          <input type="text" />
        </Tile>
      );
    });

    return (
      <Box pad="medium">
        <Tiles>
          {tiles}
        </Tiles>
        {this.props.children}
      </Box>
    );
  }
}

Conversations.contextTypes = {
  router: PropTypes.any
};
