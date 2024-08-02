const checkTask = async (id, status) => {

    let newStatus;
    if(status == 1){
        newStatus = 0;
    }else if(status == 0){
        newStatus = 1;
    }

    try {
        let options ={
            method: "PATCH",
            headers:{
                "Content-type": "application/json; charset=utf-8"
            },
            body: JSON.stringify({
                dlt: newStatus,
            })
        },
        res = await fetch(`backend.php?id=${id}`, options);

         location.reload();
    } catch (err) {
        console.log("Ocurrio un error al querer cambiar el estado de la tarea", err);
    }
}
export default checkTask;