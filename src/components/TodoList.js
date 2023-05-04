import { TodoTitle } from "./TodoTitle";
import { TodoItem } from "./TodoItem";

export const TodoList = ({todoList, title, toggleTodoListItemStatus, deleteTodoListItem}) => {
  return (
    <>
      <TodoTitle title={title} as="h2" />
      <ul>
        {todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.id} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
        ))}
      </ul>
    </>
  );
};