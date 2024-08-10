export default function StadiumDetails({ props }) {
  if (props) {
    console.log(props.id);
    console.log(props.name);
  }
  return (
    <>
      {!props && <p>Fetching Data</p>}
      {props && (
        <>
          <p style={{ textAlign: "center" }}>
            <span>{props.name}</span>
          </p>
          <p>Capacity: {props.capacity}</p>
          <p>Built in {props.built}</p>
          <p>{props.city}, Georgia</p>
          <img
            style={{
              width: 500,
            }}
            src={`${props.image.src}`}
            alt={props.image.alt}
          />
          <form method="dialog">
            <button>Close</button>
          </form>
        </>
      )}
    </>
  );
}
