import PropTypes from "prop-types";

function Step4({ formData, handleChangeButton, handleBack, handleSubmit }) {
  const { planType, isYearly, addOns, options } = formData;

  const planPrice = planType === "arcade" ? (isYearly ? 90 : 9) : planType === "advanced" ? (isYearly ? 120 : 12) : planType === "pro" ? (isYearly ? 150 : 15) : 0;
  const planTypeName = planType.charAt(0).toUpperCase() + planType.slice(1);

  const formatPrice = (price, isYearly) => {
    return isYearly ? `${price}/yr` : `${price}/mo`;
  };

  const totalPrice = addOns.reduce((total, addOnId) => {
    const addOn = options.find((option) => option.id === Number(addOnId));
    if (!addOn) return total;
    const price = isYearly ? parseInt(addOn.yearlyPrice.slice(1)) : parseInt(addOn.monthlyPrice.slice(1));
    return total + price;
  }, planPrice);

  return(
    <div className="step-container">
      <div className="step-four-container">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>

        <div className="summary-container">
          <div className="summary-plan">
            <div className="plan-type">
              <div className="title">
                <h3>{planTypeName} ({isYearly ? "Yearly" : "Monthly"})</h3>
                <button onClick={handleChangeButton}>Change</button>
              </div>
              <p className="price">${formatPrice(planPrice, isYearly)}</p>
            </div>

            {addOns.map((addOnId) => {
              const addOn = options.find((option) => option.id === Number(addOnId));
              if (!addOn) return null;

              return (
                <div className="plan-service" key={addOn.id}>
                  <p>{addOn.label}</p>
                  <p className="price">+${formatPrice(isYearly ? parseInt(addOn.yearlyPrice.slice(1)) : parseInt(addOn.monthlyPrice.slice(1)), isYearly)}</p>
                </div>
              );
            })}
          </div>

          <div className="summary-total">
            <p>Total ({isYearly ? "per year" : "per month"})</p>
            <p className="price">
              {isYearly ? `$${totalPrice}/yr` : `+$${totalPrice}/mo`}
            </p>
          </div>
        </div>
      </div>

      <div className="buttons">
        <button className="go-back" onClick={handleBack}>Go Back</button>
        <button className="submit" onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
  );
}

Step4.propTypes = {
  formData: PropTypes.shape({
    planType: PropTypes.string.isRequired,
    isYearly: PropTypes.bool.isRequired,
    addOns: PropTypes.array.isRequired,
    options: PropTypes.array.isRequired,
  }).isRequired,
  handleChangeButton: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default Step4;