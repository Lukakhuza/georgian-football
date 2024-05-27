import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="euro2024">Euro 2024</Link>
          </li>
          <li>
            <Link to="worldcup2026">World Cup 2026</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
