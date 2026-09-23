import React, { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addContact = () => {
    if (name && number) {
      setContacts([...contacts, { name, number }]);
      setName('');
      setNumber('');
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.number.includes(searchTerm)
  );

  return (
    <div>
      <h1>Contact Book</h1>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={addContact}>Add Contact</button>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search by name or number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {filteredContacts.map((contact, index) => (
          <li key={index}>
            {contact.name} - {contact.number}
          </li>
        ))}
      </ul>
      </div>
  );
};

export default App;