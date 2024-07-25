// Importing necessary dependencies and components
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/config"; // Importing breakpoints for desktop and tablet devices from the config file
import { choseQuiz } from "../../slices/gameSlice"; // Importing the choseQuiz action from the gameSlice
import { quizzes } from "../../data/data.json"; // Importing the quizzes data from the data.json file
import { useDispatch } from "react-redux"; // Importing the useDispatch hook from react-redux

import Option from "../../ui/Option"; // Importing the Option component

import styled from "styled-components"; // Importing styled from styled-components for styled components

// Creating a styled component for the list of subjects
const List = styled.ul`
  margin: 2.5rem 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    // Media query for tablet devices and above
    & {
      margin-top: 4rem;
      gap: 1.5rem;
    }
  }

  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    // Media query for desktop devices and above
    & {
      margin-top: 0;
      flex-grow: 1;
    }
  }
`;

// Defining the SubjectList functional component
function SubjectList() {
  const dispatch = useDispatch(); // Using the useDispatch hook to get the dispatch function

  // Function to handle the quiz selection
  const handleChoseQuiz = (id: number) => dispatch(choseQuiz(id)); // Dispatching the choseQuiz action with the selected quiz id

  return (
    <List>
      {" "}
      {/* Rendering the list of quizzes */}
      {quizzes.map((quiz) => (
        <Option
          key={quiz.id}
          type="subject"
          icon={`icon-${quiz.title.toLowerCase()}.svg`} // Setting the icon based on the quiz title
          onClick={() => handleChoseQuiz(quiz.id)} // Setting the onClick handler to choose the quiz
        >
          {quiz.title}
        </Option>
      ))}
    </List>
  );
}

export default SubjectList; // Exporting the component as default
