import { useState, useEffect } from 'react';

import { STORAGE_KEY } from '../constants/common';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const filterContacts = (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const addNewContact = newContact => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return false;
    }
    const updatedContacts = [...contacts, newContact];
    setContacts(updatedContacts);
    return true;
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>

      <ContactForm onSubmit={addNewContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        list={filterContacts(filter, contacts)}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};
