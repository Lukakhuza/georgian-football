import { useEffect, useState } from "react";
// import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Stack from "react-bootstrap/Stack";

export default function Squad() {
  const [isFetching, setIsFetching] = useState(false);
  const [squad, setSquad] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlayers() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:3001/football/squad");
        const resData = await response.json();
        setSquad(resData.squad);
      } catch (error) {
        setError(error);
      }
      setIsFetching(false);
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
      <section>
        {squad.length === 0 && squad.length}
        {squad.length > 0 && (
          <ul>
            {squad.map((player) => (
              <li key={player.id}>
                {player["first-name"] + " " + player["last-name"]}
              </li>
            ))}
          </ul>
        )}
      </section>

      <Container>
        <Row>
          <Col xs={4}>1 of 3</Col>
          <Col xs={4}>2 of 3 (wider)</Col>
          <Col xs={4}>3 of 3</Col>
        </Row>
        <Row>
          <Col md={12}>1 of 3</Col>
          <Col md={12} xs={10}>
            2 of 3 (wider)
          </Col>
          <Col md={12}>3 of 3</Col>
        </Row>
      </Container>
    </>
  );
}
