const Tweet = ({ username, name, date, message }) => (
  <div>
    <h3>{username}</h3>
    <p>{name}</p>
    <small>{date}</small>
    <p>{message}</p>
  </div>
);
