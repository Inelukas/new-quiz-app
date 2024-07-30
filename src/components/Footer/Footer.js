import styled from "styled-components";
import { Button } from "../Button/Button";
import { Image } from "../Image/Image";
import user from "../../assets/user.png";
import bookmark from "../../assets/bookmark.png";
import add from "../../assets/add.png";
import home from "../../assets/home.png";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: 10vh;
  background: var(--secondary-color);
  box-shadow: 0px -5px var(--text-color);
`;

export function Footer({ onClick, pagination }) {
  return (
    <StyledFooter>
      <Button onClick={() => onClick("Main")} size={"footericon"}>
        <Image src={home} alt={"Main"} $showHighlight={pagination === "Main"} />
      </Button>
      <Button onClick={() => onClick("Bookmarks")} size={"footericon"}>
        <Image
          src={bookmark}
          alt={"Bookmarks"}
          $showHighlight={pagination === "Bookmarks"}
        />
      </Button>
      <Button onClick={() => onClick("NewCards")} size={"footericon"}>
        <Image
          src={add}
          alt={"Create Cards"}
          $showHighlight={pagination === "NewCards"}
        />
      </Button>
      <Button onClick={() => onClick("Profile")} size={"footericon"}>
        <Image
          src={user}
          alt={"Profile"}
          $showHighlight={pagination === "Profile"}
        />
      </Button>
    </StyledFooter>
  );
}
