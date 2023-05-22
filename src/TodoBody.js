import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import { useState } from 'react';

function TodoBody(){
    const[todo, setTodo]= useState('')
    const[items, setItems] = useState([]);
        
    function  todoInput(a){
        setTodo(a.target.value)
    }


    function addTodo(){
        if(!todo){
            alert('Enter a todo!.')
        }
        const lists = {
            id: Math.floor(Math.random() * 1000),
            value: todo
        }

        setItems(oldList => [...oldList, lists ])

        setTodo('');
        console.log(items)  
    } 

    function deleteItem(id){
        const newArray = items.filter(lists => lists.id !== id)
        setItems(newArray)
    }
    return(
        <div>
             <h1 className="text-center todo-header ">TODO-LIST</h1>
            <div className='add-div'>
                <input className='todo-input' placeholder='Type a todo' onChange={todoInput} >
                </input>
                <button className='todo-button' onClick={addTodo}> ADD NEW TODO</button>
            </div>
            <ul className='text-center'>
                {items.map(lists =>{
                    return(
                        <li key={lists.id}>{lists.value}  <button className='delete-button' onClick={()=> deleteItem(lists.id)}>Delete</button></li>
                    )
                })}
            </ul>
        </div>
    )

}
export default TodoBody