import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { SquadContext } from "../store/context";
import classes from "./PlayerDetails.module.css";

export default function PlayerDetails() {
  const [isFetching, setIsFetching] = useState(false);
  const [players, setPlayers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState();

  const params = useParams();

  useEffect(() => {
    async function fetchCurrentPlayer() {
      try {
        const response = await fetch(
          "https://geofootball.s3.us-east-1.amazonaws.com/data/squad.json"
        );
        const resData = await response.json();
        // console.log(resData.squad);
        setPlayers(resData);
        console.log(params.playerdetails);
        // console.log(resData.squad[params.playerdetails]["first-name"]);
        // console.log(resData.squad.ok);
        // setCurrentPlayer(resData.squad[params.playerdetails]);
        // console.log(resData.squad.length);
        if (!resData.ok) {
          throw new Error("There was an error fetching the player name");
        }
      } catch (error) {}
    }

    fetchCurrentPlayer();
  }, []);

  // const sqdContext = useContext(SquadContext);

  // console.log();
  // console.log(squad);
  // console.log(params);

  console.log(players[0]);

  return (
    <>
      {players.length === 0 && <p>Players Loading</p>}
      {players.length > 0 && (
        <section
          style={{
            textAlign: "center",
            fontFamily: "cursive",
            fontSize: "large",
            backgroundColor: "rgb(200,84,84)",
          }}
        >
          {players
            .filter((player) => {
              return player.id === params.playerdetails;
            })
            .map((player) => (
              <div key={player.id} className={classes["player-details"]}>
                <img
                  src={`https://geofootball.s3.us-east-1.amazonaws.com/players/${player.image.src}`}
                  alt={`picture of ${player.id}`}
                />
                <div key={player.id}>{player["last-name"]}</div>
                <p>{player.number}</p>
                <p>
                  {player["first-name"]} {player["last-name"]}{" "}
                </p>
                <p>{player.team}</p>
                <p>Goals in the national team: {player.goals}</p>
              </div>
            ))}

          {/* {players.filter((player) => {
            return (player.id = 5);
          })} */}
        </section>
      )}
    </>
  );
}
