import { useState, useEffect } from 'react';
import 'bulma/css/bulma.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Contacts from './components/Contacts';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

function App() {
  const [contacts, setContacts] = useState(
    localStorage.getItem('contacts') === null ? [] : JSON.parse(localStorage.getItem('contacts'))
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('contacts'));
    if(items){
      setContacts(items);
    }
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={ <Contacts contacts={contacts} setContacts={setContacts} />}/>
        <Route path="/add-contact" element={ <AddContact contacts={contacts} setContacts={setContacts}/>}/>
        <Route path="/edit-contact/:id" element={ <EditContact contacts={contacts} setContacts={setContacts}/>}/>
      </Routes>
    </Router>
  )
}

export default App;
