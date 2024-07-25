// Importing necessary types and functions
import { Status, GameState } from "../types/gameTypes"; // Types for game status and state
import { createSlice } from "@reduxjs/toolkit"; // Function to create a slice of the Redux state
import { quizzes } from "../data/data.json"; // Data containing quiz questions and details

// Initial state for the game slice
const initialState: GameState = {
  status: Status.Idle, // Initial status of the game
  quiz: {
    id: undefined, // Quiz ID (will be set when a quiz is chosen)
    title: "", // Quiz title
    icon: "", // Quiz icon
    questions: [], // List of questions in the quiz
  },
  currentQuestionIndex: 0, // Index of the current question
  selectedOption: "", // The option selected by the user
  score: 0, // The score of the user
  errorMessage: "", // Error message if any
};

// Creating a slice for managing game state
export const gameSlice = createSlice({
  name: "game", // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Action to choose a quiz and initialize game state
    choseQuiz: (state, action) => {
      state.status = Status.Active; // Set game status to active
      state.quiz = quizzes.find((quiz) => quiz.id === action.payload)!; // Find and set the selected quiz
      state.currentQuestionIndex = 0; // Reset current question index
      state.score = 0; // Reset score
    },
    // Action to select an option for the current question
    selectOption: (state, action) => {
      state.selectedOption = action.payload; // Set selected option
      state.errorMessage = ""; // Clear any previous error message
    },
    // Action to submit the selected option
    submitOption: (state) => {
      if (!state.selectedOption) {
        // If no option is selected, set error message
        state.errorMessage = "Please select an answer";
      } else {
        state.status = Status.Submitting; // Change status to submitting
        const currentQuestion =
          state.quiz.questions[state.currentQuestionIndex]; // Get current question
        if (state.selectedOption === currentQuestion.answer)
          state.score = state.score + 1; // Update score if the answer is correct
      }
    },
    // Action to move to the next question
    nextQuestion: (state) => {
      if (state.currentQuestionIndex >= state.quiz.questions.length - 1) {
        // If at the last question, set status to finished
        state.status = Status.Finished;
      } else {
        // Otherwise, move to the next question
        state.status = Status.Active; // Set status to active
        state.selectedOption = ""; // Clear selected option
        state.currentQuestionIndex = state.currentQuestionIndex + 1; // Move to the next question index
      }
    },
    // Action to reset the game state
    newGame: () => initialState, // Reset state to initial values
  },
});

// Exporting action creators for use in components
export const { choseQuiz, selectOption, submitOption, nextQuestion, newGame } =
  gameSlice.actions;

// Exporting the reducer to be included in the Redux store
export default gameSlice.reducer;
