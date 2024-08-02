<?php
// Definimos el Header
header('Content-Type: application/json');

// Funcion getTask
function getTask(){
    //conectamos con la base de datos
    $conn =  mysqli_connect('localhost', 'root', 'root', 'todolist');
    //consulta SQL para traer todas las tareas de la base de datos
    $queryGetAllTask = 'SELECT tareas.id, tareas.task, tareas.dlt FROM tareas';
    //hacer consulta a la base de datos
    $getTask = mysqli_query($conn, $queryGetAllTask);
    //armamos un array para guardar los resultados
    $task = [];
    //recorremos el array formado por fetch_assoc y guardamos esos datos en el array task
    while ($row= mysqli_fetch_assoc($getTask)) {
        $task[] = $row; 
    }
    // Responder con los datos en formato JSON
    echo json_encode($task);
    //vaciamos el conjunto de resultados de la consulta
    mysqli_free_result($getTask);
    //cerramos la conexion con la base de datos 
    mysqli_close($conn);
}
?>