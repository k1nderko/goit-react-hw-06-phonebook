import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { addContact } from '../../redux/contacts/contactsSlice';
import { getContacts } from '../../redux/contacts/selectors';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setState(INITIAL_STATE);
  };

  const onSubmit = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return false;
    }
    dispatch(addContact(newContact));
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (state.name === '' || state.number === '') {
      alert('Some fields are empty');
      return;
    }

    const check = onSubmit({ ...state, id: nanoid() });
    if (!check) return;

    resetForm();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="number">Number</label>
        <input
          type="tel"
          name="number"
          id="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={state.number}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
};