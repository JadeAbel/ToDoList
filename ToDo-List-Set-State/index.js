function App() {
  //component in which initial state is created
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false, //initiatlized as false
    },
    {
      text: "meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "build todo app",
      isCompleted: false,
    },
  ]);

  return (
    //return loops through todos and creates div tag
    //key of div is index value and text that is set to that text
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i}>
          {todo.text}
        </div>
      ))}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
