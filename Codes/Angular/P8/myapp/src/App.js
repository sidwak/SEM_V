import React from "react";
import ReactDOM from "react-dom";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
    };

    this.mySubmitHandler = (event) => {
      event.preventDefault();
      let age = this.state.age;
      if (!Number(age)) {
        alert("Age should be a number");
      }
    };

    this.myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({ [nam]: val });
    };
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>
          {" "}
          Hi my name is {this.state.username} age {this.state.age}{" "}
        </h1>
        <p> Enter your name:</p>
        <input type="text" name="username" onChange={this.myChangeHandler} />
        <p> Enter your age:</p>
        <input type="text" name="age" onChange={this.myChangeHandler} />
        <br />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default MyForm;
