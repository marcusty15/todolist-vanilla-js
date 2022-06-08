// colocá las declaraciones acá
let listDeTareas = [];

let inputTarea = document.querySelector("#task");
let inputPrioridad = document.querySelector("#prioridad");
let ul = document.querySelector("#lista-de-tareas");

//declaramos el class Tarea

class Tarea {
  constructor(nombre, prioridad) {
    (this.nombre = nombre), (this.prioridad = prioridad);
  }
  agregarTarea(array) {
    listDeTareas.push(array);
  }
}

const mostrarLista = () => {
    ul.innerHTML = ''
  listDeTareas.forEach((tarea, index) => {
    ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center"
        >${tarea.nombre}-Prioridad:${tarea.prioridad}<i id=${index} class="far fa-times-circle" onclick="eliminar(event)"></i></li>`;
  });
  
};
let id = document.querySelector(`#index`)
const todoList = (event) => {
  event.preventDefault();
  
  const newObjet = new Tarea(inputTarea.value, inputPrioridad.value);
  if(inputTarea.value==='' || inputPrioridad.value==='Prioridad'){
    return alert('Debe completar todos los campos')
  }
  newObjet.agregarTarea(newObjet);
  mostrarLista();
  inputTarea.value = ''
};

const eliminar = (event) => {
  listDeTareas.splice(event.target.id,1);
  mostrarLista();
  console.log(event);
  console.log(listDeTareas);
};
