import styled, { createGlobalStyle } from "styled-components";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainPage } from "../MainPage/MainPage";
import { Bookmarkspage } from "../BookmarksPage/Bookmarkspage";
import { NewCardsPage } from "../NewCardsPage/NewCardsPage";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { useState } from "react";

const GlobalStyle = createGlobalStyle`
:root {
  --primary-color: #522258;
  --secondary-color: #8C3061;
  --tertiary-color: #C63C51;
  --side-color: #D95F59;
  --text-color: black;
  --text-color-2: #F5E7B2;
  --hover-color: lightblue;
}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
  }
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--side-color);
`;

export function Body() {
  const [pagination, setPagination] = useState("Main");

  function handlePagination(prop) {
    setPagination(prop);
  }

  return (
    <>
      <GlobalStyle />
      <StyledBody>
        <Header />
        {pagination === "Main" && <MainPage />}
        {pagination === "Bookmarks" && <Bookmarkspage />}
        {pagination === "NewCards" && <NewCardsPage />}
        {pagination === "Profile" && <ProfilePage />}
        <Footer onClick={handlePagination} pagination={pagination} />
      </StyledBody>
    </>
  );
}
