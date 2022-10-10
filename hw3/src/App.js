import './App.css';
import './styles.css';
import './main.js';

function App() {
  return (
    <div id="root" className="todo-app__root">
      <header className="todo-app__header">
        <div className="todo-app__title">todos</div>
      </header>
      <section className="todo-app__main">
        <input className="todo-app__input">

        </input>
        <ul className="todo-app__list" id="todo-list" style={{display: 'none'}}></ul>
      </section>
      <footer className="todo-app__footer" id="todo-footer" style={{display: 'none'}}>
        <div className="todo-app__total">
          0 left
        </div>
        <ul className="todo-app__view-buttons">
          <button style={{backgroundColor: 'blue', color: 'white'}}>All</button>
          <button>Active</button>
          <button>Completed</button>
        </ul>
        <div className="todo-app__clean">
          <button>Clear Completed</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
