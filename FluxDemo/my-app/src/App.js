import {connect} from 'react-redux';
import './App.css';
import { Component } from 'react';
import { addTodo, ADD_TODO } from './actions/actions';
//import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render(){
    const{ dispatch, visibleTodos} = this.props;
    return(
      <div>
        <ADD_TODO onAddClick={text=>dispatch(addTodo(text))}/>
        <TodoList todos ={visibleTodos}/>
      </div>
    )
  }
}

function select(state){
  return{
    visibleTodos:state.todos
  }
}

export default connect(select)(App);
