import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ListGroup extends Component {
  render() {
    // Se Filtra el tipo de Ropa por genero
    let { types, gender } = this.props;
    types = types.filter((t) => t.gender === gender);

    return (
      <div className="list-group-container">
        <h3>List Group</h3>
        <ul>
          {types.map((t) => (
            <li key={t._id}>
              <p>
                <NavLink to={`/collections/${t.gender}/${t.name}`}>
                  {t.name}
                </NavLink>
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListGroup;
