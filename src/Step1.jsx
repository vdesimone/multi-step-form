

function Step1() {

  return(
    <div className="step-container">
      <form>
        <h2>Personal info</h2>
        <p>Please prove your name, email address, and phone number.</p>

        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value=""
            onChange=""
            placeholder="e.g. Stephen King"
            required
          />
          {/* <p className="error">
            This field is required
          </p> */}
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value=""
            onChange=""
            placeholder="e.g. stephenking@lorem.com"
            required
          />
        </div>


        <div className="input-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value=""
            onChange=""
            placeholder="e.g. 1 234 567 890"
            required
          />
        </div>
      </form>
      <div className="buttons">
          <button className="next">Next Step</button>
        </div>
    </div>
  );
}

export default Step1;