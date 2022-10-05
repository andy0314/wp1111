import './App.css';
import './styles.css'

function App() {
  return (
    <div id="root" className="todo-app__root">
      <header className="todo-app__header">
        <div className="todo-app__title">todos</div>
      </header>
      <section className="todo-app__main">
        <input className="todo-app__input"></input>
      </section>
    </div>
  );
}

export default App;
