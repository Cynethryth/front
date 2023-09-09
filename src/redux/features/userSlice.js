import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: "user",
    initialState: {
      value: null,
    },
    reducers: {
      actualice: (state,actions) => {
          state.value = actions.payload
        },
        remove: (state) => {
            state.value = null
          },
    },
  });
  
  export const { actualice, remove } = userSlice.actions;
  export default userSlice.reducer;