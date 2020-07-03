const { useState, useEffect } = React;

var TodoListItem = (props) => {
  const [done, setDone] = useState(false);
  var onListItemClick = (event) => {
    setDone(!done);
  };

  useEffect(() => {
    window.document.title = done
      ? `You clickd on ${props.todo}`
      : 'React-Hooks-Demo';
  });

  var style = {
    textDecoration: done ? 'line-through' : 'none',
  };

  return (
    <li style={style} onClick={onListItemClick}>
      {props.todo}
    </li>
  );
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
