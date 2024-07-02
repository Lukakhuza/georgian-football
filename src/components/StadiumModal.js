import StadiumDetails from "./StadiumDetails";
import { forwardRef } from "react";

const StadiumsModal = forwardRef(function StadiumModal({ props }, ref) {
  if (props) {
    console.log(props.id);
  }
  return (
    <dialog ref={ref} className="result-modal">
      {!props && <p>Fetching Data</p>}
      {props && <StadiumDetails props={props} />}
    </dialog>
  );
});

export default StadiumsModal;
