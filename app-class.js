class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done,
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>
        {this.props.todo}
      </li>
    );
  }
}

var AppClass = () => {
  var todos = ['Learn React', 'Crush Recast.ly', 'Maybe sleep'];
  return (
    <div>
      <h2>Class Component</h2>
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

ReactDOM.render(<AppClass />, document.getElementById('app-class'));
