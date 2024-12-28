import { useState } from "react";
import PropTypes from "prop-types";
import arcadeIcon from "../assets/icon-arcade.svg";
import advancedIcon from "../assets/icon-advanced.svg";
import proIcon from "../assets/icon-pro.svg";

function Step2({ formData, handleBack, handleNext, handleInputChange }) {
  const [selectedPlan, setSelectedPlan] = useState(formData.planType);

  const isYearly = formData.isYearly;

  const handlePlanChange = (e) => {
    setSelectedPlan(e.target.value);
    handleInputChange({
      target: {
        name: "planType",
        value: e.target.value,
      },
    });
  };

  const handleToggleChange = () => {
    handleInputChange({
      target: {
        name: "isYearly",
        value: !isYearly,
      },
    });
  };

  return(
    <div className="step-container">
      <form>
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly billing.</p>

        <div className="plan-container">
          <div className="plan">
            <input
              type="radio"
              name="plan"
              value="arcade"
              id="arcade"
              onChange={handlePlanChange}
              checked={selectedPlan === "arcade"}
            />
            <label htmlFor="arcade">
              <img src={arcadeIcon} alt="Arcade Plan Icon" />
              <div className="plan-details">
                <h4>Arcade</h4>
                <p>{isYearly ? "$90/yr" : "$9/mo"}</p>
                {isYearly && <p>2 months free</p>}
              </div>
            </label>
          </div>

          <div className="plan">
            <input
              type="radio"
              name="plan"
              value="advanced"
              id="advanced"
              onChange={handlePlanChange}
              checked={selectedPlan === "advanced"}
            />
            <label htmlFor="advanced">
              <img src={advancedIcon} alt="Advanced Plan Icon" />
              <div className="plan-details">
                <h4>Advanced</h4>
                <p>{isYearly ? "$120/yr" : "$12/mo"}</p>
                {isYearly && <p>2 months free</p>}
              </div>
            </label>
          </div>

          <div className="plan">
            <input
              type="radio"
              name="plan"
              value="pro"
              id="pro"
              onChange={handlePlanChange}
              checked={selectedPlan === "pro"}
            />
            <label htmlFor="pro">
              <img src={proIcon} alt="Pro Plan Icon" />
              <div className="plan-details">
                <h4>Pro</h4>
                <p>{isYearly ? "$150/yr" : "$15/mo"}</p>
                {isYearly && <p>2 months free</p>}
              </div>
            </label>
          </div>
        </div>

        <div className="toggle-container">
          <div className="toggle-content">
            <h5 className={isYearly ? "inactive" : "active"}>Monthly</h5>
            <input
              type="checkbox"
              id="toggle-switch"
              checked={isYearly}
              onChange={handleToggleChange}
            />
            <label htmlFor="toggle-switch"></label>
            <h5 className={isYearly ? "active" : "inactive"}>Yearly</h5>
          </div>
        </div>
      </form>
      <div className="buttons">
        <button className="go-back" onClick={handleBack}>Go Back</button>
        <button className="next" onClick={handleNext}>Next Step</button>
      </div>
    </div>
  );
}

Step2.propTypes = {
  formData: PropTypes.shape({
    planType: PropTypes.string.isRequired,
    isYearly: PropTypes.bool.isRequired,
  }).isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Step2;