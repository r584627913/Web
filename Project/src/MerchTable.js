import React from 'react';
import $ from 'jquery';

class MerchTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
    }

    // componentWillUnmount = () => {
    //     this.setState({
    //         data: null
    //     });
    // }

    componentDidMount = () => {
        let react = this;
        $.ajax({
            url: "https://fs.mis.kuas.edu.tw/~s1106137135/webPHP/showProduct.php",
            type: 'POST',
            async: false,
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
        var merches = [];
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
export default MerchTable;