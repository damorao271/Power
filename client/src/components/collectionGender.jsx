import React, { Component } from "react";
import ListGroup from "../components/common/listGroup";
class CollectionGender extends Component {
  render() {
    const { types, gender } = this.props;
    return (
      <div className="type-container">
        <h3>Collection Gender</h3>
        <ListGroup types={types} gender={gender} />
      </div>
    );
  }
}

export default CollectionGender;
