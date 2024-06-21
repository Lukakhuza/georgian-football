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
    <section className="stadiums-category">
      <h1>Stadiums in Georgia</h1>
      <ul className="stadiums">
        {stadiums.map((stadium) => (
          <li key={stadium.id} className="stadium-item">
            {/* <div>{stadium.city}</div> */}
            <img
              src={`http://localhost:3001/${stadium.image.src}`}
              alt={stadium.image.alt}
            />
            <h4>{stadium.name}</h4>
          </li>
        ))}
      </ul>
    </section>
  );
}
