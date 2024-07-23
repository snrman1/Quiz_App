import { ThemeState } from "../types/themeTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ThemeState = {
    value: "light",
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: state => {
            state.value = state.value === "light" ? "dark" : "light";
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
