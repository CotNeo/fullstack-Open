/* eslint-disable react/prop-types */


const Filter = ({ filter, setFilter }) => (
  <div>
    Filter shown with: <input value={filter} onChange={(e) => setFilter(e.target.value)} />
  </div>
);
export default Filter;