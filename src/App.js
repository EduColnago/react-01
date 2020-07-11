import React, { Component } from 'react';
import classes from './App.module.css';
import Todolist from './lista_tarefa/todolist';
import Todolistbtn from './btn/todolistbtn'
import Todolistaddtarefa from './add_tarefa/todolistaddtarefa'



class App extends Component {
    state={
        lista_tarefa:[
            {id: 1,tarefa:"lavar louça",ative: true},
            {id: 2,tarefa:"academia",ative: true},
            {id: 3,tarefa:"limpar o quarto",ative: true}
        ],
        index: 4,
        
    }
    ListEdit(e,id){
        const tarefaIndex = this.state.lista_tarefa.findIndex(p=>{
            return p.id===id;
        });
       
        const lista={...this.state.lista_tarefa[tarefaIndex]};
        const lista_tarefa=[...this.state.lista_tarefa];
        lista_tarefa[tarefaIndex]["ative"]=!lista_tarefa[tarefaIndex]["ative"]
        this.setState({lista_tarefa:lista_tarefa}); 
    }

    
    ListRemove(index){
       const tarefas= [...this.state.lista_tarefa];
       tarefas.splice(index,1);
        this.setState({lista_tarefa:tarefas});
    }
   
        
    ListAdd=(e,id)=>{   
        const tarefaIndex = this.state.lista_tarefa.findIndex(p=>{
            return p.id===id;
        });
       
        const lista={...this.state.lista_tarefa[tarefaIndex]};
        lista.tarefa=lista.tarefa=e.target.parentNode.firstChild.value;
        lista["ative"]=!lista["ative"]
        const lista_tarefa=[...this.state.lista_tarefa];
        lista_tarefa[tarefaIndex]=lista;
        this.setState({lista_tarefa:lista_tarefa}); 
       
    }
    Addtarefa=(e)=>{   
    this.setState({index:this.state.index+1})
    const lista_tarefa=[...this.state.lista_tarefa];
    const nova_tarefa={id:this.state.index,tarefa:e.target.parentNode.firstChild.value,ative:true};
    lista_tarefa.push(nova_tarefa)
    this.setState({lista_tarefa:lista_tarefa});
    
    }
  
    render(){
      
    return (
       <div className={classes.App}>
           <h1 className={classes.titulo}>react to-do list</h1>
            <ul>
                {this.state.lista_tarefa.map((lista_tarefa,index)=>{
                   return <li key={lista_tarefa.id}>
                       <Todolist algo={this.state.lista_tarefa[index].ative}  todo= {lista_tarefa.tarefa} 
                       tarefa={this.state.lista_tarefa[index].tarefa}
                       add={(e)=>this.ListAdd(e,lista_tarefa.id)} />
                       <Todolistbtn  edit={(e)=>this.ListEdit(e,lista_tarefa.id)} del={()=>this.ListRemove(index)} />
                   </li>
                })}
                <li> <Todolistaddtarefa addtarefa={(e)=>this.Addtarefa(e)}/></li>
            </ul>
           
        </div>
    );
    }
}

export default App;