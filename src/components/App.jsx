import { GlobalStyle } from './GlobalStyle';

// import { nanoid } from 'nanoid';
// import { useState, useEffect } from 'react';
import { Wrapper } from './Wrapper.styled';
import { ContactAddForm } from './ContactAddForm/ContactAddForm';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';

// const CONTACTS_KEY = 'saved-contacts';

// const getStorageContacts = () => {
//   const savedContacts = JSON.parse(localStorage.getItem(CONTACTS_KEY))

//   return savedContacts.length ? savedContacts : initialContacts;
// };

export const App = () => {
  // const [contacts, setContacts] = useState(getStorageContacts);
  // const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   contacts && localStorage.setItem(CONTACTS_KEY, JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = newContact => {
  //   const hasContact = contacts.some(
  //     contact => contact.name === newContact.name
  //   );

  //   if (hasContact) {
  //     alert('A contact with that name already exists ');
  //     return;
  //   }

  //   const contact = {
  //     id: nanoid(),
  //     name: newContact.name,
  //     number: newContact.number,
  //   };

  //   setContacts(prevState => [...prevState, contact]);
  // };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactAddForm />
        <Title title="Contacts" />
        <Filter />
        <ContactList />
      </Wrapper>
    </>
  );
};
