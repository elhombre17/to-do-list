const postTask = async (e) => {

    const $form = document.getElementById("form");

    if(e.target === $form){
        e.preventDefault();
    }

    if(!e.target.id.value){
        //CREATE - POST
        try {
            let options ={
                method: "POST",
                headers:{
                    "Content-type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    task: e.target.tarea.value,
                })
            },
            res = await fetch("backend.php", options);

            //Recargar pagina para ver los cambios
            location.reload();
        } catch (err) {
            console.log("Ocurrio un error al querer cargar una nueva tarea ", err);
        }
    }
}   
export default postTask;