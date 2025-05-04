import { useState, useMemo } from 'react';
import { useDebounce } from 'use-debounce';
import './App.css'
import ContactList from './ContactList/ContactList'
import SearchBox from './SearchBox/SearchBox'
import Feedback from './Contact/Contact'
import Notification from './SearchBox/SearchBox'

export default function App() {
  const [contacts, setContacts] = useState([
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ])
  
  const [searchInput, setSearchInput] = useState('')
  const [debounceInputValue] = useDebounce(searchInput, 1000);

  const searchContacts = useMemo(() => {
    return contacts.filter((contact) => contact.name.toLowerCase().includes(debounceInputValue.toLowerCase()));
  }, [debounceInputValue, contacts])

  return (
    <>
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
        <SearchBox value={searchInput} onChange={setSearchInput} />
        <ContactList contacts={searchContacts} />
    </div>
    </>
  );
};