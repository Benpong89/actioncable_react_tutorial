import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({
      message: this.state.body
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.body}
            onChange={this.update("body")}
          />
          <button type="submit" />
        </form>
      </div>
    );
  }
}

export default Message;
