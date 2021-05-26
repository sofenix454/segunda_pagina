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
            <img src="img/aceptar3.png" width="30" alt="" />
        </figure>


        <!-- PHP -->
        <?php
        /* DEBUG PARA ERRORES PHP */
        function console_log($data)
        {
            echo '<script>';
            echo 'console.log(' . json_encode($data) . ')';
            echo '</script>';
        }
        /* TRAE LOS DATOS */
        function  datos($sql)
        {
            include_once '../conexion.php';
            $nombre = $_POST['nombre'];
            $codigo = $_POST['codigo'];

            $gsen = $pdo->prepare($sql);
            $gsen->execute();
            $resultado = $gsen->fetchAll();
            console_log($resultado);
            /* PREGUNTA SI SOLO ES UN REGISTRO */
            if (count($resultado) == 1) {
                $nombre = $resultado[0]['nombre'];
                echo  "<p>El producto: <strong>{$nombre}</strong>  con el codigo:  <strong>{$codigo}</strong> ha sido consultado</p>";
                echo "<script>
                $('#resultado').show();
                </script>";
                return $resultado;
            } /* PREGUNTA SI SON VARIOS REGISTROS */ elseif (count($resultado) > 1) {
                echo  "<p>Productos consultados</p>";
                echo "<script>
                $('#resultado').show();
                </script>";
                return $resultado;
            }/* MENSAJE POR SI NO ENCONTRO NADA */ else {
                echo "<p>No hay producto con esos datos</p>";
            }
        }
        /* VALIDACION SI LOS DOS CAMPOS ESTAN COMPLETOS */
        if ((isset($_POST['nombre']) && !empty($_POST['nombre'])) && (isset($_POST['codigo']) && !empty($_POST['codigo']))) {
            $nombre = $_POST['nombre'];
            $codigo = $_POST['codigo'];
            $sql = "SELECT * FROM producto where idproducto={$codigo} && nombre='{$nombre}'";
            $resultado = datos($sql);
        }
        /* SI NO, ENTONCES PREGUNTA SI NOMBRE EXISTE */ elseif (isset($_POST['nombre']) && !empty($_POST['nombre'])) {
            $nombre = $_POST['nombre'];
            $sql = "SELECT * FROM producto where nombre='{$nombre}'";

            $resultado = datos($sql);
        }
        /* SI NO, PREGUNTA SI CODIGO EXISTE */ elseif ((isset($_POST['codigo']) && !empty($_POST['codigo']))) {
            $codigo = $_POST['codigo'];
            $sql = "SELECT * FROM producto where idproducto={$codigo}";
            $resultado = datos($sql);
        }
        /* SI NO HAY NADA EN NINGUN CAMPO, ENTONCES TRAE TODA LA TABLA */ else {
            $sql = "SELECT * FROM producto";
            $resultado = datos($sql);
        }
        ?>
    </div>
    <div id="tabla-p">
    </div>
    <script type="text/javascript">
        /* PONEMOS EL ARRAY EN UNA VAR DE JS Y LA MANDAMOS POR POST CON .LOAD*/
        /* UTIL, SOLO PARA MANDAR A LLAMAR A LA TABLA Y PASARLE EL ARRAY DE LA CONSULTA */
        var result = <?php echo json_encode($resultado) ?>;
        $("#tabla-p").load("producto/tabla.php",{resultado: result} );
    </script>
</body>
</html>