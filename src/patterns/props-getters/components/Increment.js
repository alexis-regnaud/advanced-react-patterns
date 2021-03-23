import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "./styles.js";

function Increment({ icon = "plus", onClick, ...props }) {
  return (
    <StyledButton onClick={onClick} {...props}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}

export { Increment };
