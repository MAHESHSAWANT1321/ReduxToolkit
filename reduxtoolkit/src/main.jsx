
import ReactDOM from "react-dom/client"; // Importing the ReactDOM library for rendering the React component tree
import App from "./App.jsx"; // Importing the App component
import "./index.css"; // Importing the CSS file for the index
import { Provider } from "react-redux"; // Importing the Provider component from react-redux
import { store } from "./myApp/store.js"; // Importing the Redux store

// Creating a root and rendering the App component within the Provider
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    {" "}
    {/* Wrapping the App component with the Provider component to make the Redux store available to the entire app */}
    <App /> {/* Rendering the App component */}
  </Provider>
);
