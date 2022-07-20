import SayHello from "./components/SayHello";
// import Counter from "./components/Counter";
// import UseEffectExample from "./components/UseEfectExample";

function App() {
  const user = {
    firstName: "Haikal",
    lastName: "Lazuardi",
  };

  return (
    <div className="App">
      <h1>Dikdiv</h1>
      <SayHello firstName={user.firstName} lastName={user.lastName} />
      {/* <Counter /> */}
      {/* <UseEffectExample /> */}
    </div>
  );
}

export default App;
