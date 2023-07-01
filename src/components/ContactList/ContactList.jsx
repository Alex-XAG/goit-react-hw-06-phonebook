import React from 'react';
import PropTypes from 'prop-types';
import { List, ItemLi, TextItem, BtnDelete } from './ContactList.styled';
import { useDispatch } from 'react-redux';
import { removeContact } from 'redux/contactSlice';

export const ContactList = ({ options }) => {
  const dispatch = useDispatch();

  return (
    <List>
      {options.map(({ id, name, number }) => (
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

ContactList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
