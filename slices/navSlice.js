import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null,
}

const userSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
      setOrigin: (state, action) => {
          state.origin = action.payload;
      },
      setDestination: (state, action) => {
          state.destination = action.payload;
      },
      setTravelTimeInfo: (state, action) => {
          state.travelTimeInfo = action.payload;
      }
  }
});

export const {setOrigin, setDestination, setTravelTimeInfo} = userSlice.actions

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;

export default userSlice.reducer