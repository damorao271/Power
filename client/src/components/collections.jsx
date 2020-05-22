import React, { Component } from "react";
import { getTypes } from "../services/typeService";
import { Route, Switch } from "react-router-dom";
import CollectionGender from "./collectionGender";

class Collections extends Component {
  state = {
    types: [],
    products: [],
  };

  // Carga los Tipos de Mercancia
  async componentDidMount() {
    const { data: types } = await getTypes();
    this.setState({ types });
  }

  render() {
    const { types } = this.state;

    return (
      <div className="collections-container">
        <h1>Collections</h1>
        <Switch>
          <Route
            path="/collections/unisex"
            render={(props) => (
              <CollectionGender gender="unisex" types={types} />
            )}
          />
          <Route
            path="/collections/women"
            render={(props) => (
              <CollectionGender gender="women" types={types} />
            )}
          />
          <Route
            path="/collections/men"
            render={(props) => <CollectionGender gender="men" types={types} />}
          />
        </Switch>
      </div>
    );
  }
}

export default Collections;
