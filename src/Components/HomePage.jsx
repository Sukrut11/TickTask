import React, { useState, useEffect } from "react";

export default function HomePage(props) {
  const [taskInput, setTaskInput] = useState({
    title: "",
    description: "",
  });

  // Load saved tasks from localStorage on mount
  const [taskArray, updateTaskArray] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [completedTaskArray, updateCompletedTaskArray] = useState(() => {
    const savedCompletedTasks = localStorage.getItem("completedTasks");
    return savedCompletedTasks ? JSON.parse(savedCompletedTasks) : [];
  });

  // Save tasks to localStorage when taskArray or completedTaskArray changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  }, [taskArray]);

  useEffect(() => {
    localStorage.setItem("completedTasks", JSON.stringify(completedTaskArray));
  }, [completedTaskArray]);

  // Function to update title
  const toDoAppTitleUpdate = (event) => {
    setTaskInput((prev) => ({ ...prev, title: event.target.value }));
  };

  // Function to update description
  const toDoAppDescriptionUpdate = (event) => {
    setTaskInput((prev) => ({ ...prev, description: event.target.value }));
  };

  // Function to add a task
  const submitTaskToArray = () => {
    if (!taskInput.title.trim() || !taskInput.description.trim()) {
      props.showAlert("danger", "Title and Description should not be empty.");
      return;
    }

    updateTaskArray((prev) => {
      const newTasks = [...prev, taskInput];
      localStorage.setItem("tasks", JSON.stringify(newTasks)); // Save instantly
      return newTasks;
    });

    handleOnClear();
    props.showAlert("success", "Task has been created.");
  };

  // Move task to completed
  const moveTaskToCompletedArray = (index) => {
    const completedTask = taskArray[index];

    updateCompletedTaskArray((prev) => {
      const newCompletedTasks = [...prev, completedTask];
      localStorage.setItem("completedTasks", JSON.stringify(newCompletedTasks));
      return newCompletedTasks;
    });

    updateTaskArray((prev) => {
      const newTasks = prev.filter((_, i) => i !== index);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });

    props.showAlert("success", "Your pending task has been completed.");
  };

  // Clear a single pending task
  const clearPendingTask = (index) => {
    updateTaskArray((prev) => {
      const newTasks = prev.filter((_, i) => i !== index);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
    props.showAlert("success", "Your pending task has been cleared.");
  };

  // Clear a single completed task
  const clearCompletedTask = (index) => {
    updateCompletedTaskArray((prev) => {
      const newCompletedTasks = prev.filter((_, i) => i !== index);
      localStorage.setItem("completedTasks", JSON.stringify(newCompletedTasks));
      return newCompletedTasks;
    });
    props.showAlert("success", "Your completed task has been cleared.");
  };

  // Function to clear input fields
  const handleOnClear = () => {
    setTaskInput({ title: "", description: "" });
    props.showAlert("success", "Task has been cleared.");
  };

  // Function to clear all tasks
  const clearAllTasks = () => {
    updateTaskArray([]);
    updateCompletedTaskArray([]);
    localStorage.removeItem("tasks");
    localStorage.removeItem("completedTasks");
    props.showAlert("success", "All of your tasks have been cleared.");
  };

  return (
    <div className="container my-3">
      <h2 className="heading mt-4">TickTask. Where Productivity Meets Simplicity.</h2>
      <form>
        <div className="form-group">
          <label className="title mt-3 mb-2">Title</label>
          <input
            type="text"
            onChange={toDoAppTitleUpdate}
            className="form-control"
            placeholder="Enter title of your task"
            value={taskInput.title}
          />
        </div>
        <div className="form-group">
          <label className="description mt-3 mb-2">Description</label>
          <input
            type="text"
            onChange={toDoAppDescriptionUpdate}
            className="form-control mb-3"
            placeholder="Enter description of your task"
            value={taskInput.description}
          />
        </div>
        <button type="button" onClick={submitTaskToArray} className="btn btn-success my-3">
          Submit
        </button>
        <button type="button" onClick={handleOnClear} className="btn btn-warning my-3 mx-3" style = {{color: "#000000"}}>
          Clear Text
        </button>
        <button type="button" className="btn btn-danger" onClick={clearAllTasks}>
          Clear All Tasks
        </button>
      </form>

      {taskArray.length > 0 && <h3 className="my-3" style={{ fontSize: "1.5rem" }}>Pending tasks:</h3>}
      <ol>
        {taskArray.map((task, index) => (
          <li style={{ fontSize: "1.1rem" }} key={index}>
            <strong>Title :</strong> {task.title}<br />
            <strong>Description :</strong> {task.description} <br />
            <button className="btn btn-success my-3" onClick={() => moveTaskToCompletedArray(index)}>
              Completed
            </button>
            <button className="btn btn-danger my-3 mx-3" onClick={() => clearPendingTask(index)}>
              Clear
            </button>
          </li>
        ))}
      </ol>

      {completedTaskArray.length > 0 && <h3 className="my-3" style={{ fontSize: "1.5rem" }}>Completed tasks:</h3>}
      <ol>
        {completedTaskArray.map((task, index) => (
          <li key={index} style={{ fontSize: "1.1rem" }}>
            <strong>Title :</strong> {task.title} <br />
            <strong>Description :</strong> {task.description} <br />
            <button className="btn btn-danger my-3" onClick={() => clearCompletedTask(index)}>
              Clear
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}