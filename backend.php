<?php
// Traemos el archivo necesario que contiene la funcion getTask()
require 'getTaskBack.php';

require 'postTaskBack.php';

require 'patchState.php';

require 'deleteDefBack.php';

// Seccionador en funcion del metodo HTTP
switch ($_SERVER['REQUEST_METHOD']) {
    case 'GET':
        getTask();
        break;
    case 'POST':
        postTask(); 
        break;
    case 'PATCH':
        patchState();
    case 'DELETE':
        deleteDef();
    default:
        http_response_code(405); // Método no permitido
        echo json_encode(["mensaje" => "Método no permitido"]);
        break;
}

