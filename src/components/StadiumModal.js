import { forwardRef } from "react";

const StadiumsModal = forwardRef(function StadiumModal(props, ref) {
  console.log(props.props[1].name);

  return (
    <dialog ref={ref} className="result-modal">
      <p>You Won!</p>
      <p>Luka</p>
      {/* <p>{storedName}</p> */}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default StadiumsModal;
