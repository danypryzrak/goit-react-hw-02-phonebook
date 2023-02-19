import { Component } from "react";
import css from "./Contacts.module.css"
import PropTypes from 'prop-types';

export const ContactsList = ({ showFilteredContacts, OnClickDelete}) => {
return (
    <>
    <ul className=''>
        {showFilteredContacts.length ? (
        showFilteredContacts.map(contact => (
            <li key={contact.id} className=''>
            <p>
                <span>{contact.name}:{contact.number}</span>
            </p>
            <button
                type="button"
                onClick={() => OnClickDelete(contact.id)}
                className=''
            >
                Delete
            </button>
            </li>
        ))
        ) : (
        <p>There are no contacts here</p>
        )}
    </ul>
    </>
  );
};

ContactsList.propTypes = {
  hshowFilteredContacts: PropTypes.func.isRequired,
  OnClickDelete: PropTypes.func.isRequired,
};
