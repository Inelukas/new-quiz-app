import styled from "styled-components";
import { Button } from "../Button/Button";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 50% 1fr 1fr;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 10vh;
  background: var(--side-color);
  box-shadow: 0px 5px var(--text-color);
  z-index: 2;
  text-align: center;

  button {
    background: var(--secondary-color);
  }

  h1 {
    grid-column: 3;
    color: ${({ $darkMode }) =>
      $darkMode ? "var(--text-color)" : "var(--primary-color)"};
  }

  .fetch-button {
    grid-column: 1/3;
  }

  .delete-button {
    grid-column: 4;
  }

  .hashtag-button {
    grid-column: 5;
    margin: 0px 20px;
  }

  @media screen and (max-width: 800px) {
    height: 12vh;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    h1,
    button {
      transform: scale(0.7);
    }

    h1 {
      grid-row: 1;
      grid-column: 1 / 4;
      width: 100%;
    }

    .fetch-button {
      grid-row: 2;
      grid-column: 1;
    }

    .delete-button {
      grid-row: 2;
      grid-column: 2;
    }

    .hashtag-button {
      grid-row: 2;
      grid-column: 3;
      margin-left: 0px;
    }
  }
`;

const StyledHeaderButton = styled.div`
  :hover {
    transform: scale(1.3);
  }

  :active {
    background: var(--tertiary-color);
  }

  display: ${({ $showButton }) => ($showButton ? "block" : "none")};
`;

export function Header({
  pagination,
  fetchNewCards,
  showPopup,
  $darkMode,
  clearHashtagArray,
}) {
  return (
    <StyledHeader $darkMode={$darkMode}>
      <StyledHeaderButton
        className={"fetch-button"}
        $showButton={pagination === "Main"}
      >
        <Button onClick={fetchNewCards}>Fetch Cards</Button>
      </StyledHeaderButton>
      <h1>Quiz App</h1>
      <StyledHeaderButton
        className={"delete-button"}
        $showButton={pagination === "Main"}
      >
        <Button onClick={showPopup}>Delete All</Button>
      </StyledHeaderButton>
      <StyledHeaderButton
        className={"hashtag-button"}
        $showButton={pagination !== "Profile"}
      >
        <Button onClick={clearHashtagArray}>Show All</Button>
      </StyledHeaderButton>
    </StyledHeader>
  );
}
