// App.js

import React, { Component } from 'react';
import Overview from './components/Overview';
import uniqid from 'uniqid';
import { Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid(),
      },
      tasks: [],
    };
  }

  handleChange = e => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = e => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid(),
      },
    });
  };

  render() {
    const { task, tasks } = this.state;

    return (
      <Box>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor="taskInput">Enter task</label>
          <Input
            onChange={this.handleChange}
            value={task.text}
            type="text"
            id="taskInput"
          />
          <Button type="submit" colorScheme="blue">
            Add Task
          </Button>
        </form>
        <Overview tasks={tasks} />
      </Box>
    );
  }
}

export default App;
