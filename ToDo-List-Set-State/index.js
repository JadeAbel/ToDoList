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
  const [value, setValue] = React.useState(""); //manage variable, i.e., in state, initatlized as empty string
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return; //check for existing value
    const newTodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newTodos); //from current state to new state
    setValue(""); //clear form
  };
  const removeTodo = (e) => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return (
    //return loops through todos and creates div tag
    //key of div is index value and text that is set to that text
    //write our form with input element where user can input that value
    //when form is submitted, we handle with 'handleSubmit' (see funciton above)
    //inside of handleSubmit, we prevent the default which is to reload the page
    //we have a placeholder "Add Todo" within the onSubmit form
    //handleSubmit function
    //added onClick to div and added removeTodo function to remove item on click
    <>
      {todos.map((todo, i) => (
        <div className="todo" key={i} id={i} onClick={removeTodo}>
          {todo.text}
        </div>
      ))}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input"
          value={value}
          placeholder="Add Todo..."
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
