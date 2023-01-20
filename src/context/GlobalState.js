import React, { createContext, useReducer } from "react";

import appReducer from "./AppReducer";

const initialState = {
  employees: [],
  mail: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  console.log(state)

  function addEmployee(employee) {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: employee
    });
  }

  function addMail(mail) {
    dispatch({
      type: "ADD_MAIL",
      payload: mail
    });
  }

  function removeEmployee(id) {
    dispatch({
      type: "REMOVE_EMPLOYEE",
      payload: id
    });
  }

  function editEmployee(employee) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: employee
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        employees: state.employees,
        mail: state.mail,
        addEmployee,
        editEmployee,
        removeEmployee,

        addMail
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
