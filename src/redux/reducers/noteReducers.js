// import { act } from 'react-dom/test-utils';
// import { ADD_NOTE, DELETE_NOTE } from '../actions/noteAction';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  notes: [
    { text: 'vishal pal', createdOn: new Date() },
    { text: 'vishal pal', createdOn: new Date() },
  ],
};
// Reducer using Redux Toolkit
const noteSlice = createSlice({
  name: 'note',
  initialState: initialState,
  reducers: {
    // this is add action
    add: (state, action) => {
      state.notes.push({
        text: action.payload,
        createdOn: new Date(),
      });
    },
    delete: (state, action) => {
      state.notes.splice(action.payload, 1);
    },
  },
});

export const noteReducer = noteSlice.reducer;
export const actions = noteSlice.actions;
// Reducer using Redux
// export function noteReducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_NOTE:
//       return {
//         ...state,
//         notes: [
//           ...state.notes,
//           {
//             text: action.text,
//             createdOn: new Date(),
//           },
//         ],
//       };
//     case DELETE_NOTE:
//       state.notes.splice(action.index, 1);
//       return {
//         ...state,
//         notes: [...state.notes],
//       };
//     default:
//       return state;
//   }
// }
