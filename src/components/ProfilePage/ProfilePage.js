import styled from "styled-components";
import cat from "../../assets/cat.jpg";
import bookmarkblack from "../../assets/bookmark-black.png";
import { Image } from "../Image/Image";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  margin: 15vh 25vw;
  width: 50vw;
  height: 100%;
`;

const UpperPart = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10vw;
  align-items: center;
`;

const CatImage = styled.img`
  width: 200px;
  border-radius: 20px;
`;

const AboutMe = styled.div`
  color: var(--text-color);
`;

const CounterPart = styled.div`
  display: flex;
  gap: 10vw;
`;

const Counter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 15vw;
  height: 10vh;
  border-radius: 20px;
  background: var(--tertiary-color);
  box-shadow: 5px 5px var(--side-color);

  .card-number {
    font-size: 40px;
    width: 50px;
    height: 50px;
    text-align: center;
    padding-top: 3px;
    background: black;
    color: white;
    border-radius: 90px;
  }

  h2 {
    font-size: 35px;
  }

  img {
    width: 65px;
  }
`;

const Settings = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
  width: 50vw;
  height: 20vh;
  border-radius: 20px;
  background: var(--tertiary-color);
  box-shadow: 5px 5px var(--side-color);

  h2 {
    grid-column: 1;
    grid-row: 1;
  }

  h3 {
    grid-column: 1;
    grid-row: 2;
  }
`;

const StyledSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  grid-column: 4;
  grid-row: 2;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: black;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

export function ProfilePage({ toggleDarkMode, darkMode }) {
  return (
    <StyledMain>
      <UpperPart>
        <CatImage src={cat} />
        <h1>Lukas Klipp</h1>
      </UpperPart>
      <AboutMe>
        <h2>About Me</h2>
        <p>
          Stare at the wall, play with food and get confused by dust. Chew on
          cable always ensure to lay down in such a manner that tail can lightly
          brush human's nose yet use lap as chair, catasstrophe check cat door
          for ambush 10 times before coming in, use lap as chair, yet chase
          mice. Mess up all the toilet paper scratch the box i could pee on this
          if i had the energy so purr, shove bum in owner's face like camera
          lens instead of drinking water from the cat bowl, make sure to steal
          water from the toilet spread kitty litter all over house.
        </p>
      </AboutMe>
      <CounterPart>
        <Counter>
          <h2 className={"card-number"}>?!</h2>
          <h2>19</h2>
        </Counter>
        <Counter>
          <Image src={bookmarkblack} />
          <h2>1</h2>
        </Counter>
      </CounterPart>
      <Settings>
        <h2>Settings</h2>
        <h3>Dark Mode</h3>
        <StyledSwitch>
          <input
            type={"checkbox"}
            onChange={toggleDarkMode}
            checked={darkMode ? true : false}
          />
          <span className={"slider round"}></span>
        </StyledSwitch>
      </Settings>
    </StyledMain>
  );
}
