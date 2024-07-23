import { createGlobalStyle } from "styled-components";
import { quizzes } from "../data/data.json";

const colors = ["#fff1e9", "#e0fdef", "#ebf0ff", "#f6e7ff"];
if (colors.length !== quizzes.length)
  throw new Error("number of quizzes does not match number of colors");
const colorMap = quizzes
  .map((quiz, index) => `--clr-${quiz.title.toLowerCase()}: ${colors[index]};`)
  .join("\n");

const GlobalStyles = createGlobalStyle`
    :root {
    /* colors */
    /* shared */
    --clr-white: #ffffff;
    --clr-accent: #a729f5;
    --clr-correct: #26d782;
    --clr-wrong: #ee5454;
    --cl-bg-btn-hover: rgba(167, 41, 245, 0.5);


    /* light theme */
    --clr-lt-700: #ffffff;
    --clr-lt-600: #f4f6fa;
    --clr-lt-300: #abc1e1;
    
    
    /* dark theme */
    --clr-dt-700: #626c7f;
    --clr-dt-600: #3b4d66;
    --clr-dt-300: #313e51;    
    
    
    /* icons */
    --i-size-mobile: 1.78125rem;
    --i-size-table: 2.5rem;
    ${colorMap}

    /* typography */
    /* families */
    --ff-primary: "Rubik", sans-serif;
    /* styles */
    --f-display: normal normal 500 9rem/100% var(--ff-primary);
    --f-body-s: italic normal 400 1.25rem/150% var(--ff-primary);
    --f-body-m: normal normal 400 1.5rem/150% var(--ff-primary);
    --f-heading-l-light: normal normal 300 4rem/100% var(--ff-primary);
    --f-heading-l-medium: normal normal 500 4rem/100% var(--ff-primary);
    --f-heading-m-medium: normal normal 500 2.25rem/120% var(--ff-primary);
    --f-mobile-heading-l-light: normal normal 300 2.5rem/100% var(--ff-primary);
    --f-mobile-heading-l-medium: normal normal 500 2.5rem/100% var(--ff-primary);
    --f-mobile-heading-m-regular-italic: italic normal 400 0.875rem/150% var(--ff-primary);
    --f-mobile-body-regular: normal normal 400 1.125rem/100% var(--ff-primary);
    --f-mobile-question: normal normal 500 1.25rem/120% var(--ff-primary);
    --f-mobile-option: normal normal 500 1.125rem/150% var(--ff-primary);
    --f-tablet-option: normal normal 500 1.75rem/100% var(--ff-primary);
    --f-button-mobile: normal normal 500 1.125rem/100% var(--ff-primary);
    --f-button-tablet: normal normal 500 1.75rem/100% var(--ff-primary);
    --f-score: normal normal 500 5.5rem/100% var(--ff-primary);
    --f-mobile-option-icon: normal normal 500 1.125rem/100% var(--ff-primary);
    --f-tablet-option-icon: normal normal 500 1.75rem/100% var(--ff-primary);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p{
        margin: 0;
        padding: 0;
    }

    body {
        background: var(--clr-lt-300);
        overflow-y: auto;
    }
   

    .body-light {
        background: var(--clr-lt-600);
    }

    .body-dark {
        background: var(--clr-dt-300);
    }

`;

export default GlobalStyles;
