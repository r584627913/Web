import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
    };
  }
  myChangeHandler = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    if (name === "age") {
      if (isNaN(val)) {
        event.target.value = event.target.value.substring(0, event.target.value.length - 1);
        val = event.target.value;
        alert("Your age must be a number.");
      }
    }
    this.setState({ [name]: val });
  }
  render() {
    return (
      <form>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
      </form>
    );
  }
}
export default App