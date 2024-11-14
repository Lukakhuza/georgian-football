import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Euro2024 from "./pages/Euro2024";
import WorldCup2026 from "./pages/WorldCup2026";
import Stadiums from "./pages/Stadiums";
import Squad from "./pages/Squad";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import PlayerDetails from "./pages/PlayerDetails";
// import { SquadContext } from "./store/context";
// import SquadContext from "./store/context.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/squad", element: <Squad /> },
      { path: "/squad/:playerdetails", element: <PlayerDetails /> },
      // { path: "/euro2024", element: <Euro2024 /> },
      { path: "/worldcup2026", element: <WorldCup2026 /> },
      { path: "/stadiums", element: <Stadiums title="Stadiums in Georgia" /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
