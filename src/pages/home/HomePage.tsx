// Importing necessary dependencies and components
import { Device } from "../../types/deviceTypes"; // Importing the Device type from deviceTypes
import { RootState } from "../../redux/store"; // Importing the RootState type from the store
import { useSelector } from "react-redux"; // Importing the useSelector hook from react-redux

import MainContainer from "../../ui/MainContainer"; // Importing the MainContainer component
import ThemeToggle from "../../ui/ThemeToggle"; // Importing the ThemeToggle component
import HomePageTitle from "./HomePageTitle"; // Importing the HomePageTitle component
import SubjectList from "./SubjectList"; // Importing the SubjectList component

import styled from "styled-components"; // Importing styled from styled-components for styled components
import { DESKTOP_BREAKPOINT } from "../../config/config"; // Importing the desktop breakpoint from the config file

// Defining the props type for ThemeToggleWrapper
type ThemeToggleWrapperProps = {
  $device: Device; // Device prop to determine the device type
};

// Creating a styled component for the ThemeToggle wrapper
const ThemeToggleWrapper = styled.div<ThemeToggleWrapperProps>`
  display: flex;
  justify-content: flex-end;
  ${(props) => props.$device === Device.Mobile && "margin-top: 1.4375rem"};
`;

// Creating a styled component for the content wrapper
const ContentWrapper = styled.main`
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    // Media query for desktop devices and above
    display: flex;
    gap: 8rem;
  }
`;

// Defining styles for mobile devices
const mobileStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

// Defining the HomePage functional component
function HomePage() {
  const device = useSelector((state: RootState) => state.device.value); // Using the useSelector hook to get the current device type from the Redux store

  return (
    <MainContainer style={mobileStyles}>
      {" "}
      {/* Applying mobile styles */}
      {device !== Device.Mobile && ( // Conditionally rendering ThemeToggleWrapper for non-mobile devices
        <ThemeToggleWrapper $device={device}>
          <ThemeToggle /> {/* Rendering the ThemeToggle component */}
        </ThemeToggleWrapper>
      )}
      {device === Device.Mobile && ( // Conditionally rendering ThemeToggleWrapper for mobile devices
        <ThemeToggleWrapper $device={device}>
          <ThemeToggle /> {/* Rendering the ThemeToggle component */}
        </ThemeToggleWrapper>
      )}
      <ContentWrapper>
        {" "}
        {/* Rendering the main content */}
        <HomePageTitle /> {/* Rendering the HomePageTitle component */}
        <SubjectList /> {/* Rendering the SubjectList component */}
      </ContentWrapper>
    </MainContainer>
  );
}

export default HomePage; // Exporting the component as default
