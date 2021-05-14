import React from 'react';
import $ from 'jquery';

class MerchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
        // this.submitHandler = this.submitHandler.bind(this);
        // this.changeHandler = this.changeHandler.bind(this);
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
                console.log(xhr + status + err);
            }
        });

        // let temp = [];
        // for (let i = 0; i < Number.MAX_VALUE; i++) {
        //     let t = [];
        //     for (let j = 0; j < 5; j++) {
        //         t.push(i);
        //     }
        //     temp.push(t);
        // }

        // this.setState({
        //     data: temp
        // });
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
        this.setState({
            [name]: val
        });
    }

    render() {
        let merches = [];
        if (this.state.data !== null) {
            merches = this.state.data.map(
                function (merch) {
                    return (
                        <tr key={merch[0]}>
                            <td>{merch[1]}</td>
                            <td>{merch[2]}</td>
                            <td>{merch[3]}</td>
                            <td>{merch[4]}</td>
                        </tr>
                    )
                }
            )
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
export default MerchForm