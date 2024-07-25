import { useDispatch, useSelector } from "react-redux"; // Importing hooks from react-redux for state management
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../config/config"; // Importing breakpoints from config file
import { toggleTheme } from "../slices/themeSlice"; // Importing the action to toggle theme from themeSlice
import { RootState } from "../redux/store"; // Importing RootState type from the redux store
import { Form } from "react-bootstrap"; // Importing Form component from react-bootstrap

import styled from "styled-components"; // Importing styled from styled-components for styling

// Styled component for container with flexbox and padding for form
const Container = styled.div`
  display: flex;
  align-items: center;

  & > form {
    padding: 0 0.75em;
  }
`;

// Styled component for switch with custom styles and media queries
const StyledSwitch = styled(Form)`
  & .form-check-input:checked,
  & .form-check-input {
    background-color: var(--clr-accent);
    border-color: var(--clr-accent);
  }

  & .form-switch .form-check-input {
    width: 2rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
  }

  & .form-check-input {
    height: 1.25rem;
  }

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    & .form-switch .form-check-input {
      width: 3rem;
    }

    & .form-check-input {
      height: 1.75rem;
    }
  }

  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin: 2rem 0;
  }
`;

// Functional component for theme toggle switch
function ThemeToggle() {
  // Getting the current theme from the Redux store
  const iconTheme =
    useSelector((state: RootState) => state.theme.value) === "light"
      ? "dark"
      : "light";
  const dispatch = useDispatch(); // Getting the dispatch function from the Redux store

  // Handler function to dispatch the toggleTheme action
  const handleToggle = () => dispatch(toggleTheme());

  // Handler function for keyboard events
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleToggle();
    }
  };

  return (
    <Container>
      <div>
        {/* Displaying the icon for light theme */}
        <img src={`icon-sun-${iconTheme}.svg`} alt="light theme" />
      </div>
      <StyledSwitch>
        {/* Switch component from react-bootstrap with an onClick handler */}
        <Form.Switch
          type="switch"
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          aria-label="Toggle theme"
        />
      </StyledSwitch>
      <div>
        {/* Displaying the icon for dark theme */}
        <img src={`icon-moon-${iconTheme}.svg`} alt="dark theme" />
      </div>
    </Container>
  );
}

export default ThemeToggle; // Exporting the ThemeToggle component as default
