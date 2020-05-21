import React, { Component } from "react";

class CollectionsGenre extends Component {
  render() {
    return (
      <div className="collections-genre-container">
        <h1>{this.props.match.params.genre}</h1>
      </div>
    );
  }
}

export default CollectionsGenre;
