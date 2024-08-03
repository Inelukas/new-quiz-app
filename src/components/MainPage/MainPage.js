import styled from "styled-components";
import { Card } from "../Card/Card";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12vh 25vw;
  width: 50vw;
  height: 100%;

  .popup {
    position: fixed;
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
  }

  .popup div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 20px;
    gap: 10px;
    align-items: center;
    justify-self: center;
    background: var(--side-color);
    color: white;
    width: 300px;
    height: 200px;
    border-radius: 20px;
    text-align: center;
  }

  .popup div button {
    width: 50%;
  }

  .popup button:hover {
    transform: scale(1.3);
  }
`;

export function MainPage({
  cards,
  onDelete,
  bookmarked,
  onBookmark,
  showPopup,
  popup,
  deleteAll,
  filterByHashtags,
  hashtagArray,
}) {
  const displayCards = hashtagArray.length > 0 ? hashtagArray : cards;

  return (
    <StyledMain>
      {displayCards.map((card) => (
        <Card
          key={card.key}
          id={card.key}
          question={card.question}
          answer={card.answer}
          hashtag={card.hashtag}
          wrongAnswers={card.wrongAnswers}
          custom={card.custom}
          onDelete={onDelete}
          bookmarked={bookmarked}
          onBookmark={onBookmark}
          filterByHashtags={filterByHashtags}
        />
      ))}
      {popup && (
        <div className="popup hidden">
          <form className="popup-form">
            <div>
              <p>Do you really want to delete all cards?</p>
              <div>
                <button onClick={deleteAll} type="button">
                  Delete
                </button>
                <button onClick={showPopup} type="button">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </StyledMain>
  );
}
