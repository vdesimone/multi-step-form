import thankYouIcon from "../assets/icon-thank-you.svg";

function Step5() {

  return(
    <div className="submit-container">
      <div className="submit-message">
        <img src={thankYouIcon} alt="Thank You Icon" />
        <h2>Thank you!</h2>
        <p>
          Thanks for confirming your subscription! We hope
          you have fun using our platform. If you ever need
          support, please feel free to email us at
          support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default Step5;