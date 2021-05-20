import React from 'react';
// import $ from 'jquery';
import MerchTable from "./MerchTable"
import InsertPage from "./InsertPage"
import DeletePage from "./DeletePage"

function Action(props) {
    switch (props.action) {
        case "select":
            return (
                <MerchTable />
            );

        case "insert":
            return (
                <InsertPage />
            );

        case "delete":
            return (
                <DeletePage />
            );

        default:
            // console.log(props.action);
            return (
                <MerchTable />
            );
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            action: "select"
        };
    }

    menu = () => {
        this.setState({
            action: "menu"
        });
    }

    insert = () => {
        this.setState({
            action: "insert"
        });
    }

    // update = () => {
    //     this.setState({
    //         action: "update"
    //     });
    // }

    delete = () => {
        this.setState({
            action: "delete"
        });
    }

    render() {
        return (
            <div>
                <Action action={this.state.action} />
                <button onClick={this.menu}>
                    回主畫面
                </button>
                <button onClick={this.insert}>
                    新增
                </button>
                {/* <button onClick={this.update}>
                    修改
                </button> */}
                <button onClick={this.delete}>
                    刪除
                </button>
            </div >
        );
    }
}
export default Main;