import { useDispatch, useSelector } from "react-redux"; // Importing hooks from react-redux
import { removeTodo } from "../features/todo/todoSlice"; // Importing the removeTodo action from the todoSlice

function Todos() {
    const todos = useSelector(state => state.todos); // Using useSelector hook to get the todos from the state
    const dispatch = useDispatch(); // Using useDispatch hook to get the dispatch function

  return (
    <>
      <div className="bg-midnight">Todos</div> {/* A div to display the title "Todos" with a background class */}
      <ul className="list-none bg-midnight"> {/* An unordered list with no list style and a background class */}
        {todos.map((todo) => ( // Mapping over the todos array to render each todo item
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded" // List item with various Tailwind CSS classes for styling
            key={todo.id} // Setting a unique key for each todo item
          >
            <div className="text-white">{todo.text}</div> {/* Displaying the todo text with a white text color */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))} // Dispatching the removeTodo action with the todo id when button is clicked
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md" // Button with various Tailwind CSS classes for styling
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" // SVG element for the delete icon
                fill="none" // No fill color for the SVG
                viewBox="0 0 24 24" // Setting the viewbox of the SVG
                strokeWidth={1.5} // Setting the stroke width
                stroke="currentColor" // Setting the stroke color to currentColor
                className="w-6 h-6" // Setting the width and height of the SVG
              >
                Delete todo {/* Accessible text for the delete button */}
                <path
                  strokeLinecap="round" // Setting the line cap to round
                  strokeLinejoin="round" // Setting the line join to round
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" // Path data for the SVG
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Todos; // Exporting the Todos component as the default export