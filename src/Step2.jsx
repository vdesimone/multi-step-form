import arcadeIcon from "./assets/icon-arcade.svg";
import advancedIcon from "./assets/icon-advanced.svg";
import proIcon from "./assets/icon-pro.svg";

function Step2() {

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
              id="arcade"
              onChange=""
              checked
            />
            <label htmlFor="arcade">
              <img src={arcadeIcon} alt="Arcade Plan Icon" />
              <h4>Arcade</h4>
              <p>$9/mo</p>
            </label>
          </div>

          <div className="plan">
            <input
              type="radio"
              name="plan"
              id="advanced"
              onChange=""
            />
            <label htmlFor="advanced">
              <img src={advancedIcon} alt="Advanced Plan Icon" />
              <h4>Advanced</h4>
              <p>$12/mo</p>
            </label>
          </div>

          <div className="plan">
            <input
              type="radio"
              name="plan"
              id="pro"
              onChange=""
            />
            <label htmlFor="pro">
              <img src={proIcon} alt="Pro Plan Icon" />
              <h4>Pro</h4>
              <p>$15/mo</p>
            </label>
          </div>
        </div>

        <div className="toggle-container">
          <div className="toggle-content">
            <h5 className="active">Monthly</h5>
            <input type="checkbox" id="toggle-switch" />
            <label htmlFor="toggle-switch"></label>
            <h5>Yearly</h5>
          </div>
        </div>
      </form>
      <div className="buttons">
          <button className="go-back">Go Back</button>
          <button className="next">Next Step</button>
        </div>
    </div>
  );
}

export default Step2;