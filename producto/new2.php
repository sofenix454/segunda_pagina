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
    <div class="contenedor-resultado">
        <figure class="figura">
            <img src="img/aceptar3.png" width="30" alt="" />
        </figure>
        <!-- PHP -->
        <?php
        /* NOTA: IMPORTA DONDE COLOCAS LA CONEXION, EN ESTE CASO A UN NIVEL ARRIBA DE NEW 2 */
        include_once '../conexion.php';
        if (!isset($_POST["nombre"]) || !isset($_POST["marca"]) || !isset($_POST["almacen"]) || !isset($_POST["cantidad"]) || !isset($_POST["descripcion"]) || !isset($_POST["precio"]) || !isset($_POST["fecha"])) exit();
        if ($_POST) {
            $nombre = $_POST['nombre'];
            $marca = $_POST['marca'];
            $almacen = $_POST['almacen'];
            $cantidad = $_POST['cantidad'];
            $descripcion = $_POST['descripcion'];
            $precio = $_POST['precio'];
            $fecha = $_POST['fecha'];

            $sql_agregar = 'INSERT INTO producto(nombre,marca,almacen,cantidad,descripcion,precio,fecha)values(?,?,?,?,?,?,?)';
            $sentencia_agregar = $pdo->prepare($sql_agregar);
            $resultado = $sentencia_agregar->execute(array($nombre, $marca, $almacen, $cantidad, $descripcion, $precio, $fecha));
            echo  "<p>El producto: <strong>{$nombre}</strong>  con el codigo:  <strong>{$codi}</strong> se ha guardado con exito</p>";
        }
        ?>
    </div>
</body>

</html>