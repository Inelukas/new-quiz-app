import styled from "styled-components";
import { Button } from "../Button/Button";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 10vh;
  background: var(--side-color);
  box-shadow: 0px 5px var(--text-color);
  z-index: 2;

  button {
    background: var(--secondary-color);
  }
`;

const StyledFetchButton = styled.div`
  display: ${({ $showButton }) => ($showButton ? "block" : "none")};
`;

const StyledH1 = styled.h1``;

export function Header({ pagination }) {
  return (
    <StyledHeader>
      <StyledFetchButton $showButton={pagination === "Main"}>
        <Button>Fetch Cards</Button>
      </StyledFetchButton>
      <StyledH1>Quiz App</StyledH1>
      <StyledFetchButton $showButton={pagination === "Main"}>
        <Button>Button 2</Button>
      </StyledFetchButton>
    </StyledHeader>
  );
}
