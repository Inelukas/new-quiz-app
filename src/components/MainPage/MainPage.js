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

export function MainPage() {
  return (
    <StyledMain>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </StyledMain>
  );
}
