import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import "./Todo.css";
import { TodoList } from "./TodoList";
import { useAuth } from "../../contexts/AuthContext";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const { entryCheck, currentUser } = useAuth();
  console.log(currentUser);

  useEffect(() => {
    entryCheck();

    return () => unsubscribe();
  });

  useEffect(() => {}, []);
  async function addTodo(data) {
    await setDoc(
      doc(
        database,
        `todos/${currentUser.email}/userTodo/${crypto.randomUUID()}`
      ),
      {
        title: data,
        completed: false,
      }
    );
  }

  async function toggleTodo(id, completed) {
    await updateDoc(doc(database, "todos", currentUser.email, "userTodo", id), {
      completed: !completed,
    });
  }

  async function deleteTodo(id) {
    await deleteDoc(doc(database, "todos", currentUser.email, "userTodo", id));
  }

  return (
    <div className="total-todo-container">
      <div className="Todo-Container">
        <NewTodoForm onSubmit={addTodo} />
        <h1 className="header text-6xl pt-[70px]">Todo List</h1>
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}
