import React, { useRef } from "react";
import sendMessageIcon from "./../images/sendMessageIcon.png";

export const ChatInterface = ({ themeIcon }) => {
  return (
    <div
      className="chatInterface"
      style={{ backgroundColor: !themeIcon ? "#08242b" : "#F1F1E6" }}
    >
      <MessageInput themeIcon={themeIcon} />
    </div>
  );
};

const MessageInput = ({ themeIcon }) => {
  return (
    <form className="interfaceForm">
      <textarea
        className="messageInput"
        rows={1}
        placeholder="Ask something..."
        style={{
          backgroundColor: !themeIcon ? "#122C34" : "#FFFFFF",
          color: !themeIcon ? "#FFFFFF" : "#000000",
        }}
      />
      <button className="sendBtn">
        <img src={sendMessageIcon}></img>
      </button>
    </form>
  );
};
