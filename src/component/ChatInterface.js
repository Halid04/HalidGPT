import sendMessageIcon from "./../images/sendMessageIcon.png";

export const ChatInterface = ({ themeIcon }) => {
  return (
    <div
      className="chatInterface"
      style={{ backgroundColor: !themeIcon ? "#08242b" : "#F1F1E6" }}
    >
      <MessageInput themeIcon={themeIcon} />
      <ShowingMessages />
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

const ShowingMessages = () => {
  return (
    <div className="showingMessages">
      <span className="userMessage">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </span>
      <span className="assistanteMessage">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </span>
      <span className="userMessage">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </span>
      <span className="assistanteMessage">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </span>
      <span className="userMessage">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s,
      </span>
      <span className="assistanteMessage">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </span>
    </div>
  );
};
