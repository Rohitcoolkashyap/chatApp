import React from "react";
import { useState } from "react";

export default function SendMessageForm() {
  const [msg, setMsg] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    setMsg("");
  }
  return (
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
  );
}
