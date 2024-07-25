# Frontend Mentor - Frontend quiz app solution

This is a guide and information about the project

## Table of Contents

- [overview]
- [The Challenge]
- [Screenshot]
- [Links]
- [My process]
- [Built with]
- [What I learned]
- [Continued development]
- [Useful resources]
- [Author]
- [Acknowledgments]

## OVERVIEW

### The Challenge

Users should be able to:

- Select a quiz subject
- Select a single answer from each question from a choice of four
- See an error message when trying to submit an answer without making a selection
- See if they have made a correct or incorrect choice when they submit an answer
- Move on to the next question after seeing the question result
- See a completed state with the score after the final question
- Play again to choose another subject
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Navigate the entire app only using their keyboard
- **Bonus**: Change the app's theme between light and dark

### Screenshot

![Screenshot Desktop](/public/screenshot/Desktop-screenshot%20.png)
![Screenshot Mobile](/public/screenshot/Moile-Screenshot%20.png)
![Screenshot Tablet](/public/screenshot/Tablet-Screenshot%20.png)

### Links

- Solutions URL: [Github] (https://github.com/snrman1/Quiz_App.git)
- Live site URL: [GitHub pages]()

## MY PROCESS

Quiz app created with Vite React + Typescript template

State manged with React Redux

Styled with styled-components

### Built with

- Semantic HTML5 markup
- Css custom properties
- Flexbox
- Css Grid
- JavaScript
- [React] (https://react.dev/) - JS Library
- [Redux] (https://redux.js.org/)- React Library
- [TypeScript] (https://react.dev/learn/typescript) Js Library
- [Styled Components] (https://styled-components.com/docs/) - For styles

### What i learned

Throughout this project, I learned how to effectively use React and Redux for state management, styled-components for styling, and how to create an accessible and responsive user interface. Below are some code snippets that I am particularly proud of:

```css
const Count = styled.p<CountProps>`
 font: var(--f-mobile-heading-m-regular-italic);
 color: ${(props) =>
   props.$theme === "light" ? "var(--clr-dt-700)" : "var(--clr-lt-300)"};

 @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
   font: var(--f-body-s);
 }
`;
```

```js
const currentQuestionIndex = useSelector(
    (state: RootState) => state.game.currentQuestionIndex
  )!;
```

### Continued development

- Advanced Redux techniques
- Creating custom hooks in React
- Enhancing accessibility features
- Implementing more complex animations and transitions

### Useful Resources

- [Styled Components Documentation] (https://styled-components.com/docs) - This was very useful for learning how to style components in a modular and reusable way.
- [React Documentation](https://react.dev/docs)- This is an excellent resource for understanding React.
- [Redux Documentation](https://redux.js.org/docs) - This helped me to get a better grasp of state management in large applications.
- [StackOverflow](https://stackoverflow.com) - This helped me to solve a problem with my state managment.
- [MDN Docs](https://mdn.com/docs/) - This helped me with refrencing the syntax of react and styled-components

## Author

- LinkedIn - [ABDULAI ISHMEAL SADIQUE](https://www.linkedin.com/in/ishmeal-abdulai-03a736248)
- GitHub - [@snrman1](https://github.com/snrman1)
- Twitter - [SnRmAn0](https://x.com/SnRmAn0)

## Acknowledgments

I want to give great thanks to _Agyeman Darko_ for helping me understand the basics of typescript and my friends _Joshua_ and _Bertha_ for motivating and encouraging me to push pass my limit and me myself for working so hard to achieve this.
