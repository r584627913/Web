import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "default",
      ownerID: "",
      peice: null,
      date: ""
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount = () => {
    let react = this;
    $.ajax({
      url: "https://fs.mis.kuas.edu.tw/~s1106137135/webPHP/showProduct.php",
      type: 'POST',
      // data: {

      // },
      success: function (data) {
        react.setState({
          productName: data
        });
      },
      error: function (xhr, status, err) {
        react.setState({
          productName: err
        });
      }
    });
  }

  submitHandler = (event) => {
    let react = this;
    $.ajax({
      url: "showProduct.php",
      type: 'GET',
      // data: {
      //   'form_email': this.state.contactEmail,
      //   'form_msg': this.state.contactMessage
      // },
      success: function (data) {
        react.setState({
          productName: "success"
        });
      },
      error: function (xhr, status, err) {
        console.log(xhr, status);
        console.log(err);
      }
    });
  }

  changeHandler = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  }

  render() {
    console.log(this.state.productName);
    return (
      this.state.productName
      // <form onSubmit={this.submitHandler} >
      //   <h1>Hello {this.state.username} {this.state.age}</h1>
      //   <p>Enter your name:</p>
      //   <input
      //     type='text'
      //     name='username'
      //     onChange={this.changeHandler}
      //   />
      //   <p>Enter your age:</p>
      //   <input
      //     type='text'
      //     name='age'
      //     onChange={this.changeHandler}
      //   />
      // </form>
    );
  }
}
export default App