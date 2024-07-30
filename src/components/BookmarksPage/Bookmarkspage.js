import styled from "styled-components";
import { Card } from "../Card/Card";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 12vh 25vw;
  width: 50vw;
  height: 100%;
`;

export function Bookmarkspage({ cards, onDelete }) {
  return (
    <StyledMain>
      {cards.map((card) => (
        <Card
          key={card.key}
          id={card.key}
          question={card.question}
          answer={card.answer}
          onDelete={onDelete}
        />
      ))}
    </StyledMain>
  );
}
