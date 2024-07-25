// Importing necessary dependencies
import { useSelector } from "react-redux"; // Hook to access Redux store state
import type { RootState } from "../redux/store"; // Type for the Redux store's state

import styled from "styled-components"; // Importing styled-components for styling

// Creating a styled component for the backdrop container
const BackdropContainer = styled.div`
  position: fixed; // Fixes the backdrop to the viewport
  top: 0; // Positions the backdrop at the top of the viewport
  z-index: -1; // Ensures the backdrop is behind other content
`;

// Defining the Backdrop functional component
function Backdrop() {
  // Accessing the current device and theme from the Redux store
  const device = useSelector((state: RootState) => state.device.value);
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <BackdropContainer role="banner">
      {/* Displaying a background image based on device and theme */}
      <img src={`pattern-background-${device}-${theme}.svg`} alt="backdrop" />
    </BackdropContainer>
  );
}

export default Backdrop; // Exporting the Backdrop component as default
