import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import logo from "./Nakrebi.logo.png";
import "./App.css";
import Euro2024 from "./pages/Euro2024";
import WorldCup2026 from "./pages/WorldCup2026";

const router = createBrowserRouter([
  { path: "/", element: <Euro2024 /> },
  { path: "/worldcup", element: <WorldCup2026 /> },
]);

function App() {
  return (
    <RouterProvider router={router} />

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>Home of Georgian Football</p>
    //   </header>
    // </div>
  );
}

export default App;
