import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  age: 0,
  email: '',
  password: '',
  gender: '',
  accept: false,
  image: '',
  country: '',
};

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForm(state, action) {
      console.log(state, action);
    },
  },
});

export const { setForm } = FormSlice.actions;
export default FormSlice.reducer;
