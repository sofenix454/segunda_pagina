<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/estiloFormulario.css" type="text/css" />
</head>

<body>
    <!-- CONTENEDOR DEL RESULTADO A PHP -->
    <div class="contenedor-resultado actualizar">
        <figure class="figura">
            <img src="img/aceptar3.png" width="30" alt="" />
        </figure>
        <!-- PHP -->
        <?php
        $nombre = $_POST['nombre'];
        $codi = $_POST['code'];
        echo  "<p>El producto: <strong>{$nombre}</strong>  con el codigo:  <strong>{$codi}</strong> ha sido actualizado</p>";
        ?>
    </div>
</body>

</html>