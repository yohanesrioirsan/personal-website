import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
        <nav className="sticky top-0 flex justify-center">
          <NavBar />
        </nav>
        <main>
          <section id="work" className="flex justify-center" style={{ height: "200vh" }}>
            <h1 className="text-4xl">Hello WORLD</h1>
          </section>
          <section id="blogs" className="flex justify-center" style={{ height: "200vh" }}>
            <h1 className="text-4xl">TIDAK HELLO WORLD</h1>
          </section>
        </main>
    </>
  );
}

export default App;
