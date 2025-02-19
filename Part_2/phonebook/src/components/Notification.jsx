/* eslint-disable react/prop-types */

const Notification = ({ message, type }) => {
  if (!message) return null;

  const notificationStyle = {
    backgroundColor: 'lightgrey',
    fontSize: '18px',
    padding: '10px',
    borderRadius: '5px',
    marginBottom: '15px',
    textAlign: 'center',
    border: '1px solid',
    color: type === 'error' ? 'red' : 'green',
    borderColor: type === 'error' ? 'red' : 'green',
  };

  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;