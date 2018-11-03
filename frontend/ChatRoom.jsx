import React from "react";
import Message from "./Message.jsx";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel", room: "ChatRoom" },
      {
        received: data => {
          const messages = data["messages"];
          this.setState({
            messages: messages
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
    const messageList = this.state.messages.map((message, idx) => {
      return <li key={idx}>{message}</li>;
    });

    return (
      <div>
        <div>
          ChatRoom
          <button onClick={this.handleSubmit.bind(this)}>Open Chat</button>
        </div>
        <div>{messageList}</div>
        <Message />
      </div>
    );
  }
}

export default ChatRoom;
