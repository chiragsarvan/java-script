const accountID = 741852
let accountpass = "chirag"
var accountEmail = "chirag@gmail.com"
accountcity = "rajkot" 
let accountState ;

// accountID = 123 // not allowed

accountpass = "123"
accountEmail ="cm@gmail.com"
accountcity = "gondel"
/*
prefer not use var
becouse of issue in block scop and functional scop
 */

console.log("this is id",accountID);

console.table([accountpass,accountEmail,accountcity,accountState]);