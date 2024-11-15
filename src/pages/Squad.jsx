import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SquadContext } from "../store/context";
import { Link } from "react-router-dom";
import PlayerDetails from "./PlayerDetails";
import classes from "./Squad.module.css";

export default function Squad() {
  // const [isFetching, setIsFetching] = useState(false);
  const [squad, setSquad] = useState([]);
  const [error, setError] = useState();
  const [selectedPlayer, setSelectedPlayer] = useState({});

  function handleClick(player) {
    setSelectedPlayer(player);
  }

  useEffect(() => {
    async function fetchPlayers() {
      // setIsFetching(true);
      try {
        const response = await fetch(
          "https://geofootball.s3.us-east-1.amazonaws.com/data/squad.json"
        );
        const resData = await response.json();
        setSquad(resData);
      } catch (error) {
        setError(error);
      }
      // setIsFetching(false);
    }
    fetchPlayers();
  }, []);

  if (error) {
    return (
      <>
        <p>There was an error</p>
        <p>{error.message}</p>
      </>
    );
  }

  return (
    <>
      <SquadContext.Provider value={{ players: squad }}>
        <Container>
          {squad.length === 0 && squad.length}
          {squad.length > 0 && (
            <Row className={classes["whole-squad"]}>
              {squad.map((player) => (
                <Col
                  onClick={() => handleClick(player)}
                  // <Button onClick={() => handleClick(player)}>
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={player.id}
                  className={classes["player"]}
                >
                  <Link to={player.id}>
                    <p
                      // className="playwrite-gb-s-400"
                      style={{ justifyItems: "center" }}
                    ></p>
                    <img
                      src={`https://geofootball.s3.amazonaws.com/players/${player.image.src}`}
                      alt="random text"
                    />
                    <p id={classes.playername}>
                      {player["first-name"] + " " + player["last-name"]}
                    </p>
                  </Link>
                </Col>
              ))}
            </Row>
          )}
        </Container>
        <PlayerDetails />
      </SquadContext.Provider>
    </>
  );
}
