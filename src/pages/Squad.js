import { useEffect, useState } from "react";

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
  console.log(squad);

  return (
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
  );
}
