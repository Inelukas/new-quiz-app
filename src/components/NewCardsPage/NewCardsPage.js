import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 12vh 25vw;
  width: 50vw;
  height: 100vh;
`;

export function NewCardsPage() {
  return <StyledMain>This is the New Cards page</StyledMain>;
}
