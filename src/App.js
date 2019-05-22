import React from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import theme from "./theme";
import SimpleStyledButton from "./components/SimpleStyledButton";
import DynamicallyStyledButton from "./components/DynamicallyStyledButton";
import SignIn from "./pages/SignIn";

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // Define a custom insertion for injecting the JSS styles in the DOM
  insertionPoint: document.getElementById("jss-insertion-point")
});

function App() {
  return (
    <>
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <Button variant="outlined">Button styled with MUI theme only</Button>
          <SimpleStyledButton variant="outlined">
            Simple button styled with styled-components
          </SimpleStyledButton>
          <DynamicallyStyledButton
            color="green"
            backgroundColor="yellow"
            disabled>
            Dynamically Styled Button
          </DynamicallyStyledButton>
        </MuiThemeProvider>
      </JssProvider>
      <SignIn />
    </>
  );
}

export default App;
