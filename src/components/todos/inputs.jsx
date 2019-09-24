import React, { Component } from "react";

class Inputs extends Component {

  constructor(props){
    super(props);

    this.state = {
      inputValue: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault(); // aタグのデフォルト機能である「ページ遷移」をprenvent(防止)する。

    const inputValue = this.state.inputValue;
    this.props.addTodo(inputValue);

    this.setState({
      inputValue: '',
    })
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }

  render() {
    return (
      <div>
        <input placeholder="新規TODOを入力してください" value={this.state.inputValue} onChange={this.handleChange}></input>
        {/* onClickなどのイベントに登録された関数は引数として、Eventオブジェクトを受け取っています。 */}
        <button onClick={this.handleClick}>登録</button>
      </div>
    );
  }
}

export default Inputs;