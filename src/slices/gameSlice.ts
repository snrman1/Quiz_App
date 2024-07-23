import { Status, GameState } from "../types/gameTypes";
import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../data/data.json";

const initialState: GameState = {
    status: Status.Idle,
    quiz: {
        id: undefined,
        title: "",
        icon: "",
        questions: [],
    },
    currentQuestionIndex: 0,
    selectedOption: "",
    score: 0,
    errorMessage: "",
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        choseQuiz: (state, action) => {
            state.status = Status.Active;
            state.quiz = quizzes.find(quiz => quiz.id === action.payload)!;
            state.currentQuestionIndex = 0;
            state.score = 0;
        },
        selectOption: (state, action) => {
            state.selectedOption = action.payload;
            state.errorMessage = "";
        },
        submitOption: state => {
            if (!state.selectedOption) {
                state.errorMessage = "Please select an answer";
            } else {
                state.status = Status.Submitting;
                const currentQuestion = state.quiz.questions[state.currentQuestionIndex];
                if (state.selectedOption === currentQuestion.answer) state.score = state.score + 1;
            }
        },
        nextQuestion: state => {
            if (state.currentQuestionIndex >= state.quiz.questions.length - 1) {
                // if we are at the last question
                state.status = Status.Finished;
            } else {
                // else if there are more questions left
                state.status = Status.Active;
                state.selectedOption = "";
                state.currentQuestionIndex = state.currentQuestionIndex + 1;
            }
        },
        newGame: () => initialState,
    },
});

export const { choseQuiz, selectOption, submitOption, nextQuestion, newGame } = gameSlice.actions;

export default gameSlice.reducer;
