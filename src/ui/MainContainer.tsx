// Importing necessary constants, functions, types, and hooks
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../config/config"; // Breakpoint values for responsive design
import { parseCustomStyle } from "../utils/parseCustomStyle"; // Function to parse custom styles
import { Device } from "../types/deviceTypes"; // Device type (enum or type definition)
import { RootState } from "../redux/store"; // RootState type for Redux store
import { useSelector } from "react-redux"; // Hook to access Redux state

import styled from "styled-components"; // styled-components library for CSS-in-JS
import React from "react"; // React library

// Type definition for MainContainer component props
type MainContainerProps = {
  children: React.ReactNode; // Children components to be rendered inside MainContainer
  style?: React.CSSProperties; // Optional custom styles for the container
};

// Type definition for StyledMainContainer component props
type StyledMainContainerProps = {
  $device: Device; // Device type (e.g., Mobile, Tablet, Desktop)
  $style?: string; // Optional custom styles parsed as a string
};

// Styled component using styled-components library
const StyledMainContainer = styled.div<StyledMainContainerProps>`
  padding: 2rem 1.5rem 1rem 1.5rem; // Padding for the container
  height: 75dvh; // 100% of the viewport height
  max-width: 640px; // Maximum width of the container
  margin: 0 auto; // Center the container horizontally
  margin-top: 3.5rem; // Top margin

  // Apply custom style if the device is Mobile
  ${(props) => props.$device === Device.Mobile && props.$style}

  // Styles for tablet devices and above
  @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
    max-width: 640px; // Maximum width for tablet devices
    padding: 2rem 0 1rem 0; // Padding adjustment
  }

  // Styles for desktop devices and above
  @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
    // 75% of the viewport height
    display: flex; // Flexbox layout
    flex-direction: column; // Flex direction
    justify-content: space-evenly; // Evenly distribute space between children
    max-width: 1160px; // Maximum width for desktop devices
    padding: 0; // Remove padding
  }
`;

// MainContainer component definition
function MainContainer({ children, style }: MainContainerProps) {
  // Using useSelector hook to get the current device type from Redux state
  const device = useSelector((state: RootState) => state.device.value);

  return (
    // Render StyledMainContainer with the device type and parsed custom style
    <StyledMainContainer $device={device} $style={parseCustomStyle(style)}>
      {children}
    </StyledMainContainer>
  );
}

// Exporting MainContainer component as default export
export default MainContainer;
