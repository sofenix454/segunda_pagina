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
  <form action="#" method="POST" class='formulario' autocomplete="off">
    <div class='form'><label>Codigo:</label><input type='text' name="code" id="code" value='52'></div>
    <div class='form'><label>Nombre:</label><input type='text' name="nombre" id="nombre" value=''></div>
    <div class='form'><label>Marca:</label><input type='text' value=''></div>
    <div class='form'><label>Almacen:</label><input type='text' value=''></div>
    <div class='form'><label>Cantidad:</label><input type='text' value=''></div>
    <div class='form'><label>Descripcion:</label><textarea rows='6'></textarea></div>
    <div class='form'><label>Precio:</label><input type='text' value=''></div>
    <div class='form'><label>Fecha:</label> <input type="date" class="form-control" id="Fecha"></div>
    <div class='input'><input type='button' id="botonNuevo" onclick="nuevoProducto()" value='GUARDAR'></div>

    
  </form>
  <div id="resultado"></div>
  <script>
    $('#botonNuevo').click(function() {
      $('#resultado').show();
      $('#resultado').delay(3000).hide(100);;  
    });
  </script>

</body>

</html>