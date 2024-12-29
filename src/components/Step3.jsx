import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Step3({ formData, handleBack, handleNext, handleInputChange }) {
  const [selectedAddOns, setSelectedAddOns] = useState(formData.addOns);

  const isYearly = formData.isYearly;

  useEffect(() => {
    const selected = {};
    formData.addOns.forEach((addOnId) => {
      selected[addOnId] = true;
    });
    setSelectedAddOns(selected);
  }, [formData.addOns]);

  const handleChange = (id) => {
    const updatedSelected = {
      ...selectedAddOns,
      [id]: !selectedAddOns[id],
    };

    setSelectedAddOns(updatedSelected);

    const selectedAddOnIds = Object.keys(updatedSelected).filter((key) => updatedSelected[key]);

    handleInputChange({
      target: {
        name: "addOns",
        value: selectedAddOnIds,
      },
    });
  };

  return(
    <div className="step-container">
      <form>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        <div className="add-on-container">
          {formData.options.map((option) => (
            <label className={`add-on ${selectedAddOns[option.id] ? "active" : ""}`} key={option.id}>
              <input
                type="checkbox"
                onChange={() => handleChange(option.id)}
                checked={selectedAddOns[option.id] || false}
              />
              <div>
                <h4>{option.label}</h4>
                <p>{option.description}</p>
              </div>
              <p className="price">+{isYearly ? option.yearlyPrice : option.monthlyPrice}</p>
            </label>
          ))}
        </div>
      </form>
      <div className="buttons">
        <button className="go-back" onClick={handleBack}>Go Back</button>
        <button className="next" onClick={handleNext}>Next Step</button>
      </div>
    </div>
  );
}

Step3.propTypes = {
  formData: PropTypes.shape({
    isYearly: PropTypes.bool.isRequired,
    addOns: PropTypes.array.isRequired,
    options: PropTypes.array.isRequired,
  }).isRequired,
  handleBack: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleInputChange: PropTypes.func.isRequired,
}

export default Step3;