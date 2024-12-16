import Step1 from "./Step1.jsx";
import ProgressIndicator from "./ProgressIndicator.jsx";

function MultiStepForm() {

  return (
    <div className="form-container">
      <ProgressIndicator />
      <Step1 />
    </div>
  );
}

export default MultiStepForm