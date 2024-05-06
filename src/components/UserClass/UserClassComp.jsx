import React from "react";
class UserClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "John", surname: "Doe", age: 0, points: 0 };
  }
  render() {
    return (
      <>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        ></input>
        <br></br>
        <input
          value={this.state.surname}
          onChange={(e) => this.setState({ surname: e.target.value })}
        ></input>
        <br></br>
        <input
          type="number"
          min={0}
          onChange={(e) => this.setState({ age: e.target.value })}
        />
        <br></br>
        <input
          type="number"
          min={0}
          onChange={(e) => this.setState({ points: e.target.value })}
        />
        <p>
          Firstname: <b>{this.state.name}</b>
        </p>
        <p>
          Lastname: <b>{this.state.surname}</b>
        </p>
        <p>
          Age: <b>{this.state.age}</b>
        </p>
        <p>
          Points: <b>{this.state.points}</b>
        </p>
      </>
    );
  }
}

export default UserClassComp;
