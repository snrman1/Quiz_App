// Importing breakpoint values for responsive design from the configuration file
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../config/config";
// Importing the RootState type for the Redux store
import { RootState } from "../redux/store";
// Importing useSelector hook to access the Redux state
import { useSelector } from "react-redux";

// Importing ThemeToggle component
import ThemeToggle from "./ThemeToggle";
// Importing Option component
import Option from "./Option";

// Importing styled-components library for CSS-in-JS styling
import styled from "styled-components";

// Creating a styled header component using styled-components
const StyledHeader = styled.header`
  display: flex; // Using flexbox for layout
  justify-content: space-between; // Space between items
  margin-bottom: 2rem; // Margin at the bottom

  // Media query for tablet devices
  @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
    margin-bottom: 3rem; // Increased bottom margin for tablet view
  }

  // Media query for desktop devices
  @media screen and (max-width: ${DESKTOP_BREAKPOINT}px) {
    margin: 0; // Removing bottom margin for desktop view
  }
`;

// Header component definition
function Header() {
  // Using useSelector hook to get the current quiz from the Redux state
  const currentQuiz = useSelector((state: RootState) => state.game.quiz);

  return (
    <StyledHeader>
      <Option
        type="subject" // Specifying the option type as "subject"
        icon={`icon-${currentQuiz.title.toLowerCase()}.svg`} // Setting the icon based on the quiz title
        isTransparent={true} // Making the option transparent
      >
        {/* Rendering the quiz title */}
        {currentQuiz.title}
      </Option>
      <ThemeToggle /> {/* Rendering the ThemeToggle component */}
    </StyledHeader>
  );
}

// Exporting the Header component as the default export
export default Header;
