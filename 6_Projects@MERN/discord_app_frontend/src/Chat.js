import { AddCircle, CardGiftcard, EmojiEmotions, GifOutlined,  } from "@mui/icons-material";
import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import Message from "./Message";

function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat_messages">
          <Message/>

      </div>

      <div className="chat_input">
        <AddCircle fontSize="large"/>
        <form>
            <input placeholder={`Message #TESTCHANNEL`} />
            <button type="submit" className="chat_inputButton">Send Message</button>
        </form>

        <div className="chat_inputIcons">
            <CardGiftcard fontSize="large"/>
            <GifOutlined fontSize="large"/>
            <EmojiEmotions fontSize="large"/>
        </div>
      </div>
    </div>
  );
}

export default Chat;
