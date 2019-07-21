import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Bob",
        email: "Bob@bob.com",
        phone: "222-222-2222",
        type: "personal"
      },
      {
        id: 2,
        name: "Sal",
        email: "Sal@sal.com",
        phone: "223-222-2222",
        type: "personal"
      },
      {
        id: 3,
        name: "Cameron",
        email: "Cameron@Cameron.com",
        phone: "224-222-2222",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //add contact

  //delete contact

  //set current contact

  //clear current contact

  //update contact

  //filter contacts

  //clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
