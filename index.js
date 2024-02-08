function validateCredentials(email, password) {
    // Declaring the valid email and password
    let validEmail = "MusinguziSimon@gmail.com";
    let validPassword = "2200720505@2024";
 
    // Check if the provided email and password correspond the default ones
    if (email === validEmail && password === validPassword) {
        console.log("User email is  " + email +" login succesful! ");
    } else {
        console.log("Invalid user details");
    }
}
 // calling code
 validateCredentials("MusinguziSimon@gmail.com", "2200720505@2024");


