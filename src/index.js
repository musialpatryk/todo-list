import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./globalStyles";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
