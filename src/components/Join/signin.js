import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./signin.css";

export default function SignIn() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  console.log(name);

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="password"
            className="joinInput mt-20"
            type="password"
            onChange={(event) => setPass(event.target.value)}
          />
        </div>
        <Link
          onClick={(e) => (!name || !pass ? e.preventDefault() : null)}
          to={`/chat?name=${name}`}
        >
          <button className={"button mt-20"} type="submit">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}
