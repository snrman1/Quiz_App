// Importing necessary dependencies and components
import { TABLET_BREAKPOINT } from "../../config/config"; // Importing tablet breakpoint from config
import { Theme } from "../../types/themeTypes"; // Importing Theme type from themeTypes
import { RootState } from "../../redux/store"; // Importing RootState type from store
import { useSelector } from "react-redux"; // Importing the useSelector hook from react-redux

import styled from "styled-components"; // Importing styled from styled-components for styled components

// Defining props for the styled component
type CountProps = {
  $theme: Theme;
};

// Creating a styled component for the question count
const Count = styled.p<CountProps>`
  font: var(--f-mobile-heading-m-regular-italic); // Applying mobile font styles
  color: ${(props) =>
    props.$theme === "light"
      ? "var(--clr-dt-700)"
      : "var(--clr-lt-300)"}; // Setting color based on theme

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    // Media query for tablet devices and above
    font: var(--f-body-s); // Applying tablet font styles
  }
`;

// Defining the QuestionCount functional component
function QuestionCount() {
  const theme = useSelector((state: RootState) => state.theme.value); // Using useSelector to get the current theme
  const quizLength = useSelector(
    (state: RootState) => state.game.quiz.questions.length // Using useSelector to get the total number of questions in the quiz
  );
  const currentQuestionNumber =
    useSelector((state: RootState) => state.game.currentQuestionIndex)! + 1; // Using useSelector to get the current question index and adding 1

  return (
    <Count $theme={theme}>
      Question {currentQuestionNumber} of {quizLength}
    </Count>
  );
}

export default QuestionCount; // Exporting the component as default
