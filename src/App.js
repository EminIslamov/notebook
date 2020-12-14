import  {useState} from "react";

function App() {

 const [todos, setTodos] = useState([
     {
         text: "Купить бананы",
         favorite: true,
     },
     {
         text: "Продать квартиру",
         favorite: true,
     },
     {
         text: "Выучить уроки по JS",
         favorite: false,
     }
 ]);

    const deleteTodo = (indexOfRemovingItem) => {
        const filtered = todos.filter((todo, index)  => {
            if (index === indexOfRemovingItem) {
                return false;
            }
            return true;
        });
        setTodos(filtered);
    }


 const newTodos = todos.map((todo, index) => {

      return(
          <div className={`todo ${todo.favorite ? 'selected' : ''}`}>
              <div className="favorite">
                  <span>*</span>
              </div>
              <div className="todo-text">
                  {todo.text}
              </div>
              <div className="actions">
                  <button onClick={() => deleteTodo(index)}>X</button>
              </div>
          </div>
      )
      });

    return (
    <div className="app">
      <div className="header">
        Список дел
      </div>
      <div className="form">
          <input placeholder="Введите текст . ." type="text" />
          <button>
              добавить
          </button>
      </div>
      <div className="todos">
          {newTodos}
      </div>
    </div>

  );
}

export default App;
