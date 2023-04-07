export const ChatInterface = ({ themeIcon }) => {
  return (
    <div
      className="chatInterface"
      style={{ backgroundColor: !themeIcon ? "#08242b" : "#F1F1E6" }}
    ></div>
  );
};
