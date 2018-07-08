export class Init{
    load(){
        if(localStorage.getItem('todos') === null 
    || localStorage.getItem('todos') === undefined ){
        console.log('No todos found..creating');
        let todos = [
            {
                text: 'Todo Project'
            },
            {
                text: 'Homework'
            },
            {
                text: 'And sleep'
            }
        ];
        localStorage.setItem('todos', JSON.stringify(todos));
        return
        } else {
            console.log('Found todos');
        }
    }
}