# Mutli-Step Form

This is a solution to the [Multi-Step Form Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ) that showcases form validation, state management, and mock form submission.

## Table of Contents

- [Overview](#overview)
  - [About The Project](#about-the-project)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Author](#author)


## Overview

### About The Project

 <strong>Users should be able to:</strong>

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

 <strong>Features:</strong>
- __Active Form Validation:__ The form validates inputs at each step, displaying error messages when the conditions are not met. The user can only proceed to the next step once the errors are resolved.
- __State Management:__ Form data is dynamically saved and updated as the user progresses through each step. Input components' state is frequently updated, ensuring data consistency across the form.
- __Mock Form Submission:__ When the user clicks the "Confirm" button, a simulated "Thank you" message is displayed, mimicking the behavior of a successful form submission without actually sending the data.
- __Responsive Design:__ The form adapts to different screen sizes, making it easy to use on both desktop and mobile devices.

### Screenshots

<p>
  <strong>Laptop View (1024x788)</strong>
  <br />
  <img src="https://github.com/user-attachments/assets/639b77f7-76a7-4850-ab61-5f579ed8f99b" alt="Multi-Step Form Laptop View" />
</p>

<p>
  <strong>Mobile S View (320x788)</strong>
  <br />
  <img src="https://github.com/user-attachments/assets/c78693c1-cae9-4bea-afdd-b275ab2b346d" alt="Multi-Step Form Mobile S View" />
</p>

### Links

- __Live Site URL:__ [https://vd-multi-step-form.netlify.app/](https://vd-multi-step-form.netlify.app/)

## My Process

### Built With

* ![Static Badge](https://img.shields.io/badge/React-181c21?style=for-the-badge&logo=react)
* ![Static Badge](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
* ![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
* ![Static Badge](https://img.shields.io/badge/CSS-663399?style=for-the-badge&logo=css&logoColor=white)

### What I Learned

In this project, I gained hands-on experience with managing state in a React application, particularly in handling multi-step form data. I used the `useState` hook to manage and update the `formData` object, which stores the values entered by the user as they progress through the form. This approach ensured that the form data was preserved across different steps, enabling smooth navigation and interaction.

My understanding of React hooks greatly improved while working on this project, especially with the `useEffect` hook. In the `Step3` component, I used `useEffect` to synchronize the state of the selected add-ons whenever the `formData.addOns` array changes. This helped me track and update the state of the checkboxes dynamically, ensuring that the user's selections were maintained correctly throughout the component lifecycle.

Here is an example of how I handled updating and validating the form data as the user interacts with the form:
```jsx
const [formData, setFormData] = useState({
  name: "",
  email: "",
  phoneNumber: "",
  planType: "",
  isYearly: false,
  addOns: [],
  options: [...],
});

// Example of updating and validating form data on user input
const handleInputChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));

  if (name === "name") {
    validateName(value);
  } else if (name === "email") {
    validateEmail(value);
  } else if (name === "phoneNumber") {
    validatePhone(value);
  } else if (name === "planType")  {
    validatePlanType(value);
  }
};
```
By managing state effectively, I ensured that user input was dynamically reflected in the form, creating a seamless user experience.

### Continued Development

As I continue to develop this project and take on future ones, I plan to focus on refining my state management techniques to improve scalability and efficiency. For this project, I used `useState` to handle the state of each form step. However, as forms become more complex, managing state across multiple components can become increasingly difficult. In the future, I intend to explore state management libraries such as Redux to centralize state management, which will be helpful for more complex forms or larger applications.

While working on this project, I realized that my approach to form validation can be expanded. Although I implemented basic validation for fields such as name, email, and phone number, there is still room to improve how error messages are handled. For example, I could explore more detailed and user-friendly error messages or visual cues (such as icons) to provide a clearer and more intuitive experience for the user. This would help users quickly understand what needs to be corrected, reducing frustration.

Additionally, I want to continue learning about edge cases and how to address them. For example, I plan to consider how the form behaves when there are network issues or if the user decides to navigate away midway. I want to implement solutions for these scenarios, like saving form data locally to prevent data loss or showing error messages for failed submissions.

By continuing to focus on these areas, I aim to improve the robustness, maintainability, and user experience of my applications, making them more reliable and easier to scale in the future.

## Author

- GitHub - [vdesimone](https://github.com/vdesimone)
