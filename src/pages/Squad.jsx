import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SquadContext } from "../store/context";
import { Link } from "react-router-dom";
import PlayerDetails from "./PlayerDetails";

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

  // console.log(squad);

  return (
    <>
      <SquadContext.Provider value={{ players: squad }}>
        <Container>
          {squad.length === 0 && squad.length}
          {squad.length > 0 && (
            <Row className="justify-content-evenly">
              {squad.map((player) => (
                <Col
                  onClick={() => handleClick(player)}
                  // <Button onClick={() => handleClick(player)}>
                  style={{
                    border: "solid",
                    borderColor: "white",
                    borderRadius: "1rem",
                    backgroundColor: "rgb(200,84,84)",
                  }}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={player.id}
                >
                  <Link to={player.id}>
                    <p
                      className="playwrite-gb-s-400"
                      style={{ justifyItems: "center" }}
                    >
                      {player["first-name"] + " " + player["last-name"]}
                    </p>
                    <img
                      src={`https://geofootball.s3.amazonaws.com/players/${player.image.src}`}
                      alt="random text"
                    />
                  </Link>
                  {/* </Button> */}
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
