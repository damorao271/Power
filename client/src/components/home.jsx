import React, { Component } from "react";
import { getUsers } from "../services/userService";

class Home extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const { data: users } = await getUsers();
    this.setState({ users });
    console.log(users);
  }

  render() {
    return (
      <div className="home-container">
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
