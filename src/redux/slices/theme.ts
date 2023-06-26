import { createSlice } from '@reduxjs/toolkit';

export interface IThemeSlice {
  isDark: boolean;
}

const initialState: IThemeSlice = {
  isDark: false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.isDark = !state.isDark;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
