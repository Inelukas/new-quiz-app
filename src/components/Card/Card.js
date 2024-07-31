import styled from "styled-components";
import bookmark from "../../assets/bookmark.png";
import bookmarkblack from "../../assets/bookmark-black.png";
import { Image } from "../Image/Image";
import { Button } from "../Button/Button";
import { useEffect, useState } from "react";

const StyledCard = styled.div`
  position: relative;
  width: 80%;
  min-width: 400px;
  min-height: 180px;
  background-color: var(--tertiary-color);
  box-shadow: 5px 5px var(--side-color);
  border-radius: 20px;
  font-size: 12px;
  text-align: center;
  padding: 40px;
  margin: 40px;
  word-wrap: break-word;

  .answer {
    margin-top: 15px;
    margin-bottom: 10px;
  }

  .answerbutton {
    border-color: var(--side-color);
    margin-top: 10px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10px;
    background-color: var(--secondary-color);
  }

  .answerbutton:active {
    background: var(--side-color);
  }

  .answerbutton:hover {
    transform: scale(1.3);
  }

  .delete-button {
    position: absolute;
    background-color: var(--secondary-color);
    bottom: 10px;
    right: 10px;
    color: var(--text-color);
    height: 20px;
    width: 30px;
    font-size: 10px;
    border-radius: 10px;
    border: none;
  }

  .delete-button:hover {
    transform: scale(1.2);
  }

  .hashtags {
    position: absolute;
    bottom: 10px;
    left: 10px;
    max-width: 90%;
  }

  .hashtags span {
    font-size: 12px;
    margin: 3px;
    padding: 2px;
    border-radius: 6px;
    background-color: var(--side-color);
    border: none;
  }

  .icon {
    width: 50px;
    height: 60px;
    position: absolute;
    top: -25px;
    right: 8px;
    background: var(--icon-color);
  }

  .icon:hover {
    transform: scale(1.5);
    transition: 1s;
  }

  .fetched {
    background: var(--fetchedcard-color);
  }

  .choices {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin: 10px 0px;
    font-size: 16px;
    text-decoration: underline;
  }

  .custom {
    position: absolute;
    top: 4px;
    left: 6px;
  }

  .hidden {
    display: none;
  }
`;

export function Card({
  question,
  answer,
  wrongAnswers = [],
  hashtag,
  id,
  custom,
  onDelete,
  onBookmark,
  bookmarked,
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    setShuffledAnswers(shuffleArray([answer, ...wrongAnswers]));
  }, []);

  function toggleAnswer() {
    setShowAnswer(!showAnswer);
  }

  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function decodeHtmlEntities(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }

  const hashtagArray = hashtag ? hashtag.split(",") : [];

  return (
    <StyledCard>
      <h2>{decodeHtmlEntities(question)}</h2>
      {wrongAnswers.length > 1 && (
        <div className={"choices"}>
          {shuffledAnswers.map((answer, index) => (
            <p key={index}>
              {`${index + 1}: `}
              {decodeHtmlEntities(answer)}
            </p>
          ))}
        </div>
      )}
      <Button className={"answerbutton"} onClick={toggleAnswer}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </Button>
      {showAnswer && <h2 className={"answer"}>{decodeHtmlEntities(answer)}</h2>}
      <div className={"hashtags"}>
        {hashtagArray.map((item, index) => {
          return <span key={index}>{item.trim()}</span>;
        })}
      </div>
      <Image
        className={"icon"}
        alt={bookmarked.includes(id) ? "Black Bookmark" : "White Bookmark"}
        src={bookmarked.includes(id) ? bookmarkblack : bookmark}
        onClick={() => onBookmark(id)}
      />
      <Button
        className={"delete-button"}
        size={"small"}
        onClick={() => onDelete(id)}
      >
        Delete
      </Button>
      {custom && <div className={"custom"}>Custom</div>}
    </StyledCard>
  );
}
