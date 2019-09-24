import React, { Component } from "react";

class Inputs extends Component {

  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addTodo("新規Todo");
  }

  render() {
    return (
      <div>
        <input placeholder="新規TODOを入力してください"></input>
        <button onClick={this.handleClick}>登録</button>
      </div>
    );
  }
}

export default Inputs;