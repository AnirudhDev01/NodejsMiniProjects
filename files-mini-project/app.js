import readline from 'readline';
import fs from 'fs';
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
const CreateFiles = () =>{
  rl.question("Enter the name of the file: ",(filename)=>{
    rl.question("Enter the content for the file: ",(content)=>{
        fs.writeFile(`${filename}.txt`,`${content}`,(err)=>{
            if(err){
                console.error(err)
            }else{
                console.log(`${filename}.txt has been created`)
            }
            rl.close()
        })
    })
  })
}
CreateFiles();