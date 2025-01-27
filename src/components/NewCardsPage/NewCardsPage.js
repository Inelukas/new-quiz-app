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

export function NewCardsPage({
  createCustomCard,
  cards,
  onDelete,
  onBookmark,
  bookmarked,
  hashtagArray,
  filterByHashtags,
}) {
  const displayCards = hashtagArray.length > 0 ? hashtagArray : cards;

  return (
    <StyledMain>
      <Form createCustomCard={createCustomCard} />
      {displayCards
        .filter((card) => card.custom)
        .map((card) => (
          <Card
            key={card.key}
            id={card.key}
            question={card.question}
            answer={card.answer}
            hashtag={card.hashtag}
            wrongAnswers={card.wrongAnswers}
            custom={card.custom}
            onDelete={onDelete}
            onBookmark={onBookmark}
            bookmarked={bookmarked}
            filterByHashtags={filterByHashtags}
          />
        ))}
    </StyledMain>
  );
}
