import "./App.css"; // Importing the CSS file for the App component
import AddTodo from "./components/AddTodo"; // Importing the AddTodo component
import Todos from "./components/Todos"; // Importing the Todos component

function App() {
  return (
    <>
      <h1>Learn about redux toolkit</h1> {/* A heading for the application */}
      <AddTodo /> {/* Rendering the AddTodo component */}
      <Todos /> {/* Rendering the Todos component */}
    </>
  );
}

export default App; // Exporting the App component as the default export
