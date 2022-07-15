import { createSlice } from "@reduxjs/toolkit";

//REDUX:
//INITIAL STATE
//REDUCERS(SLICE)
//EXPORT REDUCERS "actions"
//SELECTORS
//EXPORT SLICE "reducer"


//INITIAL STATE****************************************************************
//siempre debe haber un estado inicial que por convencion se llama "initialState"
const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

//REDUCERS********************************************************************
//con los reducer manipulamos la informacion o la "data" que tiene el "initialState"
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
//Esta es la exportacion de los "actions" que se usan en el "reducer"
export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

//SELECTORS**************************************************************************
// Los selectores son los que envian de nuevo la informacion despues de que los reducer han hecho sus "Actions"
export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;


  //EXPORT SLICE**************************************************************************
  //Esta es la exportacion del "slice" con el reducer
export default navSlice.reducer;
