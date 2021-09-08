import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Registration from "./pages/Regisgration";
import Login from "./pages/Login";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navbar">
          <Link to="/">Home Page</Link>
          <Link to="/createpost">Create A Post</Link>
          <Link to="/login">Log in</Link>
          <Link to="/registration">Sign up</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/createpost" component={CreatePost} />
          <Route path="/post/:id" component={Post} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
