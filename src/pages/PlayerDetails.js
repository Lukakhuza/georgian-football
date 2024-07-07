import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { SquadContext } from "../store/context";

export default function PlayerDetails() {
  const [isFetching, setIsFetching] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("hello");
  const [isError, setIsError] = useState(false);

  const params = useParams();

  useEffect(() => {
    async function fetchCurrentPlayer() {
      try {
        const response = await fetch("http://localhost:3001/football/squad");
        const resData = await response.json();
        if (!resData.ok) {
          throw new Error("There was an error fetching the player name");
        }
        // setCurrentPlayer(resData.squad[params.playerdetails]);
        console.log(currentPlayer);
      } catch (error) {}
    }

    fetchCurrentPlayer();
  }, []);

  // const sqdContext = useContext(SquadContext);

  // console.log(squad);
  // console.log(params);
  return (
    <>
      {/* {sqdContext.players.length === 0 && <p>Hello</p>} */}
      {!params && <p>waiting for params</p>}
      {params && params.playerdetails}
      {currentPlayer && <p>No Current Player</p>}
      {currentPlayer && <p>{currentPlayer.team}</p>}
      {/* {sqdContext.players.length > 0 && (
        <div>
          {sqdContext.players.map((player) => (
            <div key={player.name}>{selectedPlayer.selectedPlayer}</div>
          ))}
        </div>
      )} */}
      {}
      {/* <div>{squad.selectedPlayer}</div> */}
    </>
  );
}
