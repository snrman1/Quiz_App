// Importing breakpoint values for responsive design from the configuration file
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../config/config";
// Importing styled-components library for CSS-in-JS styling
import styled from "styled-components";

// Defining the type for ButtonProps to specify the types of props the Button component can accept
type ButtonProps = {
  children: React.ReactNode; // The content of the button, can be text or any React node
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // Optional click event handler
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void; // Optional keydown event handler
  tabIndex?: number; // Optional tabIndex for keyboard navigation
};

// Creating a styled button component using styled-components
const StyledButton = styled.button`
  font-family: var(--ff-primary); // Using a custom font-family variable
  background-color: var(--clr-accent); // Background color from a CSS variable
  width: 100%; // Full width button
  outline: none; // Removing default outline
  border: none; // Removing default border
  padding: 1.1875rem 0.75rem; // Padding for the button
  color: var(--clr-white); // Text color from a CSS variable
  border-radius: 0.75rem; // Border radius for rounded corners
  cursor: pointer; // Changing cursor to pointer on hover
  font: var(--f-button-mobile); // Font styling for mobile view from a CSS variable

  // Media query for tablet devices
  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 2rem; // Increased padding for tablet view
    font: var(--f-button-tablet); // Font styling for tablet view from a CSS variable
    border-radius: 1.5rem; // Increased border radius for tablet view
  }

  // Media query for desktop devices
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    max-height: 4.7rem; // Maximum height for the button
    border-radius: 0.9rem; // Adjusted border radius for desktop view
    padding: 1.2rem; // Adjusted padding for desktop view
  }

  &:hover {
    background: var(--clr-bg-btn-hover); // Background color on hover from a CSS variable
    transition: all 0.2s ease-in-out; // Transition effect for the hover state
  }
`;

// Button component definition that takes children, onClick, onKeyDown, and tabIndex as props
function Button({ children, onClick, onKeyDown, tabIndex }: ButtonProps) {
  return (
    <StyledButton onClick={onClick} onKeyDown={onKeyDown} tabIndex={tabIndex}>
      {children} {/* Rendering the content of the button */}
    </StyledButton>
  );
}

// Exporting the Button component as the default export
export default Button;
