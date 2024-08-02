// Importaciones

import getAllTask from "./getAllTask.js";
import postTask from "./postTask.js";
import checkTask from "./checkTask.js";
import deleteDef from "./deleteDef.js";

const d = document;

// Una vez cargada la pagina se empiezan a ejecutar las funciones
d.addEventListener("DOMContentLoaded", () =>{
//--------------------------------------------
    //Poner el foco en input
    const $inputTask = d.getElementById("newtask");
    $inputTask.focus();
//--------------------------------------------
    //Variables del DOM para todas las listas de tareas
    const   $fragment = d.createDocumentFragment(),
    //Variables del DOM List Pending
    $templateListPending = d.getElementById("listTemplate").content,
    $checkTaskPending = $templateListPending.querySelector(".form-check-input"),
    $titleTaskPending = $templateListPending.querySelector(".form-check-label"),
    $taskListPending = d.getElementById("taskListPending"),
    //Variables del DOM List Checked
    $templateListChecked = d.getElementById("listTemplateChecked").content,
    $checkTaskChecked = $templateListChecked.querySelector(".form-check-input"),
    $titleTaskChecked = $templateListChecked.querySelector(".form-check-label"),
    $taskListChecked = d.getElementById("taskListChecked"),
    $btnDelete = $templateListChecked.getElementById("dltdef");

    //Funcion que trae todas las tareas
    getAllTask(
        $fragment,
        $templateListPending,
        $checkTaskPending,
        $titleTaskPending,
        $taskListPending,
        $templateListChecked,
        $checkTaskChecked,
        $titleTaskChecked,
        $taskListChecked,
        $btnDelete
    );
//--------------------------------------------
    // Evento que ejecuta la funcion cuando se hace click en el boton agregar
    d.addEventListener("submit", postTask);
//--------------------------------------------
    // Evento que detecta el cambio de los check y ejecutando la funcion correspondiente
    const $allTaskList = d.getElementById("alltasklist")
    $allTaskList.addEventListener("change", (e) => {
        if(e.target.id == 'firstCheckbox'){
            if(e.target.checked){
                checkTask(e.target.dataset.id, e.target.dataset.status);
            }
        }
    });
//--------------------------------------------
    //Evento que detecta que se hizo click en un boton de eliminar definitivamente una tarea
    $taskListChecked.addEventListener("click", (e)=>{
        if(e.target.matches(".btn-danger")){
            deleteDef(e.target.dataset.id);
        }
    })
});








