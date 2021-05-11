import React from 'react';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      type: 'POST',
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
    let merches = [];
    if (this.state.data !== null) {
      for (let merch of this.state.data) {
        let row = (
          <tr key={merch[0]}>
            <td key={1}>{merch[1]}</td>
            <td key={2}>{merch[2]}</td>
            <td key={3}>{merch[3]}</td>
            <td key={4}>{merch[4]}</td>
          </tr>
        );
        merches.push(row);
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
          {merches}
        </tbody>
      </table>
    );
  }
}
export default App