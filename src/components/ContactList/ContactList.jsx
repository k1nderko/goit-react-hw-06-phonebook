import React from 'react';
import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem';
import { getContacts, getFilter } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filterContacts.map(item => (
        <ContactItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
