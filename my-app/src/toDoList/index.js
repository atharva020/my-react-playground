import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>Simple Todo App</h1>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
          style={styles.input}
        />
        <button onClick={handleAddTask} style={styles.addButton}>
          Add
        </button>
      </div>
      <ul style={styles.taskList}>
        {tasks.map((t, index) => (
          <li key={index} style={styles.taskItem}>
            {t}
            <button
              onClick={() => handleDeleteTask(index)}
              style={styles.deleteButton}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    margin: "20px",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "200px",
    marginRight: "10px",
  },
  addButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  taskList: {
    listStyle: "none",
    padding: "0",
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: "10px",
    margin: "10px auto",
    width: "300px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Todo;
