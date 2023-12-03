// // reducers.js
// const initialState = {
//     history: [],
//   };
  
//   const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'ADD_TO_HISTORY':
//         return {
//           ...state,
//           history: [...state.history, action.payload],
//         };
//       default:
//         return state;
//     }
//   };
  
//   export default rootReducer;
  

// src/redux/actions.js
export const addToHistory = (word) => ({
  type: 'ADD_TO_HISTORY',
  payload: word,
});

// src/redux/reducers.js
const initialState = {
  history: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_HISTORY':
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    default:
      return state;
  }
};

export default rootReducer;
