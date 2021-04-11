import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { TodosProvider } from "providers/todos-context";

const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <TodosProvider>{children}</TodosProvider>
    </ThemeProvider>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
