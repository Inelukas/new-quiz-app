import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  background: var(--tertiary-color);
  border-radius: 10px;
  display: grid;
  gap: 10px;
  padding: 10px;
  height: 70vh;
  min-width: 400px;
  width: 40vw;
  margin-top: 2vh;

  textarea {
    min-height: 30px;
    max-height: 80px;
    min-width: 370px;
    max-width: 38vw;
  }

  div {
    justify-self: center;
  }

  button {
    border-radius: 5px;
    background: white;
    border-color: var(--side-color);
  }

  button:hover {
    transform: scale(1.3);
  }

  .form-buttons {
    display: flex;
    gap: 30px;
  }

  button {
    padding: 2px 5px;
  }

  @media screen and (max-width: 800px) {
    transform: scale(0.8);
    height: 80vh;
    margin-top: 0vh;
  }
`;

export function Form({ createCustomCard }) {
  const [charactersLeft, setCharactersLeft] = useState({
    question: 100,
    answer: 100,
    options: 100,
    hashtag: 40,
  });

  function clearForm(event) {
    const form = event.target.form;
    form.reset();
    setCharactersLeft({
      question: 100,
      answer: 100,
      options: 100,
      hashtag: 40,
    });
  }

  function lengthChecker(event) {
    const { name, value, maxLength } = event.target;
    setCharactersLeft((prevValue) => ({
      ...prevValue,
      [name]: maxLength - value.length,
    }));
  }

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.target;
        const question = form.question.value;
        const answer = form.answer.value;
        const options = form.options.value;
        const hashtag = form.hashtag.value;
        createCustomCard(question, answer, options, hashtag);
        form.reset();
        setCharactersLeft({
          question: 100,
          answer: 100,
          options: 100,
          hashtag: 40,
        });
      }}
    >
      <label htmlFor="question">Please enter your question.</label>
      <textarea
        onChange={lengthChecker}
        name="question"
        rows="2"
        type="text"
        maxLength="100"
        required
      />
      <p>
        <span>{charactersLeft.question}</span> character/s left
      </p>
      <label htmlFor="answer">Please enter your answer.</label>
      <textarea
        onChange={lengthChecker}
        name="answer"
        rows="2"
        type="text"
        maxLength="100"
        required
      />
      <p>
        <span>{charactersLeft.answer}</span> character/s left
      </p>
      <label htmlFor="options">
        You may enter multiple choice options. (optional, separate with commata)
      </label>
      <textarea
        onChange={lengthChecker}
        name="options"
        rows="2"
        type="text"
        maxLength="100"
      />
      <p>
        <span>{charactersLeft.options}</span> character/s left
      </p>
      <label htmlFor="hash">
        Would you like to add some hashtags? (optional, separate with commata)
      </label>
      <textarea
        onChange={lengthChecker}
        type="text"
        name="hashtag"
        rows="2"
        maxLength="40"
      />
      <p>
        <span>{charactersLeft.hashtag}</span> character/s left
      </p>
      <div className={"form-buttons"}>
        <button type="submit">Submit</button>
        <button onClick={clearForm} type="button">
          Clear
        </button>
      </div>
    </StyledForm>
  );
}
