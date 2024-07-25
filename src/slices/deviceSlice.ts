// Importing necessary functions and types
import { parseScreenWidth } from "../utils/parseScreenWidth"; // Function to determine device type based on screen width
import { DeviceState } from "../types/deviceTypes"; // Type defining the structure of device state
import { createSlice } from "@reduxjs/toolkit"; // Function to create a slice of the Redux state

// Initial state of the device slice
const initialState: DeviceState = {
  value: parseScreenWidth(window.innerWidth), // Initialize with the device type based on the current window width
};

// Creating a slice for device state management
export const deviceSlice = createSlice({
  name: "device", // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Reducer to update the device type based on the current window width
    setDevice: (state) => {
      const width = window.innerWidth; // Get the current window width
      state.value = parseScreenWidth(width); // Update the state with the device type based on the width
    },
  },
});

// Exporting the action creator for setting the device type
export const { setDevice } = deviceSlice.actions;

// Exporting the reducer to be used in the store
export default deviceSlice.reducer;
