//Funcion que trae mediante fetch las tareas y las pinta en el DOM
const getTaskPending = (tasks, $fragment, $template, $checkTask, $titleTask, $taskList) => {
        console.log(tasks);
        //Recorremos los datos traidos
        tasks.forEach(e=> {
            $checkTask.dataset.id = e.id;
            $checkTask.dataset.status= e.dlt;
            $titleTask.textContent = e.task;
            let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);
        });
       
        $taskList.appendChild($fragment);
}
export default getTaskPending;