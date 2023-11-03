import {
  BrowserRouter as Router,
  Routes, //same as import Switch
  Route
} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";

function App() {
  return (
    <Router className="App">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
}

export default App;
