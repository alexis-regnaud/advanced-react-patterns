import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StyledButton } from "./styles.js";
import { useCounterContext } from "../useCounterContext";

function Increment({ icon = "plus" }) {
  const { handleIncrement } = useCounterContext();
  return (
    <StyledButton onClick={handleIncrement}>
      <FontAwesomeIcon icon={icon} color="#17a2b8" />
    </StyledButton>
  );
}

export { Increment };
