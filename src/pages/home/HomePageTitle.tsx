// Importing necessary dependencies and components
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/config"; // Importing breakpoints for desktop and tablet devices from the config file
import { Theme } from "../../types/themeTypes"; // Importing the Theme type
import { RootState } from "../../redux/store"; // Importing the RootState type from the Redux store
import { useSelector } from "react-redux"; // Importing the useSelector hook from react-redux

import styled from "styled-components"; // Importing styled from styled-components for styled components

// Defining the props for the Header styled component
type HeaderProps = {
  $theme: Theme;
};

// Creating a styled component for the header
const Header = styled.header<HeaderProps>`
  h1,
  span {
    color: ${(props) =>
      props.$theme === "light"
        ? "var(--clr-dt-300)"
        : "var(--clr-lt-700)"}; // Setting the color based on the theme
  }

  h1 {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
    font: var(--f-mobile-heading-l-light);

    & > :last-child {
      font: var(--f-mobile-heading-l-medium);
    }
  }

  h2 {
    font: var(--f-mobile-heading-m-regular-italic);
    color: ${(props) =>
      props.$theme === "light" ? "var(--clr-dt-600)" : "var(--clr-lt-300)"};
  }

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    // Media query for tablet devices and above
    & {
      margin-top: 4rem;
    }

    & h1 > :first-child {
      font: var(--f-heading-l-light);
    }

    & h1 > :last-child {
      font: var(--f-heading-l-medium);
    }

    & h2 {
      font: var(--f-body-s);
    }
  }

  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    // Media query for desktop devices and above
    & {
      margin-top: 0;
    }

    h1 {
      margin-bottom: 3rem;
    }
  }
`;

// Defining the HomePageTitle functional component
function HomePageTitle() {
  const theme = useSelector((state: RootState) => state.theme.value); // Using the useSelector hook to get the current theme from the Redux store

  return (
    <Header $theme={theme}>
      {" "}
      {/* Rendering the Header styled component with the current theme */}
      <h1>
        <span>Welcome to the</span>{" "}
        {/* Rendering the first part of the title */}
        <span>Frontend Quiz!</span>{" "}
        {/* Rendering the second part of the title */}
      </h1>
      <h2>Pick a subject to get started.</h2> {/* Rendering the subtitle */}
    </Header>
  );
}

export default HomePageTitle; // Exporting the component as default
