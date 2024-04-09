document.addEventListener("DOMContentLoaded", () => {
  //grabs all the necessary DOM elements.

  //set the newTaskForm to a variable.
  const newTaskForm = document.querySelector('form');

  newTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newToDo = e.target.querySelector('#new-task-description').value

    buildToDo(newToDo);

    newTaskForm.reset();
  })
});

  //when user submits, we pass in the targeted input into buildToDo function
  function buildToDo(newToDo){
    //first, the buildToDo function creates an li element and a button element. 
    const taskLi = document.createElement('li');
    const deleteButton = document.createElement('button');

    //next, we set the textContent of the btn element to 'x'.
    deleteButton.textContent = 'x';

    //after, we set the textContent of the li element to the todo parameter.
    //remember, when we submit, we are passing in targeted input into the parameters. 
    taskLi.textContent = newToDo;

    taskLi.appendChild(deleteButton);

    document.querySelector('#tasks').appendChild(taskLi);
  
  
    deleteButton.addEventListener('click', handleDelete);
  }

  //when the button element with the textContent of 'x' is clicked, this function will run.
  function handleDelete(e){
    //this function targets the parent node of the button and removes it.
    //in this case, the parentNode of the button element is the li element, so the li is removed from the list.
    e.target.parentNode.remove();
  }
