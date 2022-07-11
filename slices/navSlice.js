import { createSlice } from "@reduxjs/toolkit";

//REDUX:
//INITIAL STATE
//REDUCERS(SLICE)
//EXPORT REDUCERS
//SELECTORS
//EXPORT SLICE


//INITIAL STATE****************************************************************
const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

//REDUCERS********************************************************************
export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducer: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.origin = action.payload;
    },
    setTravelTimeInformation: (state, action) => {
      state.origin = action.payload;
    },
  },
});

//EXPORT REDUCERS************************************************************
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

//SELECTORS**************************************************************************
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;


  //EXPORT SLICE**************************************************************************
export default navSlice.reducer;
