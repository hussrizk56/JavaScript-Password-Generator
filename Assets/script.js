
var acceptLength = function()
{ //alphabates and special characters validation
  var formatStr = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
 
  //Provide prompt to user to enter password length
  var promptLength = window.prompt("Please enter length of the password, length can be between 8 to 128 characters");

  var alphanumStr = (/[A-Za-z]/).test(promptLength);
  var specialChar = formatStr.test(promptLength);

  while(promptLength===null)//If user select Cancel, come out of program
  { return 1;
  }
  
  if (parseInt(promptLength) < 8 || parseInt(promptLength) > 128 || promptLength ==="" || alphanumStr || specialChar)
  {
    window.alert("Please enter number between 8 to 128.");
    return 0;
  }

  return promptLength; // return user entered length
};
