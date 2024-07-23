export type QuizId = number;
export type QuestionId = number;

export enum Status {
    Idle = "idle",
    Active = "active",
    Submitting = "submitting",
    Finished = "finished",
}

export type Quiz = {
    id: number | undefined;
    title: string;
    icon: string;
    questions: {
        id: number;
        question: string;
        options: string[];
        answer: string;
    }[];
};

export type GameState = {
    status: Status;
    quiz: Quiz;
    currentQuestionIndex: number;
    selectedOption: string;
    score: number;
    errorMessage: string;
};
