
import './reset.css';
import './style.css';
import ToDoList from './modules/toDoList.js';
import LocalStorage from './modules/localStorage.js';
import UserInterface from './modules/userInterface.js';
import CompleteToDoList from './modules/CompleteToDoList.js';


document
  .querySelector('#refresh')
  .addEventListener('click', () => window.location.reload());


document.addEventListener('DOMContentLoaded', () => {
  UserInterface.showToDoLists();
  UserInterface.removeToDoLists();
  UserInterface.updateDesc();
  CompleteToDoList.compToDoList();
  CompleteToDoList.clearComp();
});


document.querySelector('.form-text form').addEventListener('submit', (e) => {

  e.preventDefault();

  const inputText = document.querySelector('.text');
  const todolists = LocalStorage.getToDoLists();
  const desc = inputText.value;
  const index = todolists.length + 1;
  const comp = false;


  const newtodolists = new ToDoList(index, desc, comp);

  UserInterface.addToDoLists(newtodolists);

  
  LocalStorage.addToDoLists(newtodolists);

 
  UserInterface.clearFields();

  
  window.location.reload();
});
