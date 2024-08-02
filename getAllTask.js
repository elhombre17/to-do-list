/*
    Importamos las funciones que se encargan de imprimir en navegador
    las diferentes listas de tareas
*/
import getTaskPending from "./getTaskPending.js"; //Lista de pendientes
import getTaskChecked from "./getTaskChecked.js"; //Lista de hechos
//Funcion que trae mediante fetch las tareas y arma una lista separando en tareas pendientes y hechas
const getAllTask = async ($fragment,
    $templateListPending,
    $checkTaskPending,
    $titleTaskPending,
    $taskListPending,
    $templateListChecked,
    $checkTaskChecked,
    $titleTaskChecked,
    $taskListChecked,
    $btnDelete) => {
    try {
        //Traemos los datos mediante fetch
        let res = await fetch("backend.php"),
        tasks = await res.json();
        console.log(tasks);
        //Excepcion en caso de la respuesta sea erronea
        if(!res.ok) throw {status: res.status, statusText : res.statusText};
        let listTaskPending = [], listTaskChecked = [];
        //Recorremos los datos traidos por fetch
        tasks.forEach(e => {
            if(e.dlt == 0){
                console.log(e.dlt);
                listTaskPending.push({id: e.id, task: e.task, dlt: e.dlt})
            }else if(e.dlt == 1){
                listTaskChecked.push({id: e.id, task: e.task, dlt: e.dlt})
            }
        });
        
        //Imprimir en el navegador la lista de tarea pendientes
        getTaskPending(listTaskPending, $fragment, $templateListPending, $checkTaskPending, $titleTaskPending, $taskListPending);

        //Imprimir en el navegador la lista de tareas hechas
        getTaskChecked(listTaskChecked, $fragment, $templateListChecked, $checkTaskChecked, $titleTaskChecked, $taskListChecked, $btnDelete);
    } catch (err) {
        let message = err.statusText || "Ocurrio un errrror";
        console.log(message);
    }
}
export default getAllTask;