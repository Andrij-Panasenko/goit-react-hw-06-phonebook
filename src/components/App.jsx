import { GlobalStyle } from './GlobalStyle';

// import { nanoid } from 'nanoid';
// import { useState, useEffect } from 'react';
import { Wrapper } from './Wrapper.styled';
import { ContactAddForm } from './ContactAddForm/ContactAddForm';
import { ContactList } from './ContactList/ContactList';
import { Title } from './Title/Title';
import { Filter } from './Filter/Filter';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

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

  // const deleteContact = contactId => {
  //   setContacts(prevItems => prevItems.filter(item => item.id !== contactId));
  // };

  // const updateContactFilter = query => {
  //   setFilter(query);
  // };

  // const filteredContacts = contacts.filter(item => {
  //   const hasContact = item.name.toLowerCase().includes(filter.toLowerCase());

  //   return hasContact;
  // });

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>Phonebook</h1>
        <ContactAddForm
        // addContact={addContact} deleteContact={deleteContact}
        />
        <Title title="Contacts" />
        <Filter
        // onContactFilter={updateContactFilter} filter={filter}
        />
        <ContactList />
      </Wrapper>
    </>
  );
};
