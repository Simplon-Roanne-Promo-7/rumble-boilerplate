import React from "react";
import PlayerCard from "./PlayerCard";

const PlayerList = () => {
  let players = [
    { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
    { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
    { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
    { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 },
  ];
  const displayPlayers = () => {
    return Object.keys(players).map((key) => {
      return <PlayerCard key={players[key].id} player={players[key]} />;
    });
  };
  return <div className='row'>{displayPlayers()}</div>;
};

export default PlayerList;
