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

export function Bookmarkspage() {
  return <StyledMain>This is the Bookmarks page</StyledMain>;
}