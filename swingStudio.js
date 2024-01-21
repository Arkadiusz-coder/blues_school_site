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




/*
document.addEventListener('DOMContentLoaded', function () {
    const submit = document.getElementById('submit');
    const resultSubmit = document.getElementById('resultSubmit');

    submit.addEventListener('click', (event) => {
        event.preventDefault();

        let isValid = true;

        const name = document.getElementById('fname').value;
        const surname = document.getElementById('lname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const month = document.getElementById('month').value;
        const birthDay = document.getElementById('birthDay').value;
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
        const radio = document.querySelectorAll('input[type="radio"]:checked');

        // Reset validation messages
        document.getElementById('resultFName').textContent = '';
        document.getElementById('resultLName').textContent = '';
        document.getElementById('resultEmail').textContent = '';
        document.getElementById('resultPhone').textContent = '';
        document.getElementById('resultMonth').textContent = '';
        document.getElementById('resultDay').textContent = '';
        document.getElementById('resultCheckboxes').textContent = '';
        document.getElementById('resultRadio').textContent = '';

        // Name validation
        if (name === '') {
            document.getElementById('resultFName').textContent = 'This field cannot be empty!';
            isValid = false;
        } else if (!/^[a-zA-Z ]+$/.test(name)) {
            document.getElementById('resultFName').textContent = 'Please enter a valid name!';
            isValid = false;
        }

        if (surname === '')
   {
    resultSurname.textContent = 'This field cannot be empty!';
    isValid = false;
   }
   else if (!/^[a-zA-Z ]+$/.test(surname))
   {
    resultSurname.textContent = 'Please enter a valid last name!';
    isValid = false;
   }

   if (email === '')
   {
    resultEmail.textContent = 'This field cannot be empty!';
    isValid = false;
   }
   else if (!/^[w.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email))
   {
    resultEmail.textContent = 'Please enter a valid email address!';
    isValid = false;
   }

   if (phone === '') 
   {
    resultPhone.textContent = 'This field cannot be empty!';
    isValid = false;
   } 
   else if (!/^\d{9}$/.test(phone)) 
   {
    resultPhone.textContent = 'Please enter a valid phone number!';
    isValid = false;
   }

   if (month === '') 
   {
    resultMonth.textContent = 'This field cannot be empty!';
    isValid = false;
   } 
   else if (!/^d{2}$/.test(month)) 
   {
    resultMonth.textContent = 'Please enter a valid month!';
    isValid = false;
   }

   if (birthDay === '') 
   {
    resultDay.textContent = 'This field cannot be empty!';
    isValid = false;
   } 
   else if (!/^\d{1,2}$/.test(birthDay)) 
   {
    resultDay.textContent = 'Please enter a valid day!';
    isValid = false;
   }


        // Checkbox validation
        if (checkboxes.length === 0) {
            document.getElementById('resultCheckboxes').textContent = 'At least one option must be checked!';
            isValid = false;
        }

        // Radio button validation
        if (radio.length === 0) {
            document.getElementById('resultRadio').textContent = 'One form of payment must be checked!';
            isValid = false;
        }

        // Final submission result
        if (isValid) {
            resultSubmit.textContent = 'Form submitted successfully!';
        } else {
            resultSubmit.textContent = 'Fill the form correctly!';
        }
    });
    });


    const selectDays = document.getElementById('days');

    function populateDays(month, year) {
        // Clear existing options
        selectDays.innerHTML = '<option value="">Select a day</option>';

        let daysInMonth;
        if (month === '02') { // February, needs to handle leap year
            daysInMonth = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
        } else {
            // Months with 31 days
            const longMonths = ['01', '03', '05', '07', '08', '10', '12'];
            daysInMonth = longMonths.includes(month) ? 31 : 30;
        }

        for (let i = 1; i <= daysInMonth; i++) {
            const option = document.createElement('option');
            option.value = i < 10 ? `0${i}` : i.toString(); // Leading zero for days < 10
            option.textContent = i;
            selectDays.appendChild(option);
        }
    }

    // Call this function when month or year changes
    // populateDays(selectedMonth, selectedYear);

    function updateInput(selectedValue) {
        document.getElementById('selectedMonth').value = selectedValue;
        // After updating the month, you might want to repopulate the days
        // populateDays(selectedValue, selectedYear);
    }



/*
????????????????????????????
const registerBtn = document.querySelector('.btn');
registerBtn.addEventListener('click', (event) => {
     event.preventDefault();
     const targetBtnId = registerBtn.getAttribute('href');
     const getElement = document.querySelector(targetBtnId);
     const navbarHeight = document.querySelector('.nav_bar').offsetHeight;
     const menuHeight = document.querySelector('.nav_menu').offsetHeight;

     if (getElement)
     {
        const targetPosition = getElement.offsetTop - navbarHeight - menuHeight;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
     }
});
*/
