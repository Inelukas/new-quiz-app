import { useState } from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { FormTextarea } from "../FormTextarea/FormTextarea";

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
        form.question.focus();
        setCharactersLeft({
          question: 100,
          answer: 100,
          options: 100,
          hashtag: 40,
        });
      }}
    >
      <FormTextarea
        children="Please enter your question."
        lengthChecker={lengthChecker}
        name="question"
        required={true}
        charactersLeft={charactersLeft.question}
      />
      <FormTextarea
        children="Please enter your answer."
        lengthChecker={lengthChecker}
        name="answer"
        required={true}
        charactersLeft={charactersLeft.answer}
      />
      <FormTextarea
        children="You may enter multiple choice options. (optional, separate with commata)"
        lengthChecker={lengthChecker}
        name="options"
        charactersLeft={charactersLeft.options}
      />
      <FormTextarea
        children="Would you like to add some hashtags? (optional, separate with commata)"
        lengthChecker={lengthChecker}
        name="hashtag"
        maxLength="40"
        charactersLeft={charactersLeft.hashtag}
      />
      <div className={"form-buttons"}>
        <Button type="submit">Submit</Button>
        <Button onClick={clearForm} type="button">
          Clear
        </Button>
      </div>
    </StyledForm>
  );
}
