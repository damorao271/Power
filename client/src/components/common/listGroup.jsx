import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    const { types } = this.props;

    return (
      <div className="list-group-container">
        <h3>List Group</h3>
        <ul>
          {types.map((t) => (
            <li key={t._id}>
              <p>{t.name} </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListGroup;
