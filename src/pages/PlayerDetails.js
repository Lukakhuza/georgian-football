import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
import { SquadContext } from "../store/context";

export default function PlayerDetails() {
  const [isFetching, setIsFetching] = useState(false);
  const [players, setPlayers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState();

  const params = useParams();

  useEffect(() => {
    async function fetchCurrentPlayer() {
      try {
        const response = await fetch("http://localhost:3001/football/squad");
        const resData = await response.json();
        console.log(resData.squad);
        setPlayers(resData.squad);
        console.log(params.playerdetails);
        // console.log(resData.squad[params.playerdetails]["first-name"]);
        // console.log(resData.squad.ok);
        // setCurrentPlayer(resData.squad[params.playerdetails]);
        // console.log(resData.squad.length);
        if (!resData.squad.ok) {
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

  return (
    <>
      {players.length === 0 && <p>Players Loading</p>}
      {players.length > 0 && (
        <section
          style={{
            textAlign: "center",
            fontFamily: "cursive",
            fontSize: "large",
            backgroundColor: "rgb(200,0,0)",
          }}
        >
          {players
            .filter((player) => {
              return player.id === params.playerdetails;
            })
            .map((player) => (
              <>
                <img
                  src={`http://localhost:3001/${player.image.src}`}
                  alt="picture alt text"
                />
                <div key={player.id}>{player["last-name"]}</div>
                <p>{player.number}</p>
                <p>
                  {player["first-name"]} {player["last-name"]}{" "}
                </p>
                <p>{player.team}</p>
                <p>Goals in the national team: {player.goals}</p>
              </>
            ))}

          {/* {players.filter((player) => {
            return (player.id = 5);
          })} */}
        </section>
      )}
      {/* {sqdContext.players.length === 0 && <p>Hello</p>} */}
      {/* {resData.squad.length === 0 && <p>No Current Player</p>} */}
      {/* {!currentPlayer.image && <p>No Current Player</p>}
      {!currentPlayer.image.src && <p>No Current Player</p>} */}
      {/* {!currentPlayer.image.src && <p>No Current Player</p>} */}
      {/* {currentPlayer && (
        <>
          <section
            style={{
              textAlign: "center",
              fontFamily: "cursive",
              fontSize: "large",
              backgroundColor: "rgb(200,0,0)",
            }}
          >
            <img
              src={`http://localhost:3001/georges-mikautadze.png`}
              alt="picture alt text"
            />

          </section> */}
      {/* </> */}
      {/* // )} */}
      {/* {sqdContext.players.length > 0 && (
        <div>
          {sqdContext.players.map((player) => (
            <div key={player.name}>{selectedPlayer.selectedPlayer}</div>
          ))}
        </div>
      )} */}
      {/* // {} */}
      {/* <div>{squad.selectedPlayer}</div> */}
    </>
  );
}
