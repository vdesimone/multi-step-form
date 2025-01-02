import { useState } from "react";
import Step1 from "./Step1.jsx";
import Step2 from "./Step2.jsx";
import Step3 from "./Step3.jsx";
import Step4 from "./Step4.jsx";
import Step5 from "./Step5.jsx";
import ProgressIndicator from "./ProgressIndicator.jsx";

function MultiStepForm() {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    planType: "",
    isYearly: false,
    addOns: [],
    options: [
      { id: 1,
        label: "Online service",
        description: "Access to multiplayer games",
        monthlyPrice: "$1/mo",
        yearlyPrice: "$10/yr"
      },
      { id: 2,
        label: "Larger storage",
        description: "Extra 1TB of cloud save",
        monthlyPrice: "$2/mo",
        yearlyPrice: "$20/yr"
      },
      { id: 3,
        label: "Customizable profile",
        description: "Custom theme on your profile",
        monthlyPrice: "$2/mo",
        yearlyPrice: "$20/yr"
      },
    ],
  });
  const [errors, setErrors] = useState({});
  const [isTouched, setIsTouched] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData ((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "name") {
      validateName(value);
    } else if (name === "email") {
      validateEmail(value);
    } else if (name === "phoneNumber") {
      validatePhone(value);
    }
  };

  const handleNext = () => {
    setIsTouched(true);
    if (step === 1 && !validateStep1()) return;
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleChangeButton = () => {
    setStep(step - 2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const validateName = (name) => {
    let error = "";
    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!name.trim()) {
      error = "This field is required";
    } else if (!nameRegex.test(name)) {
      error = "Invalid character in name";
    } else if (name.length < 3) {
      error = "Minimum of 3 characters required";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      name: error,
    }));
  };

  const validateEmail = (email) => {
    let error = "";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      error = "This field is required";
    } else if (!emailRegex.test(email)) {
      error = "Invalid email address";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      email: error,
    }));
  };

  const validatePhone = (phoneNumber) => {
    let error = "";
    const phoneRegex = /^[0-9]{1}[- ]?[0-9]{3}[- ]?[0-9]{3}[- ]?[0-9]{3}$/;
    if (!phoneNumber) {
      error = "This field is required";
    } else if (!phoneRegex.test(phoneNumber)) {
      error = "Please enter a valid 10-digit phone number";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      phoneNumber: error,
    }));
  };

  const validateStep1 = () => {
    let valid = true;
    let tempErrors = {};

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!formData.name) {
      tempErrors.name = "This field is required";
      valid = false;
    } else if (!nameRegex.test(formData.name)){
      tempErrors.name = "Invalid character in name";
      valid = false;
    } else if (formData.name < 3) {
      tempErrors.name = "Minimum of 3 characters required";
      valid = false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      tempErrors.email = "This field is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Invalid email address";
      valid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber) {
      tempErrors.phoneNumber = "This field is required";
      valid = false;
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      tempErrors.phoneNumber = "Please enter a valid 10-digit phone number";
      valid = false;
    }

    setErrors(tempErrors);
    return valid;
  };

  return (
    <div className="form-container">
      <ProgressIndicator currentStep={step} totalSteps={4} />

      {step === 1 && (
        <Step1
          formData={formData}
          errors={errors}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
          isTouched={isTouched}
        />
      )}
      {step === 2 && (
        <Step2
          formData={formData}
          handleBack={handleBack}
          handleNext={handleNext}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 3 && (
        <Step3
          formData={formData}
          handleBack={handleBack}
          handleNext={handleNext}
          handleInputChange={handleInputChange}
        />
      )}
      {step === 4 && (
        <Step4
          formData={formData}
          handleChangeButton={handleChangeButton}
          handleBack={handleBack}
          handleSubmit={handleSubmit}
        />
      )}
      {step === 5 && <Step5/>}
    </div>
  );
}

export default MultiStepForm;