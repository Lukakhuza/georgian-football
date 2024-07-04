import StadiumDetails from "./StadiumDetails";
import { motion } from "framer-motion";
import { forwardRef } from "react";

const StadiumsModal = forwardRef(function StadiumModal({ props }, ref) {
  if (props) {
    console.log(props.id);
  }
  return (
    <motion.dialog
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      ref={ref}
      className="result-modal"
    >
      {!props && <p>Fetching Data</p>}
      {props && <StadiumDetails props={props} />}
    </motion.dialog>
  );
});

export default StadiumsModal;
