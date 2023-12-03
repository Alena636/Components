import { createSlice } from '@reduxjs/toolkit';
import { FormData } from '../../types/index';

interface State {
  formTiles: FormData[];
  newFormAdded: boolean;
}

const initialState: State = {
  formTiles: [],
  newFormAdded: false,
};

export const FormSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setForm(state, action) {
      state.newFormAdded = true;
      const { name, age, email, password, gender, image, country } =
        action.payload;
      state.formTiles.unshift({
        name,
        age,
        email,
        password,
        gender,
        image,
        country,
      });
    },
    setNewFormAdded(state, action) {
      state.newFormAdded = action.payload;
    },
  },
});

export const { setForm, setNewFormAdded } = FormSlice.actions;
export default FormSlice.reducer;
