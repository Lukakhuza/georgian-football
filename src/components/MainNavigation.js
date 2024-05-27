import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
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
