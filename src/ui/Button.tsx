// Importing necessary dependencies
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../config/config"; // Importing breakpoints for responsive design

import styled from "styled-components"; // Importing styled-components for styling

// Defining the type for Button component props
type ButtonProps = {
  children: React.ReactNode; // Content to be displayed inside the button
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // Optional onClick handler for button clicks
};

// Creating a styled button component
const StyledButton = styled.button`
  font-family: var(--ff-primary); // Font family for the button
  background-color: var(--clr-accent); // Background color of the button
  width: 100%; // Full width of the button
  outline: none; // Removing default outline
  border: none; // Removing default border
  padding: 1.1875rem 0.75rem; // Padding inside the button for mobile
  color: var(--clr-white); // Text color
  border-radius: 0.75rem; // Rounded corners for mobile
  cursor: pointer; // Changing cursor to pointer on hover
  font: var(--f-button-mobile); // Font style for mobile

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 2rem; // Padding for tablet screens
    font: var(--f-button-tablet); // Font style for tablets
    border-radius: 1.5rem; // More rounded corners for tablet
  }

  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    max-height: 4.7rem; // Maximum height for desktop
    border-radius: 0.9rem; // Adjusted border-radius for desktop
    padding: 1.2rem; // Padding for desktop
  }

  &:hover {
    background: var(--cl-bg-btn-hover); // Background color on hover
    transition: all 0.2s ease-in-out; // Smooth transition for hover effect
  }
`;

// Defining the Button functional component
function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>; // Rendering the styled button with click handler and children
}

export default Button; // Exporting the Button component as default
