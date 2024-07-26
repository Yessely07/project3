// src/reducers/employeeReducer.jsx
const employeeReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_EMPLOYEE':
        return [...state, action.payload];
      case 'UPDATE_EMPLOYEE':
        return state.map(emp => emp.id === action.payload.id ? action.payload : emp);
      case 'DELETE_EMPLOYEE':
        return state.filter(emp => emp.id !== action.payload);
      case 'SET_EMPLOYEES':
        return action.payload;
      default:
        return state;
    }
  };
  
  export default employeeReducer;
  