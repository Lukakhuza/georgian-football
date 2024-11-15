import classes from "./Home.module.css";

export default function HomePage() {
  return (
    <div>
      <header id={classes["container"]}>
        <img
          src="https://geofootball.s3.amazonaws.com/logos/Nakrebi.logo.png"
          className="App-logo"
          alt="logo"
        />
        <p>Home of Georgian Football</p>
        <p>მე ვარ საქართველო</p>
      </header>
    </div>
  );
}
