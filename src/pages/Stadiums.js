import { useState, useEffect, useRef } from "react";
import Error from "../components/Error";
import StadiumModal from "../components/StadiumModal";

export default function Stadiums() {
  const [isFetching, setIsFetching] = useState(false);
  const [stadiums, setStadiums] = useState([]);
  const [error, setError] = useState();
  const [selectedStadiumId, setSelectedStadiumId] = useState(null);
  const dialog = useRef();

  function handleClick(id) {
    setSelectedStadiumId(stadiums[id]);
    dialog.current.showModal();
    // console.log(selectedStadium);
    // console.log(id);
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
  }, []);

  if (error) {
    return <Error isFetching={isFetching} />;
  }
  return (
    <>
      <StadiumModal ref={dialog} props={(stadiums, selectedStadiumId)} />
      <section className="stadiums-category">
        <h1 style={{ color: "white" }}>Stadiums in Georgia</h1>
        {stadiums.length === 0 && <Error isFetching={isFetching} />}
        {stadiums.length > 0 && (
          <ul className="stadiums">
            {stadiums.map((stadium) => (
              <li key={stadium.id} className="stadium-item">
                <button onClick={() => handleClick(stadium.id)}>
                  <img
                    src={`http://localhost:3001/${stadium.image.src}`}
                    alt={stadium.image.alt}
                  />
                  <h4>{stadium.name}</h4>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
