import { useState } from "react"; // Importing the useState hook from React
import { useDispatch } from "react-redux"; // Importing the useDispatch hook from react-redux
import { addTodo } from "../features/todo/todoSlice"; // Importing the addTodo action from the todoSlice

function AddTodo() {
  const [input, setInput] = useState(""); // Using useState to manage the input state
  const dispatch = useDispatch(); // Using useDispatch to get the dispatch function

  const addTodoHandler = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    dispatch(addTodo(input)); // Dispatching the addTodo action with the input value
    setInput(""); // Resetting the input field after adding the todo
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      {" "}
      {/* Form with onSubmit event handler and styling classes */}
      <input
        type="text" // Setting the input type to text
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" // Styling the input field with various Tailwind CSS classes
        placeholder="Enter a Todo..." // Placeholder text for the input field
        value={input} // Setting the input value to the state variable
        onChange={(e) => setInput(e.target.value)} // Updating the state variable when the input value changes
      />
      <button
        type="submit" // Setting the button type to submit
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" // Styling the button with various Tailwind CSS classes
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo; // Exporting the AddTodo component as the default export
