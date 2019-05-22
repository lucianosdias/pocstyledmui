import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default styled(({ color, backgroundColor, ...otherProps }) =>
  (<Button {...otherProps} classes={{ disabled: "disabled", label: "label" }} />))`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};

  & .label {
    background-color: purple;
  }
  &.disabled {
    color: black;
    background-color: orange;
    .label {
      background-color: green;
    }
  }
`;