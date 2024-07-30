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

export function Bookmarkspage({ cards, onDelete, bookmarked, onBookmark }) {
  return (
    <StyledMain>
      {cards
        .filter((card) => bookmarked.includes(card.key))
        .map((card) => (
          <Card
            key={card.key}
            id={card.key}
            question={card.question}
            answer={card.answer}
            hashtag={card.hashtag}
            onDelete={onDelete}
            bookmarked={bookmarked}
            onBookmark={onBookmark}
          />
        ))}
    </StyledMain>
  );
}
