<?php
function deleteDef(){
    //Recibimos el id de la tarea que queremos eliminar
    $idTask = $_GET['id'];
    //Conectamos la base de datos
    $conn =  mysqli_connect('localhost', 'root', 'root', 'todolist');
    //Consulta para actualizar campo dlt que identifica si la tarea esta hecha o no
    $queryDelete = "DELETE FROM tareas WHERE tareas.id = $idTask";
    //Ejecutar consulta
    $delete =  mysqli_query($conn, $queryDelete);
    //Vaciamos el conjunto de resultados de la consulta
    mysqli_free_result($delete);
    //Cerramos la conexion con la base de datos 
    mysqli_close($conn);
}
?>