import React from 'react';
import $ from 'jquery';

class InsertPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: "",
            owner_id: "",
            price: 0
        }
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let val = event.target.value;
        if (name === "price") {
            if (isNaN(val)) {
                event.target.value = event.target.value.substring(0, event.target.value.length - 1);
                val = event.target.value;
                alert("價格只能為數字");
            }
        }
        this.setState({
            [name]: val
        });
    }

    submitHandler = () => {
        $.ajax({
            url: "https://fs.mis.kuas.edu.tw/~s1106137135/webPHP/doInsert.php",
            type: 'POST',
            async: false,
            data: {
                'product_name': this.state.product_name,
                'owner_id': this.state.owner_id,
                'price': this.state.price
            },
            success: function (data) {
                alert(data);
            },
            error: function (xhr, status, err) {
                console.log(xhr, status);
                console.log(err);
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <table>
                    <tbody>
                        <tr>
                            <td>商品名稱:</td>
                            <td>
                                <input
                                    type="text"
                                    name="product_name"
                                    onChange={this.changeHandler}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>賣家:</td>
                            <td>
                                <input
                                    type="text"
                                    name="owner_id"
                                    onChange={this.changeHandler}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>價格:</td>
                            <td>
                                <input
                                    type="text"
                                    name="price"
                                    onChange={this.changeHandler}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input
                    type="submit"
                    value="確認新增"
                />
            </form>
        );
    }
}
export default InsertPage;