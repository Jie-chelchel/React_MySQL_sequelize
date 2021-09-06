import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <Link to="/">Home Page</Link>
          <Link to="/createpost">Create A Post</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/post/:id" component={Post} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
