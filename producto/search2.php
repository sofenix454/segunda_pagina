<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/estilo.css" type="text/css" />
    <script type="text/javascript" src="js/jquery-3.6.0.js"></script>
    <script language="JavaScript" type="text/javascript" src="js/funciones.js"></script>
    <link rel="stylesheet" href="css/estiloFormulario.css" type="text/css" />

</head>

<body>
<!-- CONTENEDOR DEL RESULTADO A PHP -->
    <div class="contenedor-resultado">
        <figure class="figura">
            <img src="img/aceptar2.png" width="30" alt="" />
        </figure>
        <!-- PHP -->
        <?php
        $nombre = $_POST['codigo'];
        $codi = $_POST['code'];
        echo  "<p>El producto: <strong>{$nombre}</strong>  con el codigo:  <strong>{$codi}</strong> ha sido consultado</p>";
        ?>
    </div>
</body>

</html>