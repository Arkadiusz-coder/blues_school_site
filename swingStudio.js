document.addEventListener('DOMContentLoaded', function () {
    // Select the hamburger button and navigation menu
    var hamburger = document.querySelector('.nav_toggle');
    var navMenu = document.querySelector('.nav_menu');

    // Toggle navigation menu on hamburger click
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('nav--visible');
    });

    // Select all navigation links
    var navLinks = document.querySelectorAll('.nav_link');

    // Add click event to each navigation link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // Remove the .nav--visible class to hide the menu
            navMenu.classList.remove('nav--visible');
        });
    });

        const submitButton = document.getElementById('submit');
    
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
    
            let isValid = true;
            clearValidationMessages();
    
            // Validate each field
            isValid &= validateName('fname');
            isValid &= validateSurname('lname');
            isValid &= validateEmail('email');
            isValid &= validatePhone('phone');
            isValid &= validateMonth('month');
            isValid &= validateDay('days');
            isValid &= validateCheckboxes();
            isValid &= validateRadio();
    
            // Show final submission result
            document.getElementById('resultSubmit').textContent = isValid ? 'Form submitted successfully!' : 'Please correct the errors and submit again.';
        });
    
        function clearValidationMessages() {
            document.querySelectorAll('.validation-message').forEach(element => {
                element.textContent = '';
            });
        }
    
        function validateName(id) {
            const input = document.getElementById('fname');
            const result = document.getElementById('resultFName');
            const textRegex = /^[a-zA-Z ]+$/;
            if (!input || !result) return false;  // Ensure elements exist
            
            if (input.value === '') {
                result.textContent = 'This field cannot be empty!';
                return false;
            } else if (!textRegex.test(input.value)) {
                result.textContent = 'Please enter a valid name!';
                return false;
            }
            return true;
        }

        function validateSurname(id) {
            const input = document.getElementById('lname');
            const result = document.getElementById('resultLName');
            const textRegex = /^[a-zA-Z ]+$/;
            if (!input || !result) return false;  // Ensure elements exist
            
            if (input.value === '') {
                result.textContent = 'This field cannot be empty!';
                return false;
            } else if (!textRegex.test(input.value)) {
                result.textContent = 'Please enter a valid last name!';
                return false;
            }
            return true;
        }
    
        function validateEmail(id) {
            const input = document.getElementById(id);
            const result = document.getElementById('resultEmail');
            const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
            if (!input || !result) return false;  // Ensure elements exist
            
            if (input.value === '') {
                result.textContent = 'This field cannot be empty!';
                return false;
            } else if (!regex.test(input.value)) {
                result.textContent = 'Please enter a valid email address!';
                return false;
            }
            return true;
        }
    
        function validatePhone(id) {
            const input = document.getElementById(id);
            const result = document.getElementById('resultPhone');
            const regex = /^\d{9}$/;
            if (!input || !result) return false;  // Ensure elements exist
            
            if (input.value === '') {
                result.textContent = 'This field cannot be empty!';
                return false;
            } else if (!regex.test(input.value)) {
                result.textContent = 'Please enter a valid phone number!';
                return false;
            }
            return true;
        }

        function validateMonth(id) {
            const input = document.getElementById(id);
            const result = document.getElementById('resultMonth');
            if (!input || !result) return false;

            if (input.value === '') {
                result.textContent = 'Please celsect a month!';
                return false;
            }
            return true;
        }

        function validateDay(id) {
            const input = document.getElementById(id);
            const result = document.getElementById('resultDay');
            if (!input || !result) return false; // Ensure elements exist
        
            if (input.value === '') {
                result.textContent = 'Please select a day!';
                return false;
            }
            return true;
        }
        
    
        function validateCheckboxes() {
            const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            const result = document.getElementById('resultCheckboxes');
            if (!result) return false;  // Ensure element exists
            
            if (checkboxes.length === 0) {
                result.textContent = 'Please select at least one class!';
                return false;
            }
            return true;
        }
    
        function validateRadio() {
            const radio = document.querySelectorAll('input[type="radio"]:checked');
            const result = document.getElementById('resultRadio');
            if (!result) return false;  // Ensure element exists
            
            if (radio.length === 0) {
                result.textContent = 'Please select a payment method!';
                return false;
            }
            return true;
        }
    });
    




const navLinks = document.querySelectorAll('.nav_link');
const navMenu = document.querySelector('.nav_menu');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');

        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector('.nav_bar').offsetHeight; // Get the navbar height

        if (targetElement) {
            const targetPosition = targetElement.offsetTop - navbarHeight; // Adjusted target position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

         if (window.innerWidth < 886) {
            navMenu.classList.remove('nav--visible');
         }   
        }
    });
    });

function populateDays(month) {
    const selectDays = document.getElementById('days');
    selectDays.innerHTML = '<option value="">Select a day</option>'; // Clear existing options

    const longMonths = ['January', 'March', 'May', 'July', 'August', 'October', 'December'];
    let daysInMonth = longMonths.includes(month) ? 31 : 30;

    if (month === 'February') {
        // Simplistic leap year check. For a more accurate check, you might need the year as well.
        daysInMonth = 28;
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectDays.appendChild(option);
    }
}

document.getElementById('month').addEventListener('change', function() {
    populateDays(this.value);
});

