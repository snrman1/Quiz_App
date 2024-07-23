import { parseScreenWidth } from "../utils/parseScreenWidth";
import { DeviceState } from "../types/deviceTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: DeviceState = {
    value: parseScreenWidth(window.innerWidth),
};

export const deviceSlice = createSlice({
    name: "device",
    initialState,
    reducers: {
        setDevice: state => {
            const width = window.innerWidth;
            state.value = parseScreenWidth(width);
        },
    },
});

export const { setDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
