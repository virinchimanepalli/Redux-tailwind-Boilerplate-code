import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CharactersState {
  characters: "";
}

const initialState: CharactersState = {
  characters: "",
};

/*
This only a boilerplate code
**/

const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    // addMultipleCharacters: (state, action: PayloadAction<ICharacters[]>) => {
    //   // Only add those Characters who are not already in the state
    //   const newCaptures = action.payload.filter(
    //     (capture) =>
    //       state.characters.filter((c) => c.url === capture.url).length === 0
    //   );
    //   state.characters = state.characters.concat(newCaptures);
    // },

    clearCharacters: (state) => {
      state.characters = "";
    },
  },
});

export const { clearCharacters } = characterSlice.actions;

export default characterSlice.reducer;
