import React from "react";
import Message from "./Message.jsx";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      TextInput: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel", room: "ChatRoom" },
      {
        received: data => {
          const messages = data["messages"];
          this.setState({
            Messages: messages
          });
        },
        speak: function(data) {
          return this.perform("speak", data);
        },
        load: function() {
          return this.perform("load");
        }
      }
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].load();
  }

  render() {
    const list = this.state.Messages
      ? this.state.Messages.map((message, idx) => {
          return <li key={idx}>{message}</li>;
        })
      : null;

    return (
      <div>
        <div>ChatRoom</div>
        <div>{list}</div>
        <button onClick={this.handleSubmit}>Open Chat</button>
        <Message />
      </div>
    );
  }
}

export default ChatRoom;
