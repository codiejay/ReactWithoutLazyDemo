import "./styles.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Sheeps from "./sheeps";
import Cows from "./cows";
import Cats from "./cats";

export default function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="sheep">sheep</Link>
        </li>
        <li>
          <Link to="cows">cows</Link>
        </li>
        <li>
          <Link to="cats">cats</Link>
        </li>
      </ul>

      <hr />

      <Routes>
        <Route exact path="sheep" element={<Sheeps />} />
        <Route exact path="cows" element={<Cows />} />
        <Route exact path="cats" element={<Cats />} />
      </Routes>
    </Router>
  );
}
