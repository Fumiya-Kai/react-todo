import React, { useRef } from "react";
import { useTodo } from "./hooks/useTodo";

function App() {
  const {
    todoList,
    addTodoListItem,
  } = useTodo();

  const inputEl = useRef(null);

  const handleAddTodoListItem = () => {
    if (inputEl.current.value === "") return;
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };

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
      <TodoAdd inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
      <TodoList todoList={inCompletedList} title="未完了TODOリスト" />
      <TodoList todoList={completedList} title="完了TODOリスト" />
    </>
  );
}

const TodoAdd = ({ inputEl, handleAddTodoListItem }) => {
  return (
    <>
      <textarea ref={inputEl} />
      <button onClick={handleAddTodoListItem}>+ TODOを追加</button>
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
