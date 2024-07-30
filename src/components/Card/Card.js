import styled from "styled-components";
import bookmark from "../../assets/bookmark.png";
import bookmarkblack from "../../assets/bookmark-black.png";
import { Image } from "../Image/Image";
import { Button } from "../Button/Button";

const StyledCard = styled.div`
  position: relative;
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

  .hidden {
    display: none;
  }
`;

export function Card({ question, answer }) {
  return (
    <StyledCard>
      <h2>{question}</h2>
      <Button className={"answerbutton"}>Show Answer</Button>
      <h2 className={"answer"}>{answer}</h2>
      <Image className={"icon"} alt="Bookmarkicon" src={bookmark} />
      <Image
        className={"icon hidden"}
        alt="Black Bookmarkicon"
        src={bookmarkblack}
      />
      <Button className={"delete-button"} size={"small"}>
        Delete
      </Button>
    </StyledCard>
  );
}
