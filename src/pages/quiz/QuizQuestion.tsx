// Importing necessary types, hooks, and constants
import { Theme } from "../../types/themeTypes"; // Theme type definition
import { RootState } from "../../redux/store"; // RootState type for Redux store
import { useSelector } from "react-redux"; // Hook to access Redux state

import styled from "styled-components"; // styled-components library for CSS-in-JS
import { TABLET_BREAKPOINT } from "../../config/config"; // Breakpoint value for responsive design

// Type definition for QuestionProps, specifying the theme
type QuestionProps = {
  $theme: Theme;
};

// Styled component for the question, using styled-components
const Question = styled.h1<QuestionProps>`
  font: var(--f-mobile-question);
  color: ${(props) =>
    props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)"};
  margin: 0.75rem 0 1.5rem 0;

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    font: var(--f-heading-m-medium);
    margin: 1.625rem 0 2.5rem 0;
  }
`;

// Functional component to render the current quiz question
function QuizQuestion() {
  // Using useSelector hook to get the current theme from Redux state
  const theme = useSelector((state: RootState) => state.theme.value);

  // Using useSelector hook to get the current quiz data from Redux state
  const currentQuiz = useSelector((state: RootState) => state.game.quiz)!;

  // Using useSelector hook to get the current question index from Redux state
  const currentQuestionIndex = useSelector(
    (state: RootState) => state.game.currentQuestionIndex
  )!;

  // Extracting the current question based on the current question index
  const question = currentQuiz.questions[currentQuestionIndex].question;

  // Rendering the question using the styled Question component with the current theme
  return <Question $theme={theme}>{question}</Question>;
}

// Exporting QuizQuestion component as default export
export default QuizQuestion;
