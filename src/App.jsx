import Home from "./pages/Home";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import BinarCarRental from "./pages/work/BinarCarRental";
import BinarCarRentalAdmin from "./pages/work/BinarCarRentalAdmin";
import AniGenerator from "./pages/work/AniGenerator";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/work",
      element: <Work />,
    },
    {
      path: "/resume",
      element: <Resume />,
    },
    {
      path: "/work/binar",
      element: <BinarCarRental />,
    },
    {
      path: "/work/binar-admin",
      element: <BinarCarRentalAdmin />,
    },
    {
      path: "/work/anigenerator",
      element: <AniGenerator />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
