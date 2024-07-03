import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <Link to="/">Home</Link>

          <Link to="/squad">Squad</Link>

          <Link to="euro2024">Euro 2024</Link>

          {/* <Link to="worldcup2026">World Cup 2026</Link> */}

          <Link to="stadiums">Stadiums</Link>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
