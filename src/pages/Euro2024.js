import { Link } from "react-router-dom";

export default function Euro2024() {
  return (
    <>
      <h1>Euro 2024</h1>
      <p>
        Welcome to the Euro 2024 Page for the supporters of Georgian National
        Football Team.
      </p>
      <p>
        Go to the <Link to="/worldcup">world cup page.</Link>
      </p>
    </>
  );
}
