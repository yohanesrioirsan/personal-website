import NavBar from "./components/navbar/NavBar";
import Home from "./container/home/Home";

function App() {
  return (
    <>
      <div className="container px-4">
        <nav className="sticky top-0 py-4 animate-slide-in-top z-50">
          <NavBar />
        </nav>
        <main>
          <Home />
        </main>
      </div>
    </>
  );
}

export default App;
