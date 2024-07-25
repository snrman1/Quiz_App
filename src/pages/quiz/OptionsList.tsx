// Importing necessary actions from the gameSlice
import {
  nextQuestion,
  selectOption,
  submitOption,
} from "../../slices/gameSlice";

// Importing breakpoint values for responsive design from the configuration file
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/config";

// Importing hooks from react-redux for accessing and dispatching Redux state
import { useDispatch, useSelector } from "react-redux";

// Importing status types for the game
import { Status } from "../../types/gameTypes";

// Importing RootState type for the Redux store
import { RootState } from "../../redux/store";

// Importing UI components
import Option from "../../ui/Option";
import Button from "../../ui/Button";
import Error from "../../ui/Error";

// Importing styled-components library for CSS-in-JS styling
import styled from "styled-components";

// Mapping index to letter for option labels
const IndexToLetterMap = new Map([
  [0, "A"],
  [1, "B"],
  [2, "C"],
  [3, "D"],
  [4, "E"],
  [5, "F"],
]);

// Styled component for the wrapper of the options list
const OptionsListWrapper = styled.div`
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    flex-grow: 1; // Allowing the wrapper to grow to fill available space on desktop
  }
`;

// Styled component for the ordered list of options
const StyledOptionsList = styled.ol`
  display: flex; // Using flexbox for layout
  flex-direction: column; // Aligning items in a column
  gap: 0.75rem; // Space between items
  padding: 0; // Removing default padding
  margin: 0 0 0.75rem 0; // Margin at the bottom

  // Media query for tablet devices
  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    gap: 1.5rem; // Increased gap between items for tablet view
    margin: 0 0 2rem 0; // Increased bottom margin for tablet view
  }
`;

// OptionsList component definition
function OptionsList() {
  // Using useSelector hook to get the current question index from the Redux state
  const currentQuestionIndex = useSelector(
    (state: RootState) => state.game.currentQuestionIndex
  )!;
  // Using useSelector hook to get the current status from the Redux state
  const status = useSelector((state: RootState) => state.game.status);
  // Using useSelector hook to get the quiz data from the Redux state
  const quiz = useSelector((state: RootState) => state.game.quiz);
  // Using useSelector hook to get the error message from the Redux state
  const errorMessage = useSelector(
    (state: RootState) => state.game.errorMessage
  );

  // Getting the options for the current question
  const options = quiz.questions[currentQuestionIndex].options;

  // Using useDispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Handler for selecting an option
  const handleSelectOption = (option: string) => {
    if (status === Status.Submitting) return; // Prevent selection if the status is submitting
    dispatch(selectOption(option)); // Dispatch selectOption action
  };

  // Handler for submitting an option
  const handleSubmit = () => dispatch(submitOption()); // Dispatch submitOption action

  // Handler for going to the next question
  const handleNextQuestion = () => dispatch(nextQuestion()); // Dispatch nextQuestion action

  // Handler for keydown events on options
  const handleOptionKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    option: string
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleSelectOption(option); // Select option if Enter or Space key is pressed
    }
  };

  // Handler for keydown events on the submit button
  const handleSubmitKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleSubmit(); // Submit option if Enter or Space key is pressed
    }
  };

  // Handler for keydown events on the next question button
  const handleNextQuestionKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleNextQuestion(); // Go to the next question if Enter or Space key is pressed
    }
  };

  return (
    <OptionsListWrapper>
      <StyledOptionsList>
        {options.map((option, index) => (
          <Option
            key={index} // Key for list item
            type="option" // Specifying the option type
            icon={IndexToLetterMap.get(index)!} // Setting the icon based on the index
            onClick={() => handleSelectOption(option)} // Handling click event
            onKeyDown={(event) => handleOptionKeyDown(event, option)} // Handling keydown event
            tabIndex={0} // Setting tabIndex for accessibility
          >
            {/* Rendering the option text */}
            {option}
          </Option>
        ))}
      </StyledOptionsList>
      {status === Status.Active && (
        <Button
          onClick={handleSubmit} // Handling click event for the submit button
          onKeyDown={handleSubmitKeyDown} // Handling keydown event for the submit button
          tabIndex={0} // Setting tabIndex for accessibility
        >
          Submit Answer {/* Button text */}
        </Button>
      )}
      {status === Status.Submitting && (
        <Button
          onClick={handleNextQuestion} // Handling click event for the next question button
          onKeyDown={handleNextQuestionKeyDown} // Handling keydown event for the next question button
          tabIndex={0} // Setting tabIndex for accessibility
        >
          Next Question {/* Button text */}
        </Button>
      )}
      {errorMessage.length > 0 && <Error />}{" "}
      {/* Rendering error message if any */}
    </OptionsListWrapper>
  );
}

// Exporting OptionsList component as the default export
export default OptionsList;
