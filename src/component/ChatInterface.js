import { useState } from "react";
import sendMessageIcon from "./../images/sendMessageIcon.png";
import { type } from "@testing-library/user-event/dist/type";

export const ChatInterface = ({ themeIcon }) => {
  const [inputText, setInputText] = useState("");
  return (
    <div
      className="chatInterface"
      style={{ backgroundColor: !themeIcon ? "#08242b" : "#F1F1E6" }}
    >
      <MessageInput
        themeIcon={themeIcon}
        inputText={inputText}
        setInputText={setInputText}
      />
      <ShowingMessages inputText={inputText} />
    </div>
  );
};

const MessageInput = ({ themeIcon, inputText, setInputText }) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
  };
  const handleSendMsg = (e) => {
    e.preventDefault();
    if (inputText == "") {
      alert("non hai scritto niente!!");
    } else {
      console.log(inputText);
    }
  };
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
        onChange={handleInputText}
      />
      <button className="sendBtn" onClick={handleSendMsg}>
        <img src={sendMessageIcon} alt="send message"></img>
      </button>
    </form>
  );
};

const ShowingMessages = ({ inputText }) => {
  return (
    <div className="showingMessages">
      <span className="userMessage">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </span>
    </div>
  );
};
