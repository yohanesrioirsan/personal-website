import Home from "../../container/home/Home";
import About from "../../container/about/About";
import { useEffect } from "react";

function Index() {
  useEffect(() => {
    document.title = "Yohanes Rio Irsan - Front-End Developer";
  });

  return (
    <>
      <main>
        <Home />
        <About />
      </main>
    </>
  );
}

export default Index;
