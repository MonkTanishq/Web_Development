/* "new" -  Add a Todo
   "list" - List all the Todo
   "delete" - Remove specific Todo
   "quit" - Quit App
*/
let input = prompt("What would you like to do?");
const todos = ['You should do DSA', 'Print Hello World']
while(input !== 'quit' && input !== 'q')
{
    if(input === 'list')
    {
        console.log('*****************');
        for(let i=0; i<todos.length; i++)
        {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************');
    }
    else if(input === 'new')
    {
        const newTodo = prompt("Ok, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`); 
    }
    else if(input === 'delete')
    {
        const index = parseInt(prompt("Ok, Enter an index to delete:"));
        if(todos.length === 0) console.log("TODO IS EMPTY! (Enter 'new' to Add Something");
        else if(!Number.isNaN(index))
        {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        }
        else
            console.log("Unknown Index")
    }
    input = prompt("What would you like to do?");
}
    
console.log("OK QUIT THE APP!");
