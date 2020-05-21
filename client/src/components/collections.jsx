import React, { Component } from "react";
import { getTypes } from "../services/typeService";
import ListGroup from "./common/listGroup";
import _ from "lodash";

class Collections extends Component {
  state = {
    types: [],
  };

  // Carga los Tipos de Mercancia
  async componentDidMount() {
    const { data: types } = await getTypes();
    this.setState({ types });
  }

  render() {
    let { types } = this.state;
    console.log("All Types", types);

    types = _.uniqBy(types, "name");
    console.log("Types", types);

    return (
      <div className="collections-container">
        <h1>Collections</h1>
        <ListGroup types={types} />
      </div>
    );
  }
}

export default Collections;
