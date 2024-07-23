import { configureStore } from "@reduxjs/toolkit";

import deviceReducer from "../slices/deviceSlice";
import themeReducer from "../slices/themeSlice";
import gameSlice from "../slices/gameSlice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        device: deviceReducer,
        game: gameSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
