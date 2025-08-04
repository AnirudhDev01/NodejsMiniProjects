// This project is created by Anirudh
// Importing https module to get the url
import https from "https";
// Download the chalk package using npm install chalk
import chalk from "chalk";
// Defining function getJoke to fetch api and get joke
const getJoke = () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    https.get(url,(response)=>{
        let data = ""; // Initializing data as empty until we get response
        response.on('data',(chunk)=>{ 
            data+=chunk; // If response gets the data we are appending chunks of data to the variable
        });
        response.on('end',()=>{ // After we get the response in the end we are parsing the data and fetching the jokes
            const joke = JSON.parse(data);
            console.log(`Here is a random ${joke.type} joke`);
            console.log(chalk.bgGreen(`${joke.setup}`)); // Using the chalk package to beautify the output on console
            console.log(chalk.bgBlue(`${joke.punchline}`));
        });
        response.on('error',(error)=>{ // If any error occurs printing error message on console
            console.log("Error: ",error.message);
        })
    })
}
getJoke(); // Calling the function whenever the app is started
// Start the app using 'node joke_generator.js'