// Importing necessary dependencies and components
import { DESKTOP_BREAKPOINT } from "../../config/config"; // Importing the breakpoint for desktop devices from the config file

import MainContainer from "../../ui/MainContainer"; // Importing the MainContainer component
import FinishPageTitle from "./FinishPageTitle"; // Importing the FinishPageTitle component
import Header from "../../ui/Header"; // Importing the Header component
import Score from "./Score"; // Importing the Score component

import styled from "styled-components"; // Importing styled from styled-components for styled components

// Creating a styled component for the desktop layout
const DesktopLayout = styled.main`
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    // Media query for desktop devices and above
    display: flex;
    gap: 8rem; // Adding a gap between the children elements
  }
`;

// Defining the FinishPage functional component
function FinishPage() {
  return (
    <MainContainer>
      <Header /> {/* Rendering the Header component */}
      <DesktopLayout>
        {" "}
        {/* Rendering the children components in a flex layout for desktop devices */}
        <FinishPageTitle /> {/* Rendering the FinishPageTitle component */}
        <Score /> {/* Rendering the Score component */}
      </DesktopLayout>
    </MainContainer>
  );
}

export default FinishPage; // Exporting the component as default
