import {
  nextQuestion,
  selectOption,
  submitOption,
} from "../../slices/gameSlice";
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/config";
import { useDispatch, useSelector } from "react-redux";
import { Status } from "../../types/gameTypes";
import { RootState } from "../../redux/store";

import Option from "../../ui/Option";
import Button from "../../ui/Button";
import Error from "../../ui/Error";

import styled from "styled-components";

// Map to convert index to letter for option labels
const IndexToLetterMap = new Map([
  [0, "A"],
  [1, "B"],
  [2, "C"],
  [3, "D"],
  [4, "E"],
  [5, "F"],
]);

// Styled component for OptionsListWrapper
const OptionsListWrapper = styled.div`
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    flex-grow: 1;
  }
`;

// Styled component for StyledOptionsList
const StyledOptionsList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0;
  margin: 0 0 0.75rem 0;

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    gap: 1.5rem;
    margin: 0 0 2rem 0;
  }
`;

// OptionsList component definition
function OptionsList() {
  // Using useSelector hook to get the current question index, status, quiz data, and error message from Redux state
  const currentQuestionIndex = useSelector(
    (state: RootState) => state.game.currentQuestionIndex
  )!;
  const status = useSelector((state: RootState) => state.game.status);
  const quiz = useSelector((state: RootState) => state.game.quiz);
  const errorMessage = useSelector(
    (state: RootState) => state.game.errorMessage
  );

  // Handler for selecting an option
  const options = quiz.questions[currentQuestionIndex].options;

  // Handler for selecting an option
  const dispatch = useDispatch();

  // Handler for selecting an option
  const handleSelectOption = (option: string) => {
    if (status === Status.Submitting) return;
    dispatch(selectOption(option));
  };

  // Handler for submitting the selected option
  const handleSubmit = () => dispatch(submitOption());

  // Handler for moving to the next question
  const handleNextQuestion = () => dispatch(nextQuestion());

  return (
    <OptionsListWrapper>
      <StyledOptionsList>
        {options.map((option, index) => (
          <Option
            key={index}
            type="option"
            icon={IndexToLetterMap.get(index)!}
            onClick={() => handleSelectOption(option)}
          >
            {option}
          </Option>
        ))}
      </StyledOptionsList>
      {status === Status.Active && (
        <Button onClick={handleSubmit}>Submit Answer</Button>
      )}
      {status === Status.Submitting && (
        <Button onClick={handleNextQuestion}>Next Question</Button>
      )}
      {errorMessage.length > 0 && <Error />}
    </OptionsListWrapper>
  );
}

// Exporting OptionsList component as default export
export default OptionsList;
