import { useState, useEffect, useRef } from "react";
import Error from "../components/Error";

export default function Stadiums() {
  const [isFetching, setIsFetching] = useState(false);
  const [stadiums, setStadiums] = useState([]);
  const [error, setError] = useState();
  const dialog = useRef();
  function handleClick() {
    dialog.current.showModal();
  }

  useEffect(() => {
    async function fetchStadiums() {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3001/football/stadiums");
        const resData = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch the list of stadiums.");
        }
        setStadiums(resData.stadiums);
      } catch (error) {
        setError(error);
      }

      setIsFetching(false);
    }

    fetchStadiums();
    // fetch()
    //   .then((response) => {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .then((resData) => {
    //     setStadiums(resData.stadiums);
    //   });
  }, []);

  console.log(dialog.current);
  // console.log(stadiums.length);

  if (error) {
    return <Error isFetching={isFetching} />;
  }
  return (
    <>
      <section className="stadiums-category">
        <h1>Stadiums in Georgia</h1>
        {stadiums.length === 0 && <Error isFetching={isFetching} />}

        {stadiums.length > 0 && (
          <ul className="stadiums">
            {stadiums.map((stadium) => (
              <li key={stadium.id} className="stadium-item">
                {/* <button onClick={handleClick}>
                  </button> */}
                <img
                  src={`http://localhost:3001/${stadium.image.src}`}
                  alt={stadium.image.alt}
                />
                <h4>{stadium.name}</h4>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
