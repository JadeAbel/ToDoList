function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Give up",
      isCompleted: false,
    },
    {
      text: "Think that hard work doesn't pay off",
      isCompleted: false,
    },
    {
      text: "Forget to be grateful",
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
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo index={i} key={i} todo={todo} remove={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
        {/* adds todo form and attribute for todo function*/}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
