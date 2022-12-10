// Assignment code here

//Function to accept length from user and validate it

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


//Function to accept Character type from user and validate it 
var acceptcharType = function()
{ //Provide choice to user to select character type
  var promptcharType = window.prompt("Please enter type of characters, select from following choices (1 or 2):\n"+
                                      "1 : lowercase,uppercase characters and numbers\n"+
                                      "2 : lowercase,uppercase characters, numbers and special characters ");
  while (promptcharType===null)//If user select Cancel, come out of program
  { 
   return 1;
  }