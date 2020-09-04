import React from "react";
import MessageList from "./MessageList";
import RoomList from "./RoomList";
import queryString from "query-string";

export default function Chat({ location }) {
  const { name } = queryString.parse(location.search);
  return <RoomList name={name} />;
}
