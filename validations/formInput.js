const isEmpty = require('../utils/isEmpty')


function validateFormInput(userData) {

    var errors = {}
    console.log("userdata", userData);

    //checking for empty, null or undefined
    userData.phoneNumber = isEmpty(userData.phoneNumber) ? '' : userData.phoneNumber

    //checking for name -> null, empty, or undefined
    //userData.name = isEmpty(userData.name) ? '' : userData.name

    //validating phone Number
    var letters = /[0-9]{10}/
    var string = userData.phoneNumber.trim();
    if (string.length !== 10 || string.match(letters) === null) {
        errors["phoneNumber"] = "Invalid Phone Number"
    }

    //validating name
    if (!isNaN(userData.name) || userData.name.match(/\d+/g) != null) {

        errors["name"] = "Only Alphabets are allowed"
    }

    //Validating dob
    var dob = new Date(userData.dob)
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    if (age < 18) {
        errors["dob"] = "Age should be equal to or more than 18 years"
    }

    //validate email
    var email_check = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(userData.email)
    if (email_check === false) {
        errors["email"] = "Invalid email entered"
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateFormInput;