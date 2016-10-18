// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import Chat from './Chat';
import Login from './Login';
import Main from './Main';
import Conversations from './Conversations';
import ConversationAdd from './ConversationAdd';
// import TBD from 'grommet/components/TBD';

export let routes = {
  path: '/', component: Chat,
  childRoutes: [
    { path: 'login', component: Login },
    { component: Main,
      childRoutes: [
        { path: 'conversations', component: Conversations,
          childRoutes: [
            { path: 'add', component: ConversationAdd }
          ]
        }
      ]
    }
  ]
};
