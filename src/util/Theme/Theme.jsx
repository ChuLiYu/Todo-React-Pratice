import React from "react";
import { ThemeProvider } from "styled-components";

const lightTheme = {
  backgroundColor: "white",
  textColor: "black",
  placeholderColor: "grey",
  borderColor: "lightgrey"
};

const darkTheme = {
  backgroundColor: "black",
  textColor: "white",
  placeholderColor: "white",
  borderColor: "white"
};

const Theme = ({ children, theme = "light" }) => (
  <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    {children}
  </ThemeProvider>
);

export { darkTheme, lightTheme };