import logo from "./logo.svg";
import "./App.css";
import Main from "./component/Main";
import Cards from "./component/Cards";
import {Toaster} from "react-hot-toast"
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Property from "./component/Property";

function App() {

  return (
    <div className="bg-slate-100">
      <Router>
      <Toaster/>
        <Routes>
          <Route>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/property/:id" element={<Property />} />

          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
