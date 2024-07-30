import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  background: var(--tertiary-color);
  border-radius: 10px;
  display: grid;
  gap: 10px;
  padding: 10px;
  height: 60vh;
  min-width: 40vw;
  margin-top: 5vh;

  textarea {
    min-height: 30px;
    max-height: 80px;
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
`;

export function Form({ createCustomCard }) {
  const [charactersLeft, setCharactersLeft] = useState({
    question: 100,
    answer: 100,
    hashtag: 50,
  });

  function clearForm(event) {
    const form = event.target.form;
    form.reset();
    setCharactersLeft({
      question: 100,
      answer: 100,
      hashtag: 50,
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
        createCustomCard(question, answer);
        form.reset();
        setCharactersLeft({
          question: 100,
          answer: 100,
          hashtag: 50,
        });
      }}
    >
      <label htmlFor="question">Please enter your question.</label>
      <textarea
        onChange={lengthChecker}
        name="question"
        rows="4"
        type="text"
        maxLength="100"
        required
      ></textarea>
      <p>
        <span>{charactersLeft.question}</span> character/s left
      </p>
      <label htmlFor="answer">Please enter your answer.</label>
      <textarea
        onChange={lengthChecker}
        name="answer"
        rows="4"
        type="text"
        maxLength="100"
        required
      ></textarea>
      <p>
        <span>{charactersLeft.answer}</span> character/s left
      </p>
      <label htmlFor="hash">Would you like to add some hashtags?</label>
      <input
        onChange={lengthChecker}
        type="text"
        name="hashtag"
        maxLength="50"
      />
      <p>
        <span>{charactersLeft.hashtag}</span> character/s left
      </p>
      <div>
        <button type="submit">Submit</button>
        <button onClick={clearForm} type="button">
          Clear
        </button>
      </div>
    </StyledForm>
  );
}
