const addInput = document.getElementById('add');
const runInput = document.getElementById('search');
const showList = document.getElementById('show-list');
const listItem = document.getElementById('list-item');
const clear = document.getElementById('clear');
const close = document.querySelector('span')

const addNewlist = () => {
  var newItem = addInput.value;
  if (newItem == ""){
    alert( 'Add a task')
  }


  // CREATE NEW LIST
  let list = document.createElement('li');
  let newList = document.createTextNode(newItem);
  list.appendChild(newList);
  listItem.appendChild(list);

  let link = document.createElement('button')
  link.className = "btn delete-item";
  link.innerHTML = `<button class="btn-sm btn btn-success " type="submit">Delete</button>
  `;
  list.appendChild(link);
 
};

function removeTask(e){
  if (e.target.parentElement.classList.contains("delete-item")){
      e.target.parentElement.parentElement.remove()
  }
}

function clearTasks(){
  listItem.innerHTML = "";
}


runInput.addEventListener('click', addNewlist);
listItem.addEventListener('click', removeTask);
clear.addEventListener('click', clearTasks);



