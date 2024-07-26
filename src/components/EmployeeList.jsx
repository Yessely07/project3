// src/components/EmployeeList.jsx
import React, { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';
import './EmployeeList.css';

const EmployeeList = ({ setSelectedEmployee }) => {
  const { employees, dispatch } = useContext(EmployeeContext);

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_EMPLOYEE', payload: id });
  };

  return (
    <div className="employee-list">
      <button className="add-button" onClick={() => setSelectedEmployee(null)}>Add Employee</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Dato1</th>
            <th>Dato2</th>
            <th>Editar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.address}</td>
              <td>{employee.city}</td>
              <td><button onClick={() => setSelectedEmployee(employee)}>✏️</button></td>
              <td><button onClick={() => handleDelete(employee.id)}>🗑️</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;

