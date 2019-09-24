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

    this.addTodo = this.addTodo.bind(this);
    // bindメソッドは、全てのfunctionオブジェクトが持っているメソッドです。
    //この１行は、stateを変更するのに必要。
    // なぜこの1行が必要かというと、addTodoメソッドは、src/pages/App.jsで定義しているものの、実際に実行するのは、src/components/todos/inputs.jsxである。
    // この時、thisの内容が変わってしまう。input.jsxでは、stateやtasksもないので、errorになってしまう。そのため、App.jsのstateを変更することを明示するおまじないと思った方が良い。


    this.resetTodo = this.resetTodo.bind(this);
  }

  addTodo(title) {
    // hash型のオブジェクトに現在のstateを一旦setする。
    const {
      tasks,
      uniqueId,
    } = this.state;

    // tasksにpushする。
    tasks.push({
      title,
      id: uniqueId,
    })

    // stateの値を書き換える時には、必ず`setState`メソッドを使う。
    // setStateメソッドは、変更があったstateのみを上書きするメソッド
    this.setState({
      tasks,
      uniqueId: uniqueId + 1,
    })
  }

  resetTodo() {
    this.setState({
      tasks: [],
      uniqueId: 0,
    })
  }

  render () {
    return (
      <div>
        <Header></Header>
        <Inputs addTodo={this.addTodo}/>
        <List tasks={this.state.tasks}></List>
        <button onClick={this.resetTodo}>リセット</button>
      </div>
    );
  }
}

export default App;
