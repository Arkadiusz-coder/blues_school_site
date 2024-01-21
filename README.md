# blues_school_site
The site of the blues and swing dances school in Krakow.

The site helps users to get informations about the school and schedule of the classes that are taking place during the week, as well as to register to the classes trough the registration form. It's also provide information about teachers and emial address and localisaton of the school.  

Overview

This project includes a robust web interface with interactive elements, such as a dynamic navigation menu, comprehensive form validation, smooth navigation to page sections, and an adaptive form that changes based on user input. The code is structured to enhance user experience through intuitive interaction and instant feedback.
Features

1. Dynamic Navigation Menu

    Hamburger Menu Toggle: The navigation menu can be toggled on and off by clicking the hamburger icon, making the site mobile-responsive. This feature is particularly useful for providing a clean and accessible interface on smaller screens.

```javascript```

var hamburger = document.querySelector('.nav_toggle');
var navMenu = document.querySelector('.nav_menu');

hamburger.addEventListener('click', function() {
    navMenu.classList.toggle('nav--visible');
});

var navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('nav--visible');
    });
});
```````````````


2. Form Validation

    Comprehensive Field Validation: The form includes validation for various fields including name, surname, email, phone, month, day, checkboxes for class selection, and radio buttons for payment method. Each field has specific validation criteria ensuring data integrity and user feedback.

   Real-time Feedback: Users receive instant feedback on their input. If the input doesn't meet the expected criteria, a validation message is displayed, guiding the users to correct their input.

```javascript`````````

// Displaying error message for name field
if (input.value === '') {
    result.textContent = 'This field cannot be empty!';
    return false;
} else if (!textRegex.test(input.value)) {
    result.textContent = 'Please enter a valid name!';
    return false;
}
````````````````

    Form Submission Handling: The form prevents default submission behavior, allowing for the custom validation logic to execute and provide feedback. Upon successful validation, a success message is displayed.

```javascript```

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Validation logic...
    document.getElementById('resultSubmit').textContent = isValid ? 'Form submitted successfully!' : 'Please correct the errors and submit again.';
});
```````````

3. Smooth Scrolling to Sections

    Smooth Navigation: When a navigation link is clicked, the page smoothly scrolls to the corresponding section. This feature enhances the user experience by providing a seamless and intuitive navigation flow.

```javascript`````

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        // Smooth scroll logic...
    });
});
`````````````````
4. Dynamic Form Field Population

    Adaptive Day Field Based on Month: The 'day' dropdown field dynamically adjusts its options based on the selected month. For example, if February is selected, the day field adjusts to allow a maximum of 28 days.

```````javascript````

function populateDays(month) {
    // Logic to populate day options based on the selected month
}

document.getElementById('month').addEventListener('change', function() {
    populateDays(this.value);
});
`````````````````````

Conclusion

This project represents a comprehensive web interface with interactive and user-friendly features. The thoughtful design and implementation of the navigation menu, form validation, smooth scrolling, and dynamic form fields collectively contribute to an engaging and seamless user experience.






