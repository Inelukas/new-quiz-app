import styled from "styled-components";

const StyledButton = styled.button`
  background: white;
  border: none;
  border-radius: 10px;
  padding: 3px;
  color: var(--text-color);

  ${({ size = "medium" }) => {
    if (size === "small") {
      return "min-width: 40px; height: 20px";
    }
    if (size === "medium") {
      return "min-width: 80px; height: 30px";
    }
    if (size === "large") {
      return "min-width: 120px; height: 40px";
    }
    if (size === "footericon") {
      return "appearance: none; background-color: inherit";
    }
  }}
`;

export function Button({ children, size, onClick }) {
  return (
    <StyledButton size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
}
