import React from 'react';
import classes from './todolistaddtarefa.module.css';


const todolistaddtarefa=(props)=>{
    return(
        <div className={classes.final}>
            <input type="text" placeholder="add nova tarefa" />
            <button onClick={props.addtarefa}>ADD</button>
        </div>
    );   
}
export default todolistaddtarefa