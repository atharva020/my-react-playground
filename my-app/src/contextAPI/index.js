import React, { useState, useContext } from "react";

import "./styles.css";

const ThemeContext = React.createContext("dark");

function Comp1() {
  const { theme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
    padding: "20px",
    borderRadius: "5px",
  };

  return (
    <div style={styles}>
      <h1>{theme === "light" ? "Light Mode" : "Dark Mode"}</h1>
    </div>
  );
}

function Comp2() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

const ContextApi = () => {
  const [theme, setTheme] = useState("Ligth");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }} className="App">
      <Comp1 />
      <Comp2 />
    </ThemeContext.Provider>
  );
};

export default ContextApi;
