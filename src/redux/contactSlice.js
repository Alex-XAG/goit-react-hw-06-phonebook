import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  },
  reducers: {
    addContact(state, action) {
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    },
    removeContact(state, action) {
      return {
        ...state,
        contacts: state.contacts.filter(
          product => product.id !== action.payload
        ),
      };
    },
    // handleSearchChange(state, action) {
    //   return state.filter(contact =>
    //     contact.name.toLowerCase().includes(action.payload.toLowerCase())
    //   );
    // },
  },
});

export const { addContact, removeContact, handleSearchChange } =
  contactSlice.actions;
