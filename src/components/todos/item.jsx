import React, { Component } from "react";

class Item extends Component {
  render() {
    return (
      <li> { this.props.title } </li>
    );
  }
}

export default Item;