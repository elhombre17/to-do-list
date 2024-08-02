<?php
function patchState(){
    //Recibimos el id de la tarea que queremos cambiar a estado
    $idTask = $_GET['id'];
    //Traemos el nuevo estatus que debemos dar a la tarea 
    $status = json_decode(file_get_contents('php://input'), true);
    //Pasamos el estatus a una variable
    $dlt = $status['dlt'];
    //Conectamos la base de datos
    $conn =  mysqli_connect('localhost', 'root', 'root', 'todolist');
    //Consulta para actualizar campo dlt que identifica si la tarea esta hecha o no
    $queryUpdate = "UPDATE tareas SET dlt = '$dlt' WHERE tareas.id = $idTask";
    //Ejecutar consulta
    $update =  mysqli_query($conn, $queryUpdate);
    //vaciamos el conjunto de resultados de la consulta
    mysqli_free_result($update);
    //cerramos la conexion con la base de datos 
    mysqli_close($conn);
}
?>