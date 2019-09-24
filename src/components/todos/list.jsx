import React, { Component } from "react";
import Item from "./item";

class List extends Component {
  render() {
    const list = this.props.tasks.map( todo => {
      return <Item {...todo} key={todo.id} />;
    })
    return(
      <React.Fragment>
        <ul>
          { list }
        </ul>
      </React.Fragment>
    );
  }
}

export default List;