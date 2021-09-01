import ReactDOM from "react-dom";
import "./app.css";

function App() {
  return (
    <div className="app-wrapper">
      <h1>Welcome to React and Electron</h1>
      <p>Go forth and create your native applications!</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
