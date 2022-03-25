<?php
$code= $_POST['cod'];
$nombre= $_POST['nom'];
$deporte = $_POST['depor'];
$actividad = $_POST['acti'];

$array = array("code" => $code , "name" => $nombre , "sport" => $deporte , "activity" => $actividad );
    if(file_exists('info.json')){
    $contenido = file_get_contents('info.json');
    $data =json_decode($contenido);
    array_push($data,$array);
    file_put_contents('info.json',json_encode($data));
    }


?>   