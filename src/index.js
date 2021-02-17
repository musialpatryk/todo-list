import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "./globalStyles";
import GlobalFonts from "./fonts/fonts";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalFonts />
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
