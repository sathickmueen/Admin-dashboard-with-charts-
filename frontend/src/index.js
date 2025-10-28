import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { lightTheme, darkTheme } from "./theme";

const Root = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () =>
    setTheme(theme === lightTheme ? darkTheme : lightTheme);

  return (
    <BrowserRouter>
      <App theme={theme} toggleTheme={toggleTheme} />
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);
