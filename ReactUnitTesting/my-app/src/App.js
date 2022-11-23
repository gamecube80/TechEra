// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  const todos = [
    { id: 1, title: "Write Java Code", completed: true },
    { id: 2, title: "Test Java Code", completed: false }
  ];

  return (
    <div className="App">
      {todos.map((todo) => {
        return (<Todo todo={todo} />)
      })
      }
    </div>
  );
}

export default App;
