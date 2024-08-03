import styled from "styled-components";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { MainPage } from "../MainPage/MainPage";
import { Bookmarkspage } from "../BookmarksPage/Bookmarkspage";
import { NewCardsPage } from "../NewCardsPage/NewCardsPage";
import { ProfilePage } from "../ProfilePage/ProfilePage";
import { useEffect, useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export function Body() {
  const [pagination, setPagination] = useState("Main");
  const [darkMode, setDarkMode] = useLocalStorageState("dark-mode", false);
  const [cards, setCards] = useLocalStorageState("cards", { defaultValue: [] });
  const [bookmarked, setBookmark] = useLocalStorageState("bookmarks", {
    defaultValue: [],
  });
  const [popup, setPopup] = useState(false);
  const [hashtagArray, setHashtagArray] = useState([]);

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
          wrongAnswers: item.incorrect_answers,
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
    setPopup(!popup);
    setHashtagArray([]);
  }

  function handleDelete(cardId) {
    setCards(cards.filter((card) => card.key !== cardId));
  }

  function createCustomCard(question, answer, options, hashtag) {
    const wrongAnswers = options ? options.split(",") : [];

    const newCustomCard = {
      key: uid(),
      question: question,
      answer: answer,
      wrongAnswers: wrongAnswers,
      hashtag: hashtag,
      custom: true,
    };
    setCards((prevCards) => [...prevCards, newCustomCard]);
  }

  function togglePopup() {
    setPopup(!popup);
  }

  function toggleFilterByHashtags(hashtag) {
    const filteredArray = cards.filter((card) => {
      return card.hashtag && card.hashtag.includes(hashtag.trim());
    });
    setHashtagArray(filteredArray);
  }

  function clearHashtagArray() {
    setHashtagArray([]);
  }

  return (
    <StyledBody>
      <Header
        pagination={pagination}
        fetchNewCards={fetchNewCards}
        $darkMode={darkMode}
        showPopup={togglePopup}
        clearHashtagArray={clearHashtagArray}
      />
      {pagination === "Main" && (
        <MainPage
          cards={cards}
          onDelete={handleDelete}
          onBookmark={toggleBookmark}
          bookmarked={bookmarked}
          showPopup={togglePopup}
          popup={popup}
          deleteAll={deleteAll}
          filterByHashtags={toggleFilterByHashtags}
          hashtagArray={hashtagArray}
        />
      )}
      {pagination === "Bookmarks" && (
        <Bookmarkspage
          cards={cards}
          onDelete={handleDelete}
          onBookmark={toggleBookmark}
          bookmarked={bookmarked}
          filterByHashtags={toggleFilterByHashtags}
          hashtagArray={hashtagArray}
        />
      )}
      {pagination === "NewCards" && (
        <NewCardsPage
          cards={cards}
          onDelete={handleDelete}
          createCustomCard={createCustomCard}
          onBookmark={toggleBookmark}
          bookmarked={bookmarked}
          filterByHashtags={toggleFilterByHashtags}
          hashtagArray={hashtagArray}
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
      <Footer
        clearHashtagArray={clearHashtagArray}
        onPagination={handlePagination}
        pagination={pagination}
      />
    </StyledBody>
  );
}
