var TodoListItem = (props) => {
  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return <li onClick={onListItemClick}>{props.todo}</li>;
};

var AppHooks = () => {
  var todos = ['Learn React', 'Crush Recast.ly', 'Maybe sleep'];
  return (
    <div>
      <h2>Function Component With Hooks</h2>
      <ul>
        <ul>
          {todos.map((todoitem) => (
            <TodoListItem todo={todoitem} />
          ))}
        </ul>
      </ul>
    </div>
  );
};

ReactDOM.render(<AppHooks />, document.getElementById('app-hooks'));
