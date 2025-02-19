import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import personService from './services/persons';
import './styles.css';


const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [notification, setNotification] = useState({ message: null, type: '' });

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      if (Array.isArray(initialPersons)) {
        setPersons(initialPersons);
      } else {
        setPersons([]);
      }
    }).catch(() => {
      console.error('Error fetching persons');
      setPersons([]);
    });
  }, []);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: null, type: '' }), 5000);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = persons.find((p) => p.name === newName);
    if (existingPerson) {
      const updatedPerson = { ...existingPerson, number: newNumber };
      personService.update(existingPerson.id, updatedPerson)
        .then((returnedPerson) => {
          setPersons(persons.map((p) => (p.id !== existingPerson.id ? p : returnedPerson)));
          showNotification(`Updated ${newName}`);
        })
        .catch((error) => {
          if (error.response && error.response.status === 404) {
            showNotification(`Error: ${newName} was already removed from the server`, 'error');
            setPersons(persons.filter((p) => p.id !== existingPerson.id));
          } else {
            showNotification(`Error updating ${newName}`, 'error');
          }
        });
    } else {
      const newPerson = { name: newName, number: newNumber };
      personService.create(newPerson)
        .then((returnedPerson) => {
          setPersons([...persons, returnedPerson]);
          showNotification(`Added ${newName}`);
        })
        .catch(() => {
          showNotification(`Error adding ${newName}`, 'error');
        });
    }
    setNewName('');
    setNewNumber('');
  };

  const deletePerson = (id) => {
    const person = persons.find((p) => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.remove(id)
        .then(() => {
          setPersons(persons.filter((p) => p.id !== id));
          showNotification(`Deleted ${person.name}`);
        })
        .catch(() => {
          showNotification(`Error: ${person.name} was already removed from the server`, 'error');
          setPersons(persons.filter((p) => p.id !== id));
        });
    }
  };

  const filteredPersons = Array.isArray(persons) ? persons.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase())) : [];

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification.message} type={notification.type} />
      <Filter filter={filter} setFilter={setFilter} />
      <h3>Add a new</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber} 
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
