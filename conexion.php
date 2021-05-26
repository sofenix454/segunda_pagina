<?php
session_start();
$link = 'mysql:host=localhost;dbname=tienda';
$usuario ='root';
$contraseña= '753951a';
$bd= 'tienda';
try {
    
    $pdo = new PDO($link, $usuario, $contraseña);
    
   
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}
