import React from 'react';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';
import Container from './components/Container/Container';
import './App.css';

function App() {
  return (
    <Container>
      <h1 className="phonebook">Phonebook</h1>
      <ContactForm />

      <h2 className="contacts">Contacts</h2>
      <Filter />

      <ContactList />
    </Container>
  );
}

export default App;

// function useLocalStorage(key, defaultValue) {
//   const [state, setState] = useState(() => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
//   });

//   useEffect(() => {
//     window.localStorage.setItem(key, JSON.stringify(state));
//   }, [key, state]);

//   return [state, setState];
// }

// const [contacts, setContacts] = useLocalStorage('contacts', [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ]);

// const [filter, setFilter] = useState('');

// const addContact = (name, number) => {
//   const item = {
//     id: shortid.generate(),
//     name,
//     number,
//   };

//   const includeName = contacts.reduce(
//     (acc, contact) => [...acc, contact.name],
//     [],
//   );
//   const includeNumber = contacts.reduce(
//     (acc, contact) => [...acc, contact.number],
//     [],
//   );

//   if (name === '' || number === '') {
//     alert('Please enter all fields!');
//     return;
//   }

//   if (includeName.includes(name)) {
//     alert(`${name} is already in contacts`);
//     return;
//   } else if (includeNumber.includes(number)) {
//     alert(`${number} is already in contacts`);
//   } else {
//     setContacts(contacts => [item, ...contacts]);
//   }
// };
