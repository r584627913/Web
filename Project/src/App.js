import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      ownerID: "",
      peice: null,
      date: "",
      data: null
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
  }

  componentDidMount = () => {
    let react = this;
    $.ajax({
      url: "https://fs.mis.kuas.edu.tw/~s1106137135/webPHP/showProduct.php",
      type: 'POST',
      success: function (data) {
        data = JSON.parse(data);
        react.setState({
          data: data
        });
      },
      error: function (xhr, status, err) {
        react.setState({
          data: xhr + status + err
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
    let merch = [];
    if (this.state.data !== null) {
      for (let d of this.state.data) {
        let row = (
          <tr>
            <td>{d[1]}</td>
            <td>{d[2]}</td>
            <td>{d[3]}</td>
            <td>{d[4]}</td>
          </tr>
        );
        merch.push(row);
      }
    }
    return (
      <table>
        <thead>
          <tr>
            <th>商品名稱</th>
            <th>賣家</th>
            <th>價格</th>
            <th>上架日期</th>
          </tr>
        </thead>
        <tbody>
          {merch}
        </tbody>
      </table>
    );
  }
}
export default App