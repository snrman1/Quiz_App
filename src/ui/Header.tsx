import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../config/config";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

import ThemeToggle from "./ThemeToggle";
import Option from "./Option";

import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
    margin-bottom: 3rem;
  }

  @media screen and (max-width: ${DESKTOP_BREAKPOINT}px) {
    margin: 0;
  }
`;

function Header() {
  const currentQuiz = useSelector((state: RootState) => state.game.quiz);

  return (
    <StyledHeader>
      <Option
        type="subject"
        icon={`icon-${currentQuiz.title.toLowerCase()}.svg`}
        isTransparent={true}
      >
        {currentQuiz.title}
      </Option>
      <ThemeToggle />
    </StyledHeader>
  );
}

export default Header;
