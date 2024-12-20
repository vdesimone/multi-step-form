import PropTypes from "prop-types";

function Step1({ formData, errors, handleInputChange, handleNext, isTouched }) {

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
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g. Stephen King"
            required
          />
          {isTouched && errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="e.g. stephenking@lorem.com"
            required
          />
          {isTouched && errors.email && <p className="error">{errors.email}</p>}
        </div>


        <div className="input-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            placeholder="e.g. 1 234 567 890"
            required
          />
          {isTouched && errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
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