
// array to store generated numbers
let generatedNumbersaArray = [];

function generateNumber() {


    //declare the varaiable for the output and assign a reference to the HTML p tag 
    // retrieve the user input number from the HTML input field
    let displayResultMessage = document.getElementById('displayResultMessage');
    var userInput = (document.getElementById('userInput').value);

    var pasrsedUserInput = parseInt(userInput); // convert user input to number
    displayResultMessage.style.color = 'white';  // back to the text color white


    // if validation function returns true proceed to generate the numbers
    if (validateField(pasrsedUserInput, displayResultMessage)) {

        // iterates untill less than the user input to generate desired numbers.
        for (let i = 0; i < pasrsedUserInput; i++) {
            let rundomNumber = Math.floor((Math.random() * 45) + 1);
            if (generatedNumbersaArray.includes(rundomNumber))  //  if number does not existed in the array push to it
            {
                i -= 1;
                continue
            }
            else {
                generatedNumbersaArray.push(rundomNumber);
            }
        }

        
        // Iterate array  to fetch numbers and 
        //then display the numbers on html page 
        generatedNumbersaArray.forEach(function (e) {
            displayResultMessage.innerHTML += e + ' ';
        })

        // Loop run while there is an elenement in the array
        while (generatedNumbersaArray.length) {
            // Remove elements from the array 
            generatedNumbersaArray.pop();
        }
    }
    else {
        // if validateField function return false, set text color to red
        displayResultMessage.style.color = 'red';
    }
}

// Function will validate the field 
function validateField(number, errorMessage) {

    // if input is not number or number not between 5 and 20 
    //user will be notified to input a valid number
    if (number < 5) {
        errorMessage.innerHTML = 'The numbers must be a minimum of 5 characters';
        return false;
    }
    else if (number > 20) {
        errorMessage.innerHTML = 'The numbers must be a maximum of 20 characters';
        return false;
    }
    else if (isNaN(number)) {
        errorMessage.innerHTML = 'must be inputted a valid numbers 5 to 20';
        return false;
    }
    else {
        // If none of the conditions above are met, the validation is successful
        // Clearing any previous error message and return true 
        errorMessage.innerHTML = '';
        return true;
    }
}

