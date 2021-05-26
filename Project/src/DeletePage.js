import React from 'react';
import $ from 'jquery';

class DeletePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            selected: []
        };
    }

    changeHandler = (event) => {
        let arr = this.state.selected;
        if (event.target.checked) {
            arr.push(event.target.value);
        } else {
            arr.splice(arr.indexOf(event.target.value), 1)
        }
        this.setState({ selected: arr });
        console.log(this.state.selected.toString());
    }

    submitHandler = () => {
        let react = this;
        $.ajax({
            url: "https://fs.mis.kuas.edu.tw/~s1106137135/webPHP/doDelete.php",
            type: 'POST',
            async: false,
            data: {
                'product_id': react.state.selected.toString()
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

    render() {
        let temp = this;
        var merches = [];
        if (this.state.data !== null) {
            merches = this.state.data.map(
                function (merch) {
                    return (
                        <tr key={merch[0]}>
                            <td><input type="checkbox" value={merch[0]} onChange={temp.changeHandler} /></td>
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
            <form onSubmit={this.submitHandler}>
                <table>
                    <thead>
                        <tr>
                            <th></th>
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
                <input
                    type="submit"
                    value="確認刪除"
                />
            </form>
        );
    }
}
export default DeletePage;