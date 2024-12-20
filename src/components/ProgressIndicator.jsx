import PropTypes from "prop-types";

function ProgressIndicator({ currentStep, totalSteps }) {
  return (
    <div className="progress-container">
      <div className="progress-step-container">
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          return (
            <div
              key={stepNumber}
              className={`progress-step ${currentStep === stepNumber ? "active" : ""}`}
            >
              <div className="progress-index">{stepNumber}</div>
              <div className="progress-title">
                <p>STEP {stepNumber}</p>
                <h3>{ stepNumber === 1 ? "YOUR INFO" :
                      stepNumber === 2 ? "SELECT PLAN" :
                      stepNumber === 3 ? "ADD-ONS" : "SUMMARY"}</h3>
              </div>
            </div>
          );
        })}
      </div>

      <div className="watermark">
        <p><a href="https://github.com/vdesimone" target="_blank">vdesimone</a></p>
      </div>

    </div>
  );
}

ProgressIndicator.propTypes = {
  currentStep: PropTypes.number.isRequired,
  totalSteps: PropTypes.number.isRequired,
};

export default ProgressIndicator;