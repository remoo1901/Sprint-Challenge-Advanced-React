import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(true);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <div
        onClick={toggleMode}
        className={darkMode ? "toggle toggled" : "toggle"}
      />
    </div>
  );
};

export default DarkMode;
