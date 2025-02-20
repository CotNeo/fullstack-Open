/* eslint-disable react/prop-types */


const Persons = ({ persons, deletePerson }) => (
  <ul>
  {persons.map(person => (
  <li key={person._id}>
    {person.name} {person.number} 
    <button onClick={() => deletePerson(person._id)}>Delete</button>
  </li>
))}
  </ul>
);
export default Persons;
