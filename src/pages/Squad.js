import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Squad() {
  // const [isFetching, setIsFetching] = useState(false);
  const [squad, setSquad] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlayers() {
      // setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3001/football/squad");
        const resData = await response.json();
        setSquad(resData.squad);
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
      <Container>
        {squad.length === 0 && squad.length}
        {squad.length > 0 && (
          <Row className="justify-content-evenly">
            {squad.map((player) => (
              <Col
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
                <p
                  className="playwrite-gb-s-400"
                  style={{ justifyItems: "center" }}
                >
                  {player["first-name"] + " " + player["last-name"]}
                </p>
                <img
                  src={`http://localhost:3001/${player.image.src}`}
                  alt="random text"
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
