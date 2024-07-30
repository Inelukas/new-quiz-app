import styled from "styled-components";
import { Form } from "../Form/Form";
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

export function NewCardsPage({ createCustomCard, cards, onDelete }) {
  return (
    <StyledMain>
      <Form createCustomCard={createCustomCard} />
      {cards
        .filter((card) => card.custom)
        .map((card) => (
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
