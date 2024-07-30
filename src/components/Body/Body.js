import styled from "styled-components";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainPage } from "../MainPage/MainPage";
import { Bookmarkspage } from "../BookmarksPage/Bookmarkspage";
import { NewCardsPage } from "../NewCardsPage/NewCardsPage";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { useEffect, useState } from "react";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export function Body() {
  const [pagination, setPagination] = useState("Main");
  const [darkMode, setDarkMode] = useState(false);

  function handlePagination(prop) {
    setPagination(prop);
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <StyledBody>
      <Header pagination={pagination} />
      {pagination === "Main" && <MainPage />}
      {pagination === "Bookmarks" && <Bookmarkspage />}
      {pagination === "NewCards" && <NewCardsPage />}
      {pagination === "Profile" && (
        <ProfilePage toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      )}
      <Footer onClick={handlePagination} pagination={pagination} />
    </StyledBody>
  );
}
