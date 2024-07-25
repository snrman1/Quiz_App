import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/config"; // Importing breakpoints from config file
import { useDispatch, useSelector } from "react-redux"; // Importing hooks from react-redux for state management
import { newGame } from "../../slices/gameSlice"; // Importing the action to start a new game from gameSlice
import { Theme } from "../../types/themeTypes"; // Importing Theme type
import { RootState } from "../../redux/store"; // Importing RootState type from the redux store

import Button from "../../ui/Button"; // Importing Button component
import Option from "../../ui/Option"; // Importing Option component

import styled from "styled-components"; // Importing styled from styled-components for styling

// Type definition for ScoreCardProps to include theme prop
type ScoreCardProps = {
  $theme: Theme;
};

// Styled component for the wrapper of the score card with responsive margins
const ScoreCardWrapper = styled.div`
  margin-top: 2.5rem;

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    margin-top: 4rem;
  }

  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin-top: 0;
    flex-grow: 1;
  }
`;

// Styled component for the score text
const StyledScore = styled.div``;

// Styled component for the score card with dynamic theme-based styles
const ScoreCard = styled.div<ScoreCardProps>`
  &,
  & ${StyledScore} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  margin-bottom: 0.75rem;
  background-color: ${(props) =>
    props.$theme === "light" ? "var(--clr-lt-700)" : "var(--clr-dt-600)"};
  padding: 2rem;
  border-radius: 0.75rem;

  & ${StyledScore} :first-child {
    font: var(--f-score);
    color: ${(props) =>
      props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)"};
  }

  & ${StyledScore} :last-child {
    font: var(--f-mobile-body-regular);
    color: ${(props) =>
      props.$theme === "light" ? "var(--clr-dt-700)" : "var(--clr-lt-300)"};
  }

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    margin-bottom: 2rem;
    padding: 3rem;
    gap: 2.5rem;

    & ${StyledScore} :first-child {
      font: var(--f-display);
    }

    & ${StyledScore} :last-child {
      font: var(--f-body-m);
    }
  }
`;

// Functional component to display the score
function Score() {
  const theme = useSelector((state: RootState) => state.theme.value); // Getting the current theme from the Redux store
  const currentQuiz = useSelector((state: RootState) => state.game.quiz); // Getting the current quiz from the Redux store
  const score = useSelector((state: RootState) => state.game.score); // Getting the current score from the Redux store
  const quizLength = currentQuiz.questions.length; // Getting the total number of questions in the quiz

  const dispatch = useDispatch(); // Getting the dispatch function from the Redux store
  const handleNewGame = () => dispatch(newGame()); // Handler function to dispatch the newGame action

  return (
    <ScoreCardWrapper>
      <ScoreCard $theme={theme}>
        {/* Displaying the quiz title with an icon */}
        <Option
          type="subject"
          icon={`icon-${currentQuiz.title.toLowerCase()}.svg`}
          isTransparent={true}
        >
          {currentQuiz.title}
        </Option>
        <StyledScore>
          <span>{score}</span>
          <span>out of {quizLength}</span>
        </StyledScore>
      </ScoreCard>
      {/* Button to start a new game */}
      <Button onClick={handleNewGame}>Play Again</Button>
    </ScoreCardWrapper>
  );
}

export default Score; // Exporting the Score component as default
