import readline from 'readline'; // It is a in-built module provided by nodejs
const rl = readline.createInterface({
    input:process.stdin, // To take the input from console
    output:process.stdout // To show the output on console
})
const todos = [];
const showMenu = () => {
    console.log("\n1. Add a task");
    console.log("2. View all tasks");
    console.log("3. Exit");
    rl.question("Choose an option", handleInput);    
}
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


showMenu();