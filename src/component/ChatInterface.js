import { useState } from "react";
import sendMessageIcon from "./../images/sendMessageIcon.png";

export const ChatInterface = ({ themeIcon }) => {
  const [inputText, setInputText] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMsg = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("non hai scritto niente!!");
    } else {
      const newMessage = {
        id: messages.length + 1,
        text: inputText,
      };
      setMessages([...messages, newMessage]);
      setInputText("");
    }
  };

  return (
    <div
      className="chatInterface"
      style={{ backgroundColor: !themeIcon ? "#08242b" : "#F1F1E6" }}
    >
      <MessageInput
        themeIcon={themeIcon}
        inputText={inputText}
        setInputText={setInputText}
        handleSendMsg={handleSendMsg}
      />
      <ShowingMessages messages={messages} />
    </div>
  );
};

const MessageInput = ({
  themeIcon,
  inputText,
  setInputText,
  handleSendMsg,
}) => {
  const handleInputText = (e) => {
    setInputText(e.target.value);
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
        value={inputText}
        onChange={handleInputText}
      />
      <button className="sendBtn" onClick={handleSendMsg}>
        <img src={sendMessageIcon} alt="send message"></img>
      </button>
    </form>
  );
};

const ShowingMessages = ({ messages }) => {
  return (
    <div className="showingMessages">
      {messages.map((message) => (
        <Message key={message.id} text={message.text} />
      ))}
    </div>
  );
};

const Message = ({ text, themeIcon }) => {
  return (
    <span
      className="userMessage"
      style={{
        backgroundColor: !themeIcon ? "#2c8475" : "#00C5A6",
      }}
    >
      {text}
    </span>
  );
};
