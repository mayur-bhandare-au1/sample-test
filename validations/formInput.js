const isEmpty = require('../utils/isEmpty')


function validateFormInput(userData) {

    var errors = {}
    console.log("userdata",userData);

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

    return {
        errors: errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateFormInput;