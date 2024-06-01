import { Link } from "react-router-dom";

export default function Euro2024() {
  return (
    <div className="App-header">
      <h1 className="pageHeading">Euro 2024</h1>
      <p>
        Welcome to the Euro 2024 Page for the supporters of Georgian National
        Football Team.
      </p>
      <p>
        Go to the <Link to="/worldcup2026">world cup page.</Link>
      </p>
    </div>
  );
}
