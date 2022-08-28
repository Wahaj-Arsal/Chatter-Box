/** @format */

import { useEffect } from "react";

import { io } from "socket.io-client";
const socket = io.connect("http://localhost:8080");

function App() {
  const sendMessage = () => {
    socket.emit("sendMessage", { message: "Hello" });
  };

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      alert(data.message);
    });
  }, [socket]);

  return (
    <>
      <h1>Chatter-Box</h1>
      <h2>Home Page</h2>
      <input placeholder="message" />
      <button onClick={sendMessage}>Send Message</button>
    </>
  );
}

export default App;
