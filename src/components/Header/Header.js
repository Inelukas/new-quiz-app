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

  h1 {
    color: ${({ $darkMode }) =>
      $darkMode ? "var(--text-color)" : "var(--primary-color)"};
  }

  @media screen and (max-width: 500px) {
    gap: 5px;

    h1,
    button {
      transform: scale(0.7);
    }
  }
`;

const StyledFetchButton = styled.div`
  :hover {
    transform: scale(1.3);
  }

  :active {
    background: var(--tertiary-color);
  }

  display: ${({ $showButton }) => ($showButton ? "block" : "none")};
`;

export function Header({ pagination, fetchNewCards, showPopup, $darkMode }) {
  return (
    <StyledHeader $darkMode={$darkMode}>
      <StyledFetchButton $showButton={pagination === "Main"}>
        <Button onClick={fetchNewCards}>Fetch Cards</Button>
      </StyledFetchButton>
      <h1>Quiz App</h1>
      <StyledFetchButton $showButton={pagination === "Main"}>
        <Button onClick={showPopup}>Delete All</Button>
      </StyledFetchButton>
    </StyledHeader>
  );
}
