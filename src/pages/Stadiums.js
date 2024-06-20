import { useState, useEffect } from "react";

export default function Stadiums() {
  const [stadiums, setStadiums] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/football/stadiums")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((resData) => {
        setStadiums(resData.stadiums);
      });
  }, []);

  return (
    <>
      <ul>
        {stadiums.map((stadium) => (
          <li key={stadium.id}>
            <p>{stadium.name}</p>
            <p>{stadium.city}</p>
            <img src={`http://localhost:3001/${stadium.image.src}`} />
          </li>
        ))}
      </ul>
    </>
  );
}
