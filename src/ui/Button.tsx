import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../config/config";

import styled from "styled-components";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const StyledButton = styled.button`
  font-family: var(--ff-primary);
  background-color: var(--clr-accent);
  width: 100%;
  outline: none;
  border: none;
  padding: 1.1875rem 0.75rem;
  color: var(--clr-white);
  border-radius: 0.75rem;
  cursor: pointer;
  font: var(--f-button-mobile);

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 2rem;
    font: var(--f-button-tablet);
    border-radius: 1.5rem;
  }

  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    max-height: 4.7rem;
    border-radius: 0.9rem;
    padding: 1.2rem;
  }

  &:hover {
    background: var(--cl-bg-btn-hover);
    transition: all 0.2s ease-in-out;
  }
`;

function Button({ children, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
