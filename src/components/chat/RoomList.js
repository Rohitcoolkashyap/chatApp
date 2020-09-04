import React, { useState, useEffect } from "react";
import NewRoomForm from "./NewRoomForm";
import MessageList from "./MessageList";
import io from "socket.io-client";
import Empty from "./empty";

export default function RoomList({ name }) {
  const [roomList, setRoomList] = useState(["east", "west", "north", "south"]);
  const [activeRoom, setActiveRoom] = useState(
    roomList.length !== 0 ? roomList[0] : ""
  );

  return (
    <div className="container">
      <ul className="room-li">
        <h3>Rooms</h3>
        {roomList.map((room, index) => (
          <li
            value={room}
            onClick={() => setActiveRoom(room)}
            className="room"
            key={index}
          >
            {room}
          </li>
        ))}
        <li key="-1">
          <NewRoomForm />
        </li>
      </ul>
      {roomList.length !== 0 ? (
        <MessageList activeRoom={activeRoom} name={name} />
      ) : (
        <Empty />
      )}
    </div>
  );
}
