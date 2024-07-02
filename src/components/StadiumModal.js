import StadiumDetails from "./StadiumDetails";
import { forwardRef } from "react";

const StadiumsModal = forwardRef(function StadiumModal({ props }, ref) {
  console.log(props.length);
  return (
    <dialog ref={ref} className="result-modal">
      {props.length === 0 && <p>Fetching Data</p>}
      {props.length > 0 && <StadiumDetails />}
    </dialog>
  );
});

export default StadiumsModal;
