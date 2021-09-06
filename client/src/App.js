import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/createpost">Create A Post</Link>
        <Link to="/">Home Page</Link>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" component={CreatePost} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
