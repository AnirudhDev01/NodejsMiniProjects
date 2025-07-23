// This project is built by Anirudh
// To run this app type: "node app.js" in the cli 
import readline from 'readline'; // It is a in-built module provided by nodejs
const rl = readline.createInterface({
    input:process.stdin, // To take the input from console
    output:process.stdout // To show the output on console
})
// Creating an empty array to store the todos
const todos = [];
// Showing menu for user through console
const showMenu = () => {
    console.log("\n1. Add a task");
    console.log("2. View all tasks");
    console.log("3. Exit");
    rl.question("Choose an option", handleInput);    
}
// Handling the input values which are provided by user 
// 1 -> for adding new task/todo
// 2 -> for displaying the todos
// 3 -> for deleting the task/todo
const handleInput = (option) =>{
    if(option === "1"){
        rl.question("Enter the task", (task)=>{
            todos.push(task);
            console.log("Task added: ", task)
            showMenu();
        })
    }else if(option === "2"){
        console.log("Your todos list");
        todos.forEach((task,index)=>{
            console.log(`${index+1}: ${task}`);
        })
        showMenu()
    }else if(option === "3"){
        console.log("Good bye!");
        rl.close();
    }else{
        console.log("Invalid option! Please try again");
        showMenu();
    }
}

// Showing the menu when the app starts by calling the function
showMenu();