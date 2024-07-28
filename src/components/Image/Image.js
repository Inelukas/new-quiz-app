import styled from "styled-components";

const StyledImage = styled.img`
  width: 55px;
  padding: 10px;
  position: relative;
  background: ${({ $showHighlight }) =>
    $showHighlight ? "var(--side-color)" : "none"};
  border-radius: 20px;
`;

export function Image({ src, alt, $showHighlight }) {
  return <StyledImage src={src} alt={alt} $showHighlight={$showHighlight} />;
}
