//create a file named hello-world
//Write a program to print "HELLO WORLD" to the console
const greeting = "HELLO WORLD"
console.log(greeting)


//First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
var fs = require('fs');

fs.writeFile("welcome.txt", "Hello Node", (err, data) =>  {
    (err) ? console.error : console.log("file opened successfully");

    //Second, create a program that reads and console.log data from hello.txt
    fs.readFile("welcome.txt", (err, data) => {
        (err) ? console.log(err) : console.log(data.toString());
    })
})

//Create a file named "password-generator"
