function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
      isCompleted: false,
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

  const addTodo = (text) => {
    //text is the parameter it takes and is from form
    const newTodos = [...todos, { text: text, isCompleted: false }];
    setTodos(newTodos);
  };
  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <>
      {todos.map((todo, i) => (
        <Todo index={i} key={i} todo={todo} remove={removeTodo} />
      ))}
      <TodoForm addTodo={addTodo} />
      {/* adds todo form and attribute for todo function*/}
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
