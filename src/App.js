import "./App.css";
import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./components/pages/about";
import Home from "./components/pages/home";
import Users from "./components/pages/users";
import Pricing from "./components/pages/create";
import BlogDetails from "./components/comps/blogDetails";
import NotFound from "./components/comps/notFound"

function App() {
  return (
    <Router>
      {" "}
      <div className="App container">
        <Navbar />        
         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL.  */}           
        <Switch>
          <Route exact path="/">
            {" "}
            <Home />{" "}
          </Route>
          <Route path="/about">
            {" "}
            <About />{" "}
          </Route>
          <Route path="/users">
            {" "}
            <Users />{" "}
          </Route>
          <Route path="/create">
            {" "}
            <Pricing quantity="infinity" />{" "}
          </Route>
          <Route path="/blogs/:id">
            {" "}
            <BlogDetails />{" "}
          </Route>
          <Route path="*">
            {" "}
            <NotFound />{" "}
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
