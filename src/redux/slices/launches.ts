import { createSlice } from '@reduxjs/toolkit';

export interface ILounchesInitStore {
  lounchData: any;
  lounchDetail: any;
  lounchId: string;
}

const initialState: ILounchesInitStore = {
  lounchData: {},
  lounchDetail: {},
  lounchId: ""
};

export const launchesSlice = createSlice({
  name: 'launches',
  initialState,
  reducers: {
    setLounchData: (state, action) => {
      state.lounchData = action.payload;
    },
    setLounchId: (state, action) => {
      state.lounchId = action.payload;
    },
    setLounchDatail: (state, action) => {
      state.lounchDetail = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLounchData, setLounchId,setLounchDatail } = launchesSlice.actions;

export default launchesSlice.reducer;
