import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/home" component={Home} />
        {/* <Route exact path="/videogames" component={VideogameCreate} /> */}
        <Route exact path="/videogame/:id" component={Detail} />
      </div>
    </BrowserRouter>
  );
}

export default App;
