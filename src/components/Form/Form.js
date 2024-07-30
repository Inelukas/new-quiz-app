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

export function Form() {
  return (
    <StyledForm>
      <label htmlFor="question">Please enter your question.</label>
      <textarea
        name="question"
        rows="4"
        type="text"
        maxLength="100"
        required
      ></textarea>
      <p>
        <span>100</span> character/s left
      </p>
      <label htmlFor="answer">Please enter your answer.</label>
      <textarea
        name="answer"
        rows="4"
        type="text"
        maxLength="100"
        required
      ></textarea>
      <p>
        <span>100</span> character/s left
      </p>
      <label htmlFor="hash">Would you like to add some hashtags?</label>
      <input type="text" name="hash" maxLength="50" />
      <p>
        <span>50</span> character/s left
      </p>
      <div>
        <button type="submit">Submit</button>
        <button type="button">Clear</button>
      </div>
    </StyledForm>
  );
}
