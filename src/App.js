import React from "react";
import styled from "styled-components";
import { Usage as CompoundComponent } from "./patterns/compound-component/Usage";
import { Usage as ControlProps } from "./patterns/control-props/Usage";
import { Usage as CustomHooks } from "./patterns/custom-hooks/Usage";
import { Usage as PropsGetters } from "./patterns/props-getters/Usage";
import { Usage as StateReducer } from "./patterns/state-reducer/Usage";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faMinus,
  faMinusCircle,
  faMinusSquare
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faMinus,
  faMinusCircle,
  faMinusSquare
);

export default function App() {
  return (
    <StyledContainer>
      <StyledTitleContainer>
        <h1>Advanced React Pattern</h1>
      </StyledTitleContainer>

      <StyledPatternContainer>
        <h2>Compound component pattern</h2>
        <CompoundComponent />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Control props pattern</h2>
        <ControlProps />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Custom hooks pattern</h2>
        <CustomHooks />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>Props PropsGetters pattern</h2>
        <PropsGetters />
      </StyledPatternContainer>

      <StyledPatternContainer>
        <h2>State reducer Pattern</h2>
        <StateReducer />
      </StyledPatternContainer>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  text-align: center;
  font-family: sans-serif;
`;

const StyledTitleContainer = styled.div`
  background-color: #1428a0;
  color: white;
  padding: 35px;

  > h1 {
    margin: 0;
  }
`;

const StyledPatternContainer = styled.div`
  padding: 30px;
  border-bottom: 2px solid #d3d3d3;

  &:last-child {
    border: none;
  }

  > h2 {
    margin-top: 0;
  }
`;
