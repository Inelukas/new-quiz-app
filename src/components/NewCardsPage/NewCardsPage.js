import styled from "styled-components";
import { Form } from "../Form/Form";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 12vh 25vw;
  width: 50vw;
  height: 100%;
`;

export function NewCardsPage() {
  return (
    <StyledMain>
      <Form />
    </StyledMain>
  );
}
