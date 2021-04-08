import React from "react";
import ReactDOM from "react-dom"

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {messages: []};
        this.submit = this.submit.bind(this);
    }

    render() {
        return (
            <div>
                <h1>Список сообщений</h1>
                <MessageList messages={this.state.messages} />
                <form onSubmit={this.submit}>
                    <button>Добавить новое сообщение</button>
                </form>
            </div>
        );
    }

    submit(e) {
        e.preventDefault();
        const newMessage = {
            text: `Сообщение ${this.state.messages.length+1}`,
            id: Date.now()
        };
        this.setState(state => ({
            messages: state.messages.concat(newMessage)
        }));
    }
}

class MessageList extends React.Component {
    render() {
        return (
            <div>
                {this.props.messages.map(msg => (
                    <div key={msg.id}>{msg.text}</div>
                ))}
            </div>
        );
    }
}

ReactDOM.render(
    <Messages />,
    document.getElementById('root')
);