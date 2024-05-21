import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <main>
          <section
            id="blogs"
            className="flex justify-center"
            style={{ height: "200vh" }}
          >
            <h1 className="text-4xl">TIDAK HELLO WORLD</h1>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
