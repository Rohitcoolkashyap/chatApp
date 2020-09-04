import React from "react";
import { useState } from "react";
import SendMessageForm from "./SendMessageForm";
import { useEffect } from "react";
import io from "socket.io-client";

let socket;

export default function MessageList({ activeRoom, name }) {
  console.log(name);
  const [room, setRoom] = useState(activeRoom);
  const [msg, setMsg] = useState("");
  const [msgList, setMsgList] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setMsgList([...msgList, { name, msg }]);
    setMsg("");
  }
  const ENDPOINT = "localhost:5000";
  useEffect(() => {
    socket = io(ENDPOINT); // instance of socket

    socket.emit("join", { name, activeRoom }, () => console.log("error"));

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, activeRoom]);

  useEffect(() => {
    setRoom(activeRoom);
    setMsgList([]);
  }, [activeRoom]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMsgList([...msgList, message]);
    });
  }, [msgList]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (msg) {
      socket.emit("sendMessage", msg, () => setMsg(""));
    }
  };
  console.log(msg, msgList);

  return (
    <div className="message-list">
      <div>
        <h2>{activeRoom}</h2>
      </div>
      <div className="message-body">
        {msgList.map((msg, index) => (
          <div className="message" key={index}>
            <p className="msg-name">{name}</p>
            <p className="msg-content">{msg.msg}</p>
          </div>
        ))}
      </div>
      <div className="message-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name=""
            value={msg}
            placeholder="send message"
            onChange={(e) => setMsg(e.target.value)}
          ></input>
          <button>send</button>
        </form>
      </div>
    </div>
  );
}
