const App = () => (
  <div>
    <Person name="Ian" age={18} hobbies={["jumping rope", "swimming", "painting", "playing video games"]} />
    <hr />
    <Person name="Leah LongName" age={16} hobbies={["baking", "running", "archery"]} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
