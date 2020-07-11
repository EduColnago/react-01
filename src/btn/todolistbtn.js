import React from 'react';
import classes from './todolistbtn.module.css';

const todolistbtn =(props)=>{
    return(
        <div>   
             <button className={classes.edit} onClick={props.edit}>Edit</button> 
             <button className={classes.del} onClick={props.del}>X</button>
        </div>
    );
}

export default todolistbtn
