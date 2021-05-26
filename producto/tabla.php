<?php
/* RECIBE EL ARRAY DEL RESULTADO DE LA CONSULTA */
$resultado =  $_POST['resultado'];
?>

<!-- INICIA TABLA -->
<div class="contenedor-tabla">
    <table class="estilo-tabla">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Almacen</th>
                <th>Cantidad</th>
                <th>Descripcion</th>
                <th>Precio</th>
                <th>Fecha</th>
                <th></th>
            </tr>


            <?php
            /* CAMBIA E 0 Y 1 POR CADA FOREACH PARA ASIGNAR EL ESTILO   */
            $cambiaClase = 0;
            foreach ($resultado as $fila) {

                $datos = 
                    $fila['idproducto'] . "||" .
                    $fila['nombre'] . "||" .
                    $fila['marca'] . "||" .
                    $fila['almacen'] . "||" .
                    $fila['cantidad'] . "||" .
                    $fila['descripcion'] . "||" .
                    $fila['precio'] . "||" .
                    $fila['fecha'];
            ?>
        </thead>
        <tbody>
            <?php
                if ($cambiaClase == 1) {
                    echo "<tr class='active-row'>";
                    $cambiaClase = 0;
                } elseif ($cambiaClase == 0) {
                    echo "<tr>";
                    $cambiaClase = 1;
                }
            ?>
            
            <th> <?php echo ($fila['idproducto']) ?></th>
            <th> <?php echo ($fila['nombre']) ?></th>
            <th> <?php echo ($fila['marca']) ?></th>
            <th> <?php echo ($fila['almacen']) ?></th>
            <th> <?php echo ($fila['cantidad']) ?></th>
            <th> <?php echo ($fila['descripcion']) ?></th>
            <th> <?php echo ($fila['precio']) ?></th>
            <th> <?php echo ($fila['fecha']) ?></th>
            <th class="btn-opciones"><button href="#footer" id="boton-editar" type="button" class="btn " data-toggle="modal" data-target="#editar" onclick="cargaVentanaActualizar('<?php echo $datos ?>')">
                    Editar
                </button><span> </span><button type="button" id="boton-eliminar" class="btn btn-eliminar" onclick="cargaVentanaEliminar('<?php echo $datos ?>')">
                    Eliminar
                </button></th>
            </tr>
        </tbody>
    <?php  } ?>

    </table>
