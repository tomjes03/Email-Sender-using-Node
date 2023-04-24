//function that generates random password

//install  and require generate-password
var generator = require('generate-password');

var password = generator.generate({
    length : 8,
    numbers : true
})

console.log(password)