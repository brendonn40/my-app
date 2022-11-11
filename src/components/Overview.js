// Overview.js

import React from 'react';
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

const Overview = props => {
  const { tasks } = props;

  return (
    <UnorderedList>
      {tasks.map(task => {
        return <ListItem key={task.id}>{task.text}</ListItem>;
      })}
    </UnorderedList>
  );
};

export default Overview;
