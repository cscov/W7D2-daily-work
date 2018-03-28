import React from 'react';
import {TodoListItem} from './todo_list_item';
import TodoForm from '../todo_list/todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);


  }

  render() {
    let todos = this.props.todos;
    return (
      <div>
        <ul>
          {todos.map( (todo) => <TodoListItem key={todo.id} todo={todo}/>)}
        </ul>

        <TodoForm receiveTodo={this.props.receiveTodo}/>

    </div>
    );
  }
}


export default TodoList;


// module.exports = ({todos}) => (
//   <ul>
//     {todos.map( (todo) => <li key={todo.id}>{todo.title}</li>)}
//   </ul>);
