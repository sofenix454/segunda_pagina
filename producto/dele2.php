<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/estilo.css" type="text/css" />
    <link rel="stylesheet" href="css/estiloFormulario.css" type="text/css" />
</head>

<body>
    <!-- CONTENEDOR DEL RESULTADO A PHP -->
    <div class="contenedor-resultado">
        <figure class="figura">
            <img src="img/aceptar3.png" id="img1" width="30" alt="" />
        </figure>
        <!-- PHP -->
        <?php
           include_once '../conexion.php';
           if ($_POST) {
               $codigo = $_POST['codigo'];
               $nombre = $_POST['nombre'];
               $sql_eliminar = 'DELETE FROM producto WHERE idproducto=?';
               $sentencia_eliminar = $pdo->prepare($sql_eliminar);
               $resultado = $sentencia_eliminar->execute(array($codigo));
               if($sentencia_eliminar->rowCount()>0){
                   echo  "<p>El producto: <strong>{$nombre}</strong>  con el codigo:  <strong>{$codigo}</strong> ha sido eliminado</p>";
               }else{
                   echo "<script> $('.contenedor-resultado').addClass('eliminar');
                                  $('#img1').attr('src', 'img/cerrar.png');      
                        </script>";
                   echo  "<p>El codigo no pertenece a ningun producto</p>";
                   
               }
           }
        
        ?>

</div>

</body>

</html>