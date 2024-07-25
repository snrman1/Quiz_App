// Importing necessary dependencies and types
import { Theme } from "../types/themeTypes"; // Importing Theme type for theming
import { RootState } from "../redux/store"; // Importing RootState type for Redux store
import { useSelector } from "react-redux"; // Importing the useSelector hook from react-redux

import styled from "styled-components"; // Importing styled from styled-components for CSS-in-JS

// Defining props for the styled ErrorMessage component
type ErrorMessageProps = {
  $theme: Theme; // The theme of the application, which affects styling
};

// Creating a styled wrapper for the error message
const ErrorWrapper = styled.div`
  display: flex; // Using flexbox for layout
  align-items: center; // Centering items vertically
  justify-content: center; // Centering items horizontally
  gap: 0.5rem; // Space between the icon and the error message
  margin-top: 0.75rem; // Margin at the top

  & img {
    width: 32px; // Width of the error icon
    height: 32px; // Height of the error icon
  }
`;

// Creating a styled component for the error message text
const ErrorMessage = styled.span<ErrorMessageProps>`
  color: ${(props) =>
    props.$theme === "light"
      ? "var(--clr-wrong)"
      : "var(--clr-white)"}; // Text color based on the theme
  font: var(--f-mobile-body-regular); // Font style for the error message
`;

// Defining the Error functional component
function Error() {
  // Retrieving the current theme from the Redux store
  const theme = useSelector((state: RootState) => state.theme.value);

  // Retrieving the error message from the Redux store
  const errorMessage = useSelector(
    (state: RootState) => state.game.errorMessage
  );

  return (
    <ErrorWrapper>
      <div>
        <img src="icon-error.svg" alt="error icon" />{" "}
        {/* Displaying an error icon */}
      </div>
      <ErrorMessage $theme={theme}>{errorMessage}</ErrorMessage>{" "}
      {/* Displaying the error message with applied theme */}
    </ErrorWrapper>
  );
}

export default Error; // Exporting the component as default
