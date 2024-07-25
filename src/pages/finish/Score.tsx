// Importing breakpoint values for responsive design from the configuration file
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/config";

// Importing hooks from react-redux for accessing and dispatching Redux state
import { useDispatch, useSelector } from "react-redux";

// Importing the newGame action from the gameSlice
import { newGame } from "../../slices/gameSlice";

// Importing theme types
import { Theme } from "../../types/themeTypes";

// Importing RootState type for the Redux store
import { RootState } from "../../redux/store";

// Importing UI components
import Button from "../../ui/Button";
import Option from "../../ui/Option";

// Importing styled-components library for CSS-in-JS styling
import styled from "styled-components";

// Type definition for the ScoreCard component's props
type ScoreCardProps = {
  $theme: Theme; // Theme prop for conditional styling
};

// Styled component for the wrapper of the score card
const ScoreCardWrapper = styled.div`
  margin-top: 2.5rem;

  // Media query for tablet devices
  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    margin-top: 4rem;
  }

  // Media query for desktop devices
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin-top: 0;
    flex-grow: 1; // Allowing the wrapper to grow to fill available space on desktop
  }
`;

// Empty styled component for the score section
const StyledScore = styled.div``;

// Styled component for the score card
const ScoreCard = styled.div<ScoreCardProps>`
  &,
  & ${StyledScore} {
    display: flex; // Using flexbox for layout
    flex-direction: column; // Aligning items in a column
    align-items: center; // Centering items horizontally
    gap: 1rem; // Space between items
  }

  margin-bottom: 0.75rem;
  background-color: ${(props) =>
    props.$theme === "light" ? "var(--clr-lt-700)" : "var(--clr-dt-600)"}; // Conditional background color based on theme
  padding: 2rem;
  border-radius: 0.75rem; // Rounded corners

  & ${StyledScore} :first-child {
    font: var(--f-score); // Font style for the score
    color: ${(props) =>
      props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)"}; // Conditional text color based on theme
  }

  & ${StyledScore} :last-child {
    font: var(--f-mobile-body-regular); // Font style for the text
    color: ${(props) =>
      props.$theme === "light" ? "var(--clr-dt-700)" : "var(--clr-lt-300)"}; // Conditional text color based on theme
  }

  // Media query for tablet devices
  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    margin-bottom: 2rem;
    padding: 3rem;
    gap: 2.5rem; // Increased gap between items for tablet view

    & ${StyledScore} :first-child {
      font: var(--f-display); // Font style for the score
    }

    & ${StyledScore} :last-child {
      font: var(--f-body-m); // Font style for the text
    }
  }
`;

// Score component definition
function Score() {
  // Using useSelector hook to get the current theme from the Redux state
  const theme = useSelector((state: RootState) => state.theme.value);
  // Using useSelector hook to get the current quiz from the Redux state
  const currentQuiz = useSelector((state: RootState) => state.game.quiz);
  // Using useSelector hook to get the current score from the Redux state
  const score = useSelector((state: RootState) => state.game.score);
  // Getting the number of questions in the quiz
  const quizLength = currentQuiz.questions.length;

  // Using useDispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Handler for starting a new game
  const handleNewGame = () => dispatch(newGame());

  // Handler for keydown events on the button
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      handleNewGame(); // Start a new game if Enter or Space key is pressed
    }
  };

  return (
    <ScoreCardWrapper>
      <ScoreCard $theme={theme}>
        <Option
          type="subject" // Specifying the option type
          icon={`icon-${currentQuiz.title.toLowerCase()}.svg`} // Setting the icon based on the quiz title
          isTransparent={true} // Making the option transparent
        >
          {/* Rendering the quiz title */}
          {currentQuiz.title} 
        </Option>
        <StyledScore>
          <span>{score}</span> {/* Rendering the score */}
          <span>out of {quizLength}</span> {/* Rendering the total number of questions */}
        </StyledScore>
      </ScoreCard>
      <Button onClick={handleNewGame} onKeyDown={handleKeyDown} tabIndex={0}>
        Play Again {/* Button text */}
      </Button>
    </ScoreCardWrapper>
  );
}

// Exporting Score component as the default export
export default Score;
