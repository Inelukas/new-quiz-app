import styled from "styled-components";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainPage } from "../MainPage/MainPage";
import { Bookmarkspage } from "../BookmarksPage/Bookmarkspage";
import { NewCardsPage } from "../NewCardsPage/NewCardsPage";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { useEffect, useState } from "react";
import { uid } from "uid";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export function Body() {
  const [pagination, setPagination] = useState("Main");
  const [darkMode, setDarkMode] = useState(false);
  const [cards, setCards] = useState([]);
  const [bookmarked, setBookmark] = useState([]);

  function handlePagination(prop) {
    setPagination(prop);
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function toggleBookmark(id) {
    setBookmark((prevBookmarked) =>
      prevBookmarked.includes(id)
        ? prevBookmarked.filter((bookmarkId) => bookmarkId !== id)
        : [...prevBookmarked, id]
    );
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

  function deleteAll() {
    setCards([]);
    setBookmark([]);
  }

  function handleDelete(cardId) {
    setCards(cards.filter((card) => card.key !== cardId));
  }

  function createCustomCard(question, answer) {
    const newCustomCard = {
      key: uid(),
      question: question,
      answer: answer,
      custom: true,
    };
    setCards((prevCards) => [...prevCards, newCustomCard]);
  }

  return (
    <StyledBody>
      <Header
        pagination={pagination}
        fetchNewCards={fetchNewCards}
        deleteAll={deleteAll}
      />
      {pagination === "Main" && (
        <MainPage
          cards={cards}
          onDelete={handleDelete}
          onBookmark={toggleBookmark}
          bookmarked={bookmarked}
        />
      )}
      {pagination === "Bookmarks" && (
        <Bookmarkspage
          cards={cards}
          onDelete={handleDelete}
          onBookmark={toggleBookmark}
          bookmarked={bookmarked}
        />
      )}
      {pagination === "NewCards" && (
        <NewCardsPage
          cards={cards}
          onDelete={handleDelete}
          createCustomCard={createCustomCard}
          onBookmark={toggleBookmark}
          bookmarked={bookmarked}
        />
      )}
      {pagination === "Profile" && (
        <ProfilePage
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          cards={cards}
          bookmarked={bookmarked}
        />
      )}
      <Footer onClick={handlePagination} pagination={pagination} />
    </StyledBody>
  );
}
