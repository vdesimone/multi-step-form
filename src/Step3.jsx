

function Step3() {

return(
    <div className="step-container">
      <form>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className="add-on-container">
          <div className="add-on active">
            <input
              type="checkbox"
              onChange=""
              checked
            />
            <div>
              <h4>Online service</h4>
              <p>Access to multiplayer games</p>
            </div>
            <p className="price">+$1/mo</p>
          </div>

          <div className="add-on">
            <input
              type="checkbox"
              onChange=""
            />
            <div>
              <h4>Larger storage</h4>
              <p>Extra 1TB of cloud save</p>
            </div>
            <p className="price">+$2/mo</p>
          </div>

          <div className="add-on">
            <input
              type="checkbox"
              onChange=""
            />
            <div>
              <h4>Customizable profile</h4>
              <p>Custom theme on your profile</p>
            </div>
            <p className="price">+$2/mo</p>
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

export default Step3;