import React from "react";
import { StyledButton } from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Decrement({ icon = "minus", onClick, ...props }) {
  return (
    <StyledButton onClick={onClick} {...props}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}

export { Decrement };
