import LandingPage from "./pages/landing";
import SignUp from "./pages/auth/sign-up";
import SignIn from "./pages/auth/sign-in";
import MyBoarding from "./pages/boardingHouse/myBoardingHouses";
import CreateBoardingHouse from "./pages/boardingHouse/createBoardingHouse";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/my-boarding-houses" element={<MyBoarding />} />
        <Route
          path="/create-boarding-house"
          element={<CreateBoardingHouse />}
        />
      </Routes>
    </Router>
  );
}

export default App;
