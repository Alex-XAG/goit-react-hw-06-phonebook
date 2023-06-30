import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Label, Input, BtnForm } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');

  const handleInputChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setInputName(target.value);
        break;
      case 'number':
        setInputNumber(target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    // const { name, number, contacts } = this.state;

    onSubmit(inputName, inputNumber);

    evt.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
      />
      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}
      />
      <BtnForm type="submit">Add contact</BtnForm>
    </Form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleInputChange: PropTypes.func,
};
