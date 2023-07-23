import Home from "./pages/Home";
import Work from "./pages/Work";
import Resume from "./pages/Resume";

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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
