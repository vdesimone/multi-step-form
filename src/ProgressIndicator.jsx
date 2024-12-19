

function ProgressIndicator() {

  return (
    <div className="progress-container">

    <div className="progress-step-container">

      <div className="progress-step active">
        <div className="progress-index">1</div>
        <div className="progress-title">
          <p>STEP 1</p>
          <h3>YOUR INFO</h3>
        </div>
      </div>

        <div className="progress-step">
          <div className="progress-index">2</div>
          <div className="progress-title">
            <p>STEP 2</p>
            <h3>SELECT PLAN</h3>
          </div>
        </div>


        <div className="progress-step">
          <div className="progress-index">3</div>
          <div className="progress-title">
            <p>STEP 3</p>
            <h3>ADD-ONS</h3>
          </div>
        </div>

        <div className="progress-step">
          <div className="progress-index">4</div>
          <div className="progress-title">
            <p>STEP 4</p>
            <h3>SUMMARY</h3>
          </div>
        </div>

      </div>

      <div className="watermark">
        <p><a href="https://github.com/vdesimone" target="_blank">vdesimone</a></p>
      </div>

    </div>
  );
}

export default ProgressIndicator;