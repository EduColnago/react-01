import React from 'react';
import classes from './todolist.module.css';

const todolist =(props)=>{
    return(
        <div>   
            <span className={props.algo?classes.ative:classes.inative}>{props.todo}</span> 
            <div className={!props.algo?classes.ative:classes.inative} >
                 <input type="text" placeholder={props.tarefa} /><button onClick={props.add} >add</button>
            </div>
        </div>
   

    );
}

export default todolist
