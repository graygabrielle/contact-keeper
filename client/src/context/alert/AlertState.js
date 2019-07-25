import React, { useReducer } from "react";
import uuid from "uuid";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = props => {
  const initialState = {
    alerts: []
  };

  //set alert
  const setAlert = (msg, type) => {
    const id = uuid.v4();
    dispatch({
      type: SET_ALERT,
      payload: { msg, type, id }
    });
  };

  //remove alert
  const removeAlert = () => {
    dispatch({
      type: REMOVE_ALERT
    });
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  return (
    <AlertContext.Provider
      value={{
        alerts: state.alerts,
        setAlert,
        removeAlert
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
