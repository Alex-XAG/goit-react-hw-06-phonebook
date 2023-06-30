import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, handleSearchChange } from 'redux/contactSlice';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  // const [contacts, setContacts] = useState(
  //   JSON.parse(window.localStorage.getItem('contacts')) ?? [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ]
  // );
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const onSubmit = (inputName, inputNumber) => {
    if (contacts.find(contact => contact.name === inputName)) {
      alert(`${inputName} is already in your phonebook`);
    } else if (contacts.find(contact => contact.number === inputNumber)) {
      alert('This number exist in your phonebook');
    } else {
      dispatch(
        addContact(createContact({ name: inputName, number: inputNumber }))
      );
    }
  };

  const createContact = data => {
    const newContact = {
      ...data,
      id: nanoid(),
    };
    return newContact;
  };

  const handleSearchChange = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onSubmit} />

      <h2>Contacts</h2>
      <Filter option={filter} />
      <ContactList options={handleSearchChange()} />
    </div>
  );
};
