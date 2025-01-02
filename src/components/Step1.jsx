import PropTypes from "prop-types";

function Step1({ formData, errors, handleInputChange, handleNext, isTouched }) {

  return(
    <div className="step-container">
      <form>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>

        <div className="input-group">
          <div>
            <label htmlFor="name">Name</label>
            {isTouched && errors.name && <p className="error">{errors.name}</p>}
          </div>

          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g. Stephen King"
            required
          />
        </div>

        <div className="input-group">
          <div>
            <label htmlFor="email">Email Address</label>
            {isTouched && errors.email && <p className="error">{errors.email}</p>}
          </div>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="e.g. stephenking@lorem.com"
            required
          />
        </div>


        <div className="input-group">
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            {isTouched && errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
          </div>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="e.g. 1 234 567 890"
            required
          />
        </div>
      </form>
      <div className="buttons">
        <button className="next" type="button" onClick={handleNext}>
            Next Step
        </button>
      </div>
    </div>
  );
}

Step1.propTypes = {
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  isTouched: PropTypes.bool.isRequired,
};

export default Step1;