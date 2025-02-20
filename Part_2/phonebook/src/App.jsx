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
    personService.getAll()
      .then(initialPersons => {
        if (Array.isArray(initialPersons)) {
          setPersons(initialPersons);
        } else {
          setPersons([]);
        }
      })
      .catch(() => {
        console.error('❌ Kişileri çekerken hata oluştu');
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
          showNotification(`✅ ${newName} başarıyla güncellendi!`);
        })
        .catch((error) => {
          if (error.response) {
            showNotification(`❌ ${error.response.data.error}`, 'error');
          } else {
            showNotification(`❌ ${newName} güncellenirken hata oluştu`, 'error');
          }
        });
    } else {
      const newPerson = { name: newName, number: newNumber };

      personService.create(newPerson)
  .then((returnedPerson) => {
    setPersons([...persons, returnedPerson]);
    showNotification(`✅ ${newName} başarıyla eklendi!`);
  })
  .catch((error) => {
    if (error.response && error.response.data.error) {
      showNotification(`❌ ${error.response.data.error} Lütfen telefon numarasını 'XX-XXXXXXX' veya 'XXX-XXXXXXXX' formatında girin.`, 'error');
    } else {
      showNotification(`❌ ${newName} Lütfen telefon numarasını 'XX-XXXXXXX' veya 'XXX-XXXXXXXX' formatında girin.`, 'error');
    }
  });

    }

    setNewName('');
    setNewNumber('');
  };

  const deletePerson = (id) => {
    console.log("Silmek istenen ID:", id);
    console.log("Mevcut kişiler:", persons);
  
    // 🛠 `_id` ile eşleşmeyi sağla!
    const person = persons.find((p) => p._id === id || p.id === id);
  
    if (!person) {
      console.error("❌ HATA: Silinmek istenen kişi bulunamadı! Mevcut kişiler:", persons);
      return;
    }
  
    if (window.confirm(`❗ ${person.name} silinecek. Emin misiniz?`)) {
      personService.remove(person._id) // ✅ Backend `_id` bekliyor
        .then(() => {
          setPersons(persons.filter((p) => p._id !== person._id));
          showNotification(`🗑️ ${person.name} başarıyla silindi.`);
        })
        .catch((error) => {
          if (error.response && error.response.data.error) {
            showNotification(`❌ ${error.response.data.error}`, 'error');
          } else {
            showNotification(`❌ ${person.name} zaten silinmiş olabilir.`, 'error');
            setPersons(persons.filter((p) => p._id !== person._id));
          }
        });
    }
  };
  
  

  const filteredPersons = Array.isArray(persons)
    ? persons.filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
    : [];

  return (
    <div>
      <h2>📞 Phonebook</h2>
      <Notification message={notification.message} type={notification.type} />
      <Filter filter={filter} setFilter={setFilter} />
      <h3>📝 Person Add</h3>
      <PersonForm 
        addPerson={addPerson} 
        newName={newName} 
        setNewName={setNewName} 
        newNumber={newNumber} 
        setNewNumber={setNewNumber} 
      />
      <h3>📋 Persons</h3>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
