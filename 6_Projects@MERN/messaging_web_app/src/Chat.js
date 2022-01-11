import React, { useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AttachFile,
  MoreVert,
  SearchOutlined,
  InsertEmoticon,
  MicOutlined,
} from "@material-ui/icons";

import axios from "./axios";

function Chat(props) {
  const [input, setInput] = useState("");

  const sendBtn =async (event) => {
    event.preventDefault();
    console.log('i ran ...........')
    await axios.post("/messages/new", {
      message: input,
      name: "shivam",
      timestamp: "Just Now",
      received: false,
    });

    setInput("");
  };
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Rafael</h3>
          <p>Last seen at...{new Date().toUTCString()}</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat_body">
        {props.messages.map((message) => {
          return (
            <p
              className={`chat_message ${message.received && "chat_receiver"}`}
            >
              {message.message}
              <span className="chat_timeStamp">
                {new Date().toLocaleTimeString()}
              </span>
            </p>
          );
        })}
      </div>
      <div className="chat_footer">
        <InsertEmoticon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit" onClick={sendBtn}>
      
          </button>
        </form>
        <MicOutlined />
      </div>
    </div>
  );
}

export default Chat;
