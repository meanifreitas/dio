import {
  BrowserRouter as Router,
  Routes, //same as import Switch
  Route
} from "react-router-dom";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Feed } from "./pages/feed";
import { SignUp } from "./pages/signUp";
import { AuthContextProvider } from './context/auth';

function App() {
  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </AuthContextProvider>
    </Router>
  );
}

export default App;
