import React, { Component } from "react";

class Inputs extends Component {
  render() {
    return (
      <div>
        <input placeholder="新規TODOを入力してください"></input>
        <button>登録</button>
      </div>
    );
  }
}

export default Inputs;