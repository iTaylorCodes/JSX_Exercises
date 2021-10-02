const App = () => (
  <div>
    <Tweet username="iTaylorCodes" name="Ian" date="10/2/2021" message="This is my first Tweet!" />
    <Tweet username="iTaylorCodes" name="Ian" date="10/2/2021" message="My second Tweet!" />
    <Tweet username="not-iTaylorCodes" name="not-ian" date="10/2/2021" message="I'm a different user." />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
