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
  <form action="#" method="POST" class='formulario' autocomplete="off">
    <div class='form'><label>Codigo:</label><input type='text' id="codigo" value=''></div>
    <div class='form'><label>Nombre:</label><input type='text' id="nombre" value=''></div>
  </form>
  <div class='input'><input id="botonBuscar" onclick="consultarR()" type='button' value='BUSCAR'></div>
  <div id="resultado"></div>
<!--   <script>
    $('#botonBuscar').click(function() {
      $('#resultado').show();
      $('#resultado').delay(3000).hide(100);
    });
  </script> -->

</body>

</html>