import React, { useState } from "react";
import LensFormStep1 from "./LensFormStep1";
import LensFormStep2 from "./LensFormStep2";
import LensFormStep3 from "./LensFormStep3";
import Modal from "../Dialog/Modal";

const LensForm = ({ show, onHide }) => {
  const [formstep, setFormstep] = useState(0);

  const onNext = () => setFormstep(formstep + 1);
  const onPrev = () => setFormstep(formstep - 1);

  return (
    <Modal isOpen={show} closeModal={onHide} fullWidth={true}>
    
      {formstep === 0 && <LensFormStep1 onNext={onNext} onCancel={onHide} />}
      
      {formstep === 1 && <LensFormStep2 onNext={onNext} onPrev={onPrev} onCancel={onHide} />}
    
      {formstep === 2 && <LensFormStep3 onNext={onNext} onPrev={onPrev} onCancel={onHide} />}
    </Modal>
  );
};

export default LensForm;
