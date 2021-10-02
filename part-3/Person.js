const Person = ({ name, age, hobbies }) => {
  let reply;
  age >= 18 ? (reply = "please go vote!") : (reply = "you must be 18");
  let displayName;
  name.length > 8 ? (displayName = name.slice(0, 6) + "...") : (displayName = name);
  return (
    <div>
      <p>Learn some information about this person.</p>
      <p>
        <b>{displayName}</b>
      </p>
      <span>{age}</span>
      <h3>{reply}</h3>
      <label name="hobbies">Hobbies</label>
      <ul id="hobbies">
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};
