import React from 'react';
// import $ from 'jquery';
import MerchForm from "./MerchForm"

function Action(props) {
    switch (props.action) {
        case "select":
            return (
                <MerchForm />
            );

        default:
            return (
                <MerchForm />
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
    insert = () => {
        this.setState({
            action: "insert"
        });
    }

    update = () => {
        this.setState({
            action: "update"
        });
    }

    delete = () => {
        this.setState({
            action: "delete"
        });
    }

    render() {
        return (
            <div>
                <Action action={this.state.action} />
                <button onClick={this.insert}>
                    新增
                </button>
                <button onClick={this.update}>
                    修改
                </button>
                <button onClick={this.delete}>
                    刪除
                </button>
            </div >
        );
    }
}
export default Main;