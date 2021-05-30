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
  const [value, setValue] = React.useState(" "); //manage variable, i.e., in state, initatlized as empty string
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const newTodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newTodos);
    setValue("");
  };
  return (
    //return loops through todos and creates div tag
    //key of div is index value and text that is set to that text
    //write our form with input element where user can input that value
    //when form is submitted, we handle with 'handleSubmit' (see funciton above)
    //inside of handleSubmit, we prevent the default which is to reload the page
    //we have a placeholder "Add Todo" within the onSubmit form
    //handleSubmit function
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i}>
          {todo.text}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input>
          type="text" className="input" value={value} placeholder="Add Todo..."
          onChange={(e) => setValue(e.target.value)}
        </input>
      </form>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
