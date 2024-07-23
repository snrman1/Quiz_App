// Importing necessary constants, components, and libraries
import { DESKTOP_BREAKPOINT } from "../../config/config"; // Breakpoint value for responsive design

import MainContainer from "../../ui/MainContainer"; // MainContainer component
import QuestionCount from "./QuestionCount"; // QuestionCount component
import QuizQuestion from "./QuizQuestion"; // QuizQuestion component
import ProgressBar from "./ProgressBar"; // ProgressBar component
import OptionsList from "./OptionsList"; // OptionsList component
import Header from "../../ui/Header"; // Header component

import styled from "styled-components"; // styled-components library for CSS-in-JS

// Styled component for the desktop layout
const DesktopLayout = styled.main`
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    display: flex;
    gap: 8rem;

    & > :first-child {
      max-width: 465px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }
`;

// Functional component to render the quiz page
function QuizPage() {
  return (
    <MainContainer>
      <Header /> {/* Renders the header component */}
      <DesktopLayout>
        <div>
          <div>
            <QuestionCount /> {/* Renders the question count */}
            <QuizQuestion /> {/* Renders the current quiz question */}
          </div>
          <ProgressBar /> {/* Renders the progress bar */}
        </div>
        <OptionsList /> {/* Renders the list of options */}
      </DesktopLayout>
    </MainContainer>
  );
}

// Exporting QuizPage component as default export
export default QuizPage;
