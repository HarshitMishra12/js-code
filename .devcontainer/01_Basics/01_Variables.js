const accountId = 121212
let accountEmail = "harshitgoogle.com"
var accountPassword = "12345"
accountCity = "Pune" //when we don't write words like var,const,let,etc then we are able to change the value any time otherwise not.
let accountState;
// accountId = 2 // not allowed

console.log(accountId);
/*
prefer not to use var
because of issue in block scope and funtional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
