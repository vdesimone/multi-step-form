

function Step4() {

  return(
    <div className="step-container">
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming.</p>

      <div className="summary-container">

        <div className="summary-plan">

          <div className="plan-type">
            <div className="title">
              <h3>Arcade (Monthly)</h3>
              <button>Change</button>
            </div>
            <p className="price">
              $9/mo
            </p>
          </div>

          <div className="plan-service">
            <p>Online service</p>
            <p className="price">+$1/mo</p>
          </div>

          <div className="plan-service">
            <p>Larger storage</p>
            <p className="price">+$2/mo</p>
          </div>
        </div>

        <div className="summary-total">
          <p>Total (per month)</p>
          <p className="price">+$12/mo</p>
        </div>
      </div>
      <div className="buttons">
        <button className="go-back">Go Back</button>
        <button className="submit">Confirm</button>
      </div>
    </div>
  );
}

export default Step4;