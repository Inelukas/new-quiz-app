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
  background: var(--secondary-color);
`;

const StyledFetchButton = styled.div``;

const StyledH1 = styled.h1``;

export function Header() {
  return (
    <StyledHeader>
      <StyledFetchButton>
        <Button>Fetch Cards</Button>
      </StyledFetchButton>
      <StyledH1>Quiz App</StyledH1>
      <StyledFetchButton>
        <Button>Button 2</Button>
      </StyledFetchButton>
    </StyledHeader>
  );
}
