import Profile from "./Components/profile/Profile";
import Home from "./Pages/Home/Home";
//import { Search } from "@mui/icons-material";
import Login from "./Components/login/Login";
import Register from "./Components/register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;

// C:\Users\admin\Documents\SocialMedia\frontEnd https://github.com/safak/youtube/tree/react-social-ui/src
