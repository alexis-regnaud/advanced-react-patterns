import React from "react";
import { StyledButton } from "./styles.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCounterContext } from "../useCounterContext";

function Decrement({ icon = "minus" }) {
  const { handleDecrement } = useCounterContext();
  return (
    <StyledButton onClick={handleDecrement}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}

export { Decrement };
