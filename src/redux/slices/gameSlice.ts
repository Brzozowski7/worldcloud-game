import { createSlice } from "@reduxjs/toolkit";

const initialState: IGame = {
  username: "",
  score: undefined,
  gameOn: true,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    stopGame: (state) => {
      state.gameOn = false;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    restartGame: () => initialState,
  },
});

export const { setUsername, stopGame, setScore, restartGame } =
  gameSlice.actions;

export default gameSlice.reducer;
