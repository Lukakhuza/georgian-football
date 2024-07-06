import { useContext } from "react";
import { SquadContext } from "../store/context";

export default function PlayerDetails() {
  const sqdContext = useContext(SquadContext);
  return (
    <>
      <p>Placeholder for Player Details.</p>
      {sqdContext.players.length === 0 && <p>Hello</p>}
      {sqdContext.players.length > 0 && (
        <p>
          {sqdContext.players.map((player) => (
            <div key={player.id}>{player.team}</div>
          ))}
        </p>
      )}
    </>
  );
}
