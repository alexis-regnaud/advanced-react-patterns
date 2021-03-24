import styled from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  border: none;
  &:hover {
    cursor: pointer;
  }
  &:active,
  &:focus {
    outline: none;
  }
`;

export { StyledButton };
