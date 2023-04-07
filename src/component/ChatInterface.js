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
      <input
        className="messageInput"
        type="text"
        placeholder="Ask something..."
        style={{ backgroundColor: !themeIcon ? "#122C34" : "#FFFFFF" }}
      />
      <button className="sendBtn">
        <img src={sendMessageIcon}></img>
      </button>
    </form>
  );
};
