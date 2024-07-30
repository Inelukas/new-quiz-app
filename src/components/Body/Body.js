import styled from "styled-components";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainPage } from "../MainPage/MainPage";
import { Bookmarkspage } from "../BookmarksPage/Bookmarkspage";
import { NewCardsPage } from "../NewCardsPage/NewCardsPage";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { useEffect, useRef, useState } from "react";
import { uid } from "uid";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export function Body() {
  const [pagination, setPagination] = useState("Main");
  const [darkMode, setDarkMode] = useState(false);
  const [cards, setCards] = useState([]);

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

  async function fetchNewCards() {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&category=9"
      );
      const data = await response.json();
      const results = data.results;
      const newCards = results.map((item) => {
        return {
          key: uid(),
          question: item.question,
          answer: item.correct_answer,
        };
      });
      setCards((prevCards) => [...prevCards, ...newCards]);
    } catch (error) {
      console.error("Failed to fetch new cards:", error);
    }
  }

  function handleDelete(cardId) {
    console.log("toggled");
    setCards(cards.filter((card) => card.key !== cardId));
  }

  console.log(cards);

  return (
    <StyledBody>
      <Header pagination={pagination} fetchNewCards={fetchNewCards} />
      {pagination === "Main" && (
        <MainPage cards={cards} onDelete={handleDelete} />
      )}
      {pagination === "Bookmarks" && <Bookmarkspage />}
      {pagination === "NewCards" && <NewCardsPage />}
      {pagination === "Profile" && (
        <ProfilePage toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      )}
      <Footer onClick={handlePagination} pagination={pagination} />
    </StyledBody>
  );
}
