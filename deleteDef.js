const deleteDef = async (id) => {
    try {
        let options ={
            method: "DELETE",
            headers:{
                "Content-type": "application/json; charset=utf-8"
            },
        },
        res = await fetch(`backend.php?id=${id}`, options);
        console.log("toy", id);
        location.reload();
    } catch (err) {
        console.log("Ocurrio un error en la eliminacion de la tarea ", err);
    }
}
export default deleteDef;