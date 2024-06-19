import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Euro2024 from "./pages/Euro2024";
import WorldCup2026 from "./pages/WorldCup2026";
import Stadiums from "./pages/Stadiums";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/euro2024", element: <Euro2024 /> },
      { path: "/worldcup2026", element: <WorldCup2026 /> },
      { path: "/stadiums", element: <Stadiums /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
