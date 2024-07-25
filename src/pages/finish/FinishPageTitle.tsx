// Importing necessary dependencies and types
import { TABLET_BREAKPOINT } from "../../config/config"; // Importing the breakpoint for tablet devices from the config file
import { Theme } from "../../types/themeTypes"; // Importing the Theme type
import { RootState } from "../../redux/store"; // Importing the RootState type from the redux store
import { useSelector } from "react-redux"; // Importing the useSelector hook from react-redux

import styled from "styled-components"; // Importing styled from styled-components for styled components

// Defining the TitleProps type for the styled component
type TitleProps = {
  $theme: Theme;
};

// Creating a styled component for the title
const Title = styled.h1<TitleProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: ${(props) =>
    props.$theme === "light"
      ? "var(--clr-dt-300)"
      : "var(--clr-lt-700)"}; // Conditional color based on theme
  font: var(--f-mobile-heading-l-light);

  & :last-child {
    font: var(--f-mobile-heading-l-medium);
  }

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    // Media query for tablet devices and above
    :first-child {
      font: var(--f-heading-l-light);
    }

    :last-child {
      font: var(--f-heading-l-medium);
    }
  }
`;

// Defining the FinishPageTitle functional component
function FinishPageTitle() {
  const theme = useSelector((state: RootState) => state.theme.value); // Accessing the current theme from the Redux store

  return (
    <Title $theme={theme}>
      {" "}
      {/* Passing the current theme to the styled component */}
      <span>Quiz completed</span>
      <span>You scored...</span>
    </Title>
  );
}

export default FinishPageTitle; // Exporting the component as default
