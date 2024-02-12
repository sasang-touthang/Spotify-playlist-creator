import { useCallback } from "react";
import "./App.css";
import Authorization from "./components/Authorizaion/Authorization";
import Home from "./components/Home/Home";

function App() {
  let access_token = window.location.href.match(/access_token=([^&]*)/);

  return (
    <div className="card">{access_token ? <Home /> : <Authorization />}</div>
  );
}

export default App;
