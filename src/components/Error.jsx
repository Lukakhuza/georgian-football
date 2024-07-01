export default function Error(isFetching) {
  return (
    <div>
      <p
        className="nda-message"
        style={{
          backgroundColor: "#282c34",
          color: "white",
          fontSize: "large",
          textAlign: "center",
        }}
      >
        No Data Available!
      </p>
    </div>
  );
}
