/* eslint-disable react/prop-types */



const PersonForm = ({ addPerson, newName, setNewName, newNumber, setNewNumber }) => (
  <form onSubmit={addPerson}>
    <div>
      Name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
    </div>
    <div>
      Number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
    </div>
    <button type="submit">Add / Update</button>
  </form>
);
export default PersonForm;