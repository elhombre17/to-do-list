<?php
function postTask(){
    //Obtener datos enviados en el cuerpo de la solicitud POST
    $newTask = json_decode(file_get_contents('php://input'), true);
    //Pasar los datos a una variable
    $task = $newTask['task'];
    //Conectar base de datos 
    $conn =  mysqli_connect('localhost', 'root', 'root', 'todolist');   
    //Escribir consulta
    $queryInsert = "INSERT INTO tareas (task, dlt) VALUES ('$task', '0')";
    //Ejecutar consulta
    $insert = mysqli_query($conn, $queryInsert);
     // Responder con los datos en formato JSON
     echo json_encode($task);
     //vaciamos el conjunto de resultados de la consulta
     mysqli_free_result($insert);
     //cerramos la conexion con la base de datos 
     mysqli_close($conn);
}
?>