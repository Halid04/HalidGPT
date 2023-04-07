import lightModeIcon from "./../images/lightModeIcon.png";
import darkModeIcon from "./../images/darkModeIcon.png";

export const Navbar = ({ themeIcon, setThemeIcon }) => {
  return (
    <nav
      className="navbar"
      style={{ backgroundColor: !themeIcon ? "#122c34" : "#2C8475" }}
    >
      <h1
        className="logo"
        style={{ color: !themeIcon ? "#6c8690" : "#ffffff" }}
      >
        HalidGPT
      </h1>
      <div className="iconWrapper">
        <img
          className="themeIcon"
          src={!themeIcon ? lightModeIcon : darkModeIcon}
          alt="icon theme"
          onClick={() => {
            setThemeIcon((value) => !value);
          }}
        ></img>
      </div>
    </nav>
  );
};
