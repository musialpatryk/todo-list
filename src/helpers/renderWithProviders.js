import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "theme";

export const renderWithProviders = (children) => {
  return render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);
};