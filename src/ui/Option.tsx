import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../config/config"; // Breakpoint values for responsive design
import { Theme } from "../types/themeTypes"; // Theme type (e.g., light, dark)
import { Status } from "../types/gameTypes"; // Game status type (e.g., Submitting, Completed)
import { RootState } from "../redux/store"; // RootState type for Redux store
import { useSelector } from "react-redux"; // Hook to access Redux state

import styled from "styled-components"; // styled-components library for CSS-in-JS

// Type definition for option type
type OptionType = "subject" | "option";

// Type definition for Option component props
type OptionProps = {
  children: string; // Text content for the option
  type: OptionType; // Type of the option (subject or option)
  icon: string; // Icon for the option
  isTransparent?: boolean; // Optional flag for transparency
  onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void; // Optional click handler
  onKeyDown?: (e: React.KeyboardEvent<HTMLLIElement>) => void; // Optional keydown handler
  tabIndex?: number; // Optional tabIndex
};

// Type definition for MainContainer styled component props
type MainContainerProps = {
  $theme: Theme; // Theme type
  $isTransparent: boolean; // Flag for transparency
  $isSelected: boolean; // Flag for selection
  $highlightCorrect: boolean; // Flag to highlight correct answer
  $highlightWrong: boolean; // Flag to highlight wrong answer
};

// Type definition for IconContainer styled component props
type IconContainerProps = {
  $theme: Theme; // Theme type
  $backgroundColor: string | undefined; // Background color
  $type: OptionType; // Option type
  $isSelected: boolean; // Flag for selection
  $highlightCorrect: boolean; // Flag to highlight correct answer
  $highlightWrong: boolean; // Flag to highlight wrong answer
  $isHovered: boolean; // Flag for hover state
};

// Styled component for icon container
const IconContainer = styled.div<IconContainerProps>`
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font: var(--f-mobile-option-icon);
  border-radius: 0.375rem;

  background-color: ${(props) =>
    props.$backgroundColor
      ? props.$backgroundColor
      : props.$isHovered && !props.$isSelected
      ? "var(--clr-bg-btn-and-selection-active)"
      : "var(--clr-lt-600)"};
  ${(props) => props.$isSelected && "background-color: var(--clr-accent)"};
  ${(props) =>
    props.$highlightCorrect && "background-color: var(--clr-correct)"};
  ${(props) => props.$highlightWrong && "background-color: var(--clr-wrong)"};

  color: ${(props) => (props.$type === "subject" ? "" : "var(--clr-dt-700)")};
  ${(props) => props.$isSelected && "color: var(--clr-white)"};

  & > img {
    width: var(--i-size-mobile);
  }

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    & {
      width: 56px;
      height: 56px;
      min-width: 56px;
      min-height: 56px;
      border-radius: 0.75rem;
      font: var(--f-tablet-option-icon);
    }

    & > img {
      width: var(--i-size-tablet);
    }
  }

  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    border-radius: 0.5rem;
  }
`;

// Styled component for main container
const MainContainer = styled.li<MainContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.75rem;
  cursor: pointer;

  background-color: ${(props) => {
    if (props.$isTransparent) return "transparent";
    else
      return props.$theme === "light"
        ? "var(--clr-lt-700)"
        : "var(--clr-dt-600)";
  }};

  padding: ${(props) => (props.$isTransparent ? "0" : "0.75rem")};

  box-shadow: ${(props) => {
    if (props.$isTransparent) return "none";
    return props.$isSelected
      ? "inset 0 0 0 3px var(--clr-accent), var(--shadow)"
      : "var(--shadow)";
  }};

  ${(props) =>
    props.$highlightCorrect &&
    "box-shadow: inset 0 0 0 3px var(--clr-correct), var(--shadow)"};
  ${(props) =>
    props.$highlightWrong &&
    "box-shadow: inset 0 0 0 3px var(--clr-wrong), var(--shadow)"};

  h2 {
    font: var(--f-mobile-option);
    color: ${(props) =>
      props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)"};
  }

  ${(props) =>
    !props.$isSelected &&
    `&:hover ${IconContainer} {
      background-color: var(--clr-bg-btn-and-selection-active);
      color: var(--clr-option-hover);
    }`}

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    border-radius: 1.5rem;

    h2 {
      font: var(--f-tablet-option);
    }
  }

  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    padding: ${(props) => (props.$isTransparent ? "0" : "0.7rem")};
    max-height: 4.2rem;
    border-radius: 0.7rem;
  }
`;

// Styled component for content wrapper
const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    gap: 2rem;
  }
`;

// Option component definition
function Option({
  children,
  type,
  icon,
  isTransparent = false,
  onClick,
  onKeyDown,
  tabIndex = 0,
}: OptionProps) {
  // Using useSelector hook to get the current theme, selected option, game status, and answer from Redux state
  const theme = useSelector((state: RootState) => state.theme.value);
  const selectedOption = useSelector(
    (state: RootState) => state.game.selectedOption
  );
  const status = useSelector((state: RootState) => state.game.status);
  const answer = useSelector(
    (state: RootState) =>
      state.game.quiz.questions[state.game.currentQuestionIndex]?.answer
  );

  const backgroundColor =
    type === "subject" ? `var(--clr-${children.toLowerCase()})` : undefined;

  const isCorrect = children === answer;
  const isSelected = selectedOption === children;

  const showSuccessIcon = isCorrect && status === Status.Submitting;

  const highlightCorrect =
    isCorrect && isSelected && status === Status.Submitting;
  const highlightWrong =
    !isCorrect && isSelected && status === Status.Submitting;

  return (
    <MainContainer
      $theme={theme}
      $isTransparent={isTransparent}
      $isSelected={isSelected}
      $highlightCorrect={highlightCorrect}
      $highlightWrong={highlightWrong}
      onClick={onClick}
      onKeyDown={onKeyDown}
      tabIndex={tabIndex}
      as={isTransparent ? "div" : "li"}
    >
      <ContentWrapper>
        <IconContainer
          $theme={theme}
          $backgroundColor={backgroundColor}
          $type={type}
          $isSelected={isSelected}
          $highlightCorrect={highlightCorrect}
          $highlightWrong={highlightWrong}
          $isHovered={false}
        >
          {type === "subject" ? <img src={icon} alt="quiz name" /> : icon}
        </IconContainer>
        <h2>{children}</h2>
      </ContentWrapper>
      {showSuccessIcon && (
        <div>
          <img src="icon-correct.svg" alt="correct answer" />
        </div>
      )}
      {highlightWrong && (
        <div>
          <img src="icon-incorrect.svg" alt="wrong answer" />
        </div>
      )}
    </MainContainer>
  );
}

// Exporting Option component as default export
export default Option;
