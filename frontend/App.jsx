// import React from "react";
// import ChatRoom from "./ChatRoom.jsx";
//
// class App extends React.Component {
//   componentWillMount() {
//     App.cable.subscriptions.create(
//       { channel: "ChatChannel", room: "ChatRoom" },
//       {
//         received: data => {
//           this.setState({
//             Messages: data
//           });
//         },
//         speak: function(data) {
//           return this.perform("speak", data);
//         },
//         load: function() {
//           return this.perform("load");
//         }
//       }
//     );
//   }
//
//   render() {
//     return (
//       <div>
//         <ChatRoom />
//       </div>
//     );
//   }
// }
//
// export default App;
