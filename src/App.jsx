import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import AnimatedHome from "./pages/home/AnimatedHome";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <AnimatedHome />
        <Footer />
      </Router>
    </>
  );
}

export default App;
