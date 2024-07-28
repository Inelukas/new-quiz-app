import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  min-width: 300px;
  height: 20vh;
  background: var(--primary-color);
  color: var(--text-color-2);
  border-radius: 20px;
`;

export function Card() {
  return <StyledCard>I'm a Card</StyledCard>;
}
