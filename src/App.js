import "./App.css";
import Test from "./JSX/containers/Test";
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_BASEURL;

function App() {
  return (
    <div className="App">
      <Test/>
    </div>
  );
}

export default App;
