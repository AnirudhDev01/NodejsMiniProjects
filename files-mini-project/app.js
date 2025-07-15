// This project is created by Anirudh
import readline from 'readline'; // readline is inbuilt package used in nodejs to read and write cli arguments
import fs from 'fs'; // fs module is used to handle to operations done on a file
const rl = readline.createInterface({ 
    input: process.stdin, // Used to take command line input
    output: process.stdout // Shows the output on console
})
const CreateFiles = () =>{ // Arrow function being called to create the files
  rl.question("Enter the name of the file: ",(filename)=>{ // Asking the user to enter the name of the file he/she wants to create
    rl.question("Enter the content for the file: ",(content)=>{ // Asking user to enter the content to be present in the file he/she created
        fs.writeFile(`${filename}.txt`,`${content}`,(err)=>{ // Using fs module to create the file
            if(err){
                console.error(err) // Throwing the error if any occurs
            }else{
                console.log(`${filename}.txt has been created`) // Creating a .txt file with user specified file name
            }
            rl.close() // Closing the readline
        })
    })
  })
}
CreateFiles(); // This function is called when the program is executed
// To run this program run the command: node app.js
// Don't forget to include package.json for working of this project