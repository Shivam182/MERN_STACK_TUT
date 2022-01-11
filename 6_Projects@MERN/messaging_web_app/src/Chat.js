import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined,InsertEmoticon ,MicOutlined} from "@material-ui/icons";

function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
        <Avatar />
        <div className="chat_headerInfo">
          <h3>Room Name</h3>
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
        <p className="chat_message">
          This is the message
          <span className="chat_timeStamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>

        <p className="chat_message chat_receiver">
          This is the message
          <span className="chat_timeStamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>

        <p className="chat_message">
          This is the message
          <span className="chat_timeStamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>

        <p className="chat_message">
          This is the message
          <span className="chat_timeStamp">
            {new Date().toLocaleTimeString()}
          </span>
        </p>
       

      </div>
      <div className="chat_footer">
          <InsertEmoticon/>
          <form>
              <input type="text" placeholder="Type a message"/>
              <button type="submit">Send</button>
          </form>
          <MicOutlined/>
      </div>
    </div>
  );
}

export default Chat;
