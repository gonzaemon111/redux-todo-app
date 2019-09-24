import React, { Component } from 'react';
import Header from "../layouts/header";
import Inputs from '../components/todos/inputs';
import List from '../components/todos/list';

class App extends Component {
  render () {
    const tasks = [
      { title: 'Todo１つ目', id: 0 },
      { title: 'Todo２つ目', id: 1 },
    ];

    return (
      <div>
        <Header></Header>
        <Inputs />
        <List tasks={tasks}></List>
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
