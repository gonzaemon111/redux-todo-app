import React, { Component } from 'react';
import Header from "../layouts/header";
import Inputs from '../components/todos/inputs';
import List from '../components/todos/list';

class App extends Component {
  constructor(props) {
    super(props);

    // stateの初期値を設定。
    this.state = {
      tasks: [
        { title: 'Todo１つ目', id: 0 },
      ],
      uniqueId: 1,
    };
  }

  render () {
    return (
      <div>
        <Header></Header>
        <Inputs />
        <List tasks={this.state.tasks}></List>
      </div>
    );
  }
}

export default App;
