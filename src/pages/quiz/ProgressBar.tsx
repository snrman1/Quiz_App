// Importing necessary dependencies and components
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/config"; // Importing breakpoints for responsive design
import { Theme } from "../../types/themeTypes"; // Importing Theme type
import { RootState } from "../../redux/store"; // Importing RootState type for Redux store
import { useSelector } from "react-redux"; // Importing the useSelector hook from react-redux

import styled from "styled-components"; // Importing styled from styled-components for CSS-in-JS

// Defining props for the styled Container component
type ContainerProps = {
  $theme: Theme; // The theme of the application, which affects styling
};

// Defining props for the styled Fill component
type FillProps = {
  $percentage: number; // The percentage of progress to be displayed
};

// Creating a styled container for the progress bar
const Container = styled.div<ContainerProps>`
  width: 100%; // Full width of the parent element
  background-color: ${(props) =>
    props.$theme === "light"
      ? "var(--clr-lt-700)"
      : "var(--clr-dt-600)"}; // Background color based on the theme
  height: 1rem; // Fixed height for the progress bar
  border-radius: 999px; // Fully rounded corners
  padding: 0.25rem; // Padding around the fill
  margin-bottom: 2.5rem; // Margin for spacing

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    margin-bottom: 4rem; // Increased margin for tablet devices
  }

  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin-bottom: 7rem; // Increased margin for desktop devices
  }
`;

// Creating a styled component for the fill of the progress bar
const Fill = styled.div<FillProps>`
  width: ${(props) =>
    props.$percentage}%; // Width based on the percentage of progress
  background-color: var(--clr-accent); // Accent color for the fill
  height: 100%; // Full height of the container
  min-height: 0.5rem; // Minimum height to ensure visibility
  border-radius: 999px; // Fully rounded corners
`;

// Defining the ProgressBar functional component
function ProgressBar() {
  // Retrieving the current theme from the Redux store
  const theme = useSelector((state: RootState) => state.theme.value);

  // Retrieving the total number of questions in the quiz from the Redux store
  const max = useSelector(
    (state: RootState) => state.game.quiz.questions.length
  );

  // Retrieving the current question index from the Redux store and adding 1 (to make it 1-based)
  const now =
    useSelector((state: RootState) => state.game.currentQuestionIndex)! + 1;

  // Calculating the percentage of progress
  const percentage = Math.floor(((now - 1) * 100) / max);

  return (
    <Container $theme={theme} role="progressbar">
      <Fill $percentage={percentage}></Fill>{" "}
      {/* Displaying the fill based on the calculated percentage */}
    </Container>
  );
}

export default ProgressBar; // Exporting the component as default
