import React from 'react';
import { List, ItemLi, TextItem, BtnDelete } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactSlice';

export const ContactList = ({ options }) => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ItemLi key={id}>
          <TextItem>
            {name}: {number}
          </TextItem>
          <BtnDelete type="button" onClick={() => dispatch(removeContact(id))}>
            Remove
          </BtnDelete>
        </ItemLi>
      ))}
    </List>
  );
};
