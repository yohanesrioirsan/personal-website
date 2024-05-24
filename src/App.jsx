import NavBar from "./components/navbar/NavBar";
import Home from "./container/home/Home";
import Work from "./container/work/Work";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <nav className="sticky top-0 py-4 animate-slide-in-top z-50">
        <NavBar />
      </nav>
      <main>
        <Home />
        <Work />
      </main>
      <footer className="sticky bottom-0 z-50">
        <Footer />
      </footer>
    </>
  );
}

export default App;
