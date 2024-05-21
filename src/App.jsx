import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <div className="container py-4 sm:px-4">
        <NavBar />
        <main>
          <section id="work" className="flex justify-center">
            <Home />
          </section>
          {/* <section
            id="blogs"
            className="flex justify-center"
            style={{ height: "200vh" }}
          >
            <h1 className="text-4xl">TIDAK HELLO WORLD</h1>
          </section> */}
        </main>
      </div>
    </>
  );
}

export default App;
