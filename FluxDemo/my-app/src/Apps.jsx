import { connect } from 'react-redux';
import './App.css';
import { Component } from 'react';
import { addTodo, ADD_TODO } from './actions/actions';
//import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class Apps extends Component {
  render() {
    const { dispatch, visibleTodos } = this.props;
    return (
      <div>
        <ADD_TODO onAddClick={text => dispatch(addTodo(text))} />
        <TodoList todos={visibleTodos} />
      </div>
    )
  }
}

function select(state) {
  return {
    visibleTodos: state.todos
  }
}

export default connect(select)(Apps);
