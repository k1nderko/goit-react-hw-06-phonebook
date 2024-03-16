import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { ContactForm } from './ContactForm';

export const App = () => {
  return (
    <div className="App">
      <h1>Phonebook</h1>

      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
