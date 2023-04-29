import {useState, useEffect} from "react";
import axios from "axios";

const todoDataUrl = "http://localhost:3100/todos";

function App() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(todoDataUrl);
      setTodoList(response.data);
    }
    fetchData();
  }, []);

  console.log("TODOリスト:", todoList);

  const inCompletedList = todoList.filter((todo) => {
    return !todo.done;
  });

  console.log("未完了リスト:", inCompletedList);

  const completedList = todoList.filter((todo) => {
    return todo.done;
  });

  console.log("完了リスト:", completedList);

  return (
    <>
      <TodoTitle title="TODO進捗管理" as="h1" />
      <textarea />
      <button>+ TODOを追加</button>
      <TodoList todoList={inCompletedList} title="未完了TODOリスト" />
      <TodoList todoList={completedList} title="完了TODOリスト" />
    </>
  );
}

const TodoList = ({todoList, title}) => {
  return (
    <>
      <TodoTitle title={title} as="h2" />
      <ul>
        {todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </>
  );
};

const TodoTitle = ({title, as}) => {

  if (as === "h1") return <h1>{title}</h1>;

  if (as === "h2") return <h2>{title}</h2>;

  return <p>{title}</p>;
};

const TodoItem = ({todo}) => {
  return (
    <li key={todo.id}>
      {todo.content}
      <button>
        {todo.done ? "未完了リストへ" : "完了リストへ"}
      </button>
      <button>削除</button>
    </li>
  );
};

export default App;
