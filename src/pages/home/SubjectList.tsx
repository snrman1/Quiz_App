// Importing breakpoint values for responsive design from the configuration file
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/config";

// Importing the choseQuiz action from the gameSlice
import { choseQuiz } from "../../slices/gameSlice";

// Importing quiz data from the JSON file
import { quizzes } from "../../data/data.json";

// Importing useDispatch hook from react-redux for dispatching actions
import { useDispatch } from "react-redux";

// Importing Option component for rendering quiz options
import Option from "../../ui/Option";

// Importing styled-components library for CSS-in-JS styling
import styled from "styled-components";

// Styled component for the list of subjects
const List = styled.ul`
  margin: 2.5rem 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  // Media query for tablet devices
  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    margin-top: 4rem;
    gap: 1.5rem; // Increased gap between items for tablet view
  }

  // Media query for desktop devices
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin-top: 0;
    flex-grow: 1; // Allowing the list to grow to fill available space on desktop
  }
`;

// SubjectList component definition
function SubjectList() {
  // Using useDispatch hook to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Handler for choosing a quiz
  const handleChoseQuiz = (id: number) => dispatch(choseQuiz(id));

  // Handler for keydown events on the option elements
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLLIElement>,
    id: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      handleChoseQuiz(id); // Choose the quiz if Enter or Space key is pressed
    }
  };

  return (
    <List>
      {/* Mapping through quizzes array and rendering an Option component for each quiz */}
      {quizzes.map((quiz) => (
        <Option
          key={quiz.id} // Unique key for each quiz
          type="subject" // Specifying the option type
          icon={`icon-${quiz.title.toLowerCase()}.svg`} // Setting the icon based on the quiz title
          onClick={() => handleChoseQuiz(quiz.id)} // Setting the click handler
          onKeyDown={(event) => handleKeyDown(event, quiz.id)} // Setting the keydown handler
          tabIndex={0} // Making the option focusable
        >
          {/* Rendering the quiz title */}
          {quiz.title}
        </Option>
      ))}
    </List>
  );
}

// Exporting SubjectList component as the default export
export default SubjectList;
