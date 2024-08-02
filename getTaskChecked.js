//Funcion que trae mediante fetch las tareas y las pinta en el DOM
const getTaskChecked = (tasks, $fragment, $template, $checkTask, $titleTask, $taskList, $btnDelete) => {
        console.log(tasks);
        //Recorremos los datos traidos
        tasks.forEach(e=> {
            $checkTask.dataset.id = e.id;
            $checkTask.dataset.status= e.dlt;
            $btnDelete.dataset.id = e.id;
            $titleTask.textContent = e.task;
            let $clone = document.importNode($template, true);
            $fragment.appendChild($clone);
        });
       
        $taskList.appendChild($fragment);
}
export default getTaskChecked;