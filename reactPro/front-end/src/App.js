import { Header } from './js/Header';
import { Item } from './js/Item';
import { Button } from './js/Button';
import './App.css';
import React from 'react';
import { TodoList } from './js/TodoList';

const tasks = [{text:'Revisar examenes', completed: true},
                {text:'Escrbir', completed: false},
                {text:'Pegar', completed: true}, 
                {text:'cortar', completed: false},
                {text:'Leer', completed: true}]


function App() {
  return (
    <React.Fragment>
      <Header total={5} completedados={3} />
      <Header total={10} completedados={7} />
      <Header total={15} completedados={12} />

      <TodoList>
        {tasks.map(task => ( <Item key={task.text} 
        text={task.text} completed={task.completed}/>
        ))}
      </TodoList>
      
    </React.Fragment>
  );
}

export default App;