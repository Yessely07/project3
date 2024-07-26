// src/context/EmployeeContext.jsx
import React, { createContext, useReducer, useEffect } from 'react';
import employeeReducer from '../reducers/employeeReducer';

const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, dispatch] = useReducer(employeeReducer, [], () => {
    const localData = localStorage.getItem('employees');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  return (
    <EmployeeContext.Provider value={{ employees, dispatch }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export { EmployeeContext, EmployeeProvider };
