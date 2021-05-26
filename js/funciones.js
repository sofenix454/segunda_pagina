function Registrar(nombre,marca,almacen,cantidad, descripcion, precio, fecha)
{
    cadena="nombre=" + nombre +
           "&marca=" + marca +
           "&almacen=" + almacen +
           "&cantidad=" +cantidad +
           "&descripcion=" + descripcion +
           "&precio=" + precio +
           "&fecha=" + fecha;
      
    //$("#respuesta").html("<img src="loader.gif" /> Por favor espera un momento");
    $.ajax({
        type: "POST",
        //dataType: 'html',
        url: "producto/new2.php",
        data: cadena,
        success: function(){
           
        }
    });
}

function Limpiar()
{
    $("#nombre").val("");
    $("#direccion").val("");
    
}
function pasarDatos(datos){
    d=datos.split('||');
    $('#codigo').val(d[0]);
    $('#nombreu').val(d[1]);
    $('#direccionu').val(d[2]);
}





/* TRAE FORMULARIOS DE PRODUCTOS */
function seccion(mensaje) {
  $.ajax({
    url: "producto/" + mensaje,
    cache: false,
    type: "GET",
    success: function (datos) {
      $("#main_contenido").html(datos);
    },
  });
}

/* -------- RESULTADO FORM NUEVO PRODUCTO */
function nuevoProducto() {
  var nombre = $("#nombre").val();
  var code = $("#code").val();
  $.ajax({
    url: "producto/new2.php",
    cache: false,
    type: "POST",
    data: "nombre=" + nombre + "&code=" + code,
    success: function (datos) {
      $("#resultado").html(datos);
    },
  });
}

function nuevoProductoR() {
  var nombre = $('#nombre').val();
  var marca = $('#marca').val();
  var almacen = $('#almacen').val();
  var cantidad = $('#cantidad').val();
  var descripcion = $('#descripcion').val();
  var precio = $('#precio').val();
  var fecha = $('#fecha').val();
  $.ajax({
    url: "producto/new2.php",
    cache: false,
    type: "POST",
    data:"nombre="+nombre +"&marca="+marca+"&almacen="+almacen+"&cantidad="+cantidad+"&descripcion="+descripcion+"&precio="+precio+"&fecha="+fecha,
    success: function (datos) {
      $("#resultado").html(datos);
    },
  });
}

/* -------- RESULTADO FORM CONSULTAR */

function consultarR() {
  var codigo = $('#codigo').val();
  var nombre = $('#nombre').val();
  $.ajax({
    url: "producto/search2.php",
    cache: false,
    type: "POST",
    data:"codigo="+codigo+"&nombre="+nombre,
    success: function (datos) {
      $("#resultado").html(datos);
    },
  });
}


function consultar() {
  var codigo = $("#nombre").val();
  var code = $("#code").val();
  $.ajax({
    url: "producto/search2.php",
    cache: false,
    type: "POST",
    data: "codigo=" + codigo + "&code=" + code,
    success: function (datos) {
      $("#resultado").html(datos);
    },
  });
}


/* -------- RESULTADO FORM ELMINAR */
function eliminar() {
  if (confirm("¿Seguro que deseas eliminar este elemento?")) {
    var codigo = $("#nombre").val();
    var code = $("#codigo").val();
    $.ajax({
      url: "producto/dele2.php",
      cache: false,
      type: "POST",
      data: "nombre=" + codigo + "&code=" + code,
      success: function (datos) {
        $("#resultado").html(datos);
      },
    });
  } else {
    alert("Operacion cancelada");
  }
}
/* -------- RESULTADO FORM ACTUALIZAR */
function actualizar() {
  if (confirm("¿Seguro que deseas actualizar este elemento?")) {
    var codigo = $("#nombre").val();
    var code = $("#codigo").val();
    $.ajax({
      url: "producto/update2.php",
      cache: false,
      type: "POST",
      data: "nombre=" + codigo + "&code=" + code,
      success: function (datos) {
        $("#resultado").html(datos);
      },
    });
  } else {
    alert("Operacion cancelada");
  }
}

/* TRAE EL MENU DE NAVEGACION DE LOS APARTADOS */
function callMenu(menu_a_abrir) {
  $.ajax({
    url: menu_a_abrir,
    cache: false,
    type: "GET",
    success: function (datos) {
      $("#main_menu").html(datos);
    },
  });
}

/* ------------ SIN UTILIZAR AUN --------------------------*/
function cerrarSesion() {
  if (confirm("¿Seguro de salir del Sistema SPI?")) {
    $.ajax({
      url: "../CerrarSesion",
      cache: false,
      type: "POST",
      success: function (datos) {
        if (datos == 1) {
          window.close();
        }
      },
    });
  } else {
    alert("Cerrar Sesión Cancelada ");
  }
}

function callFormulario(formulario_a_abrir) {
  $.ajax({
    url: "../jsp/" + formulario_a_abrir,
    cache: false,
    type: "GET",
    success: function (datos) {
      $("#informacion").html(datos);
    },
  });
}

function CallGuardaLegal() {
  var descripcion = $("#descripcion").attr("value");
  var tipodeproblema = $("#tipodeproblema").attr("value");
  var fecha = $("#fecha").attr("value");
  var status = $("#status").attr("value");
  var observacion = $("#observacion").attr("value");
  var operacion = "insertar";
  $.ajax({
    url: "../LegalControlador",
    cache: false,
    type: "POST",
    data:
      "operacion=" +
      operacion +
      "&descripcion=" +
      descripcion +
      "&tipodeproblema=" +
      tipodeproblema +
      "&fecha=" +
      fecha +
      "&status=" +
      status +
      "&observacion=" +
      observacion,
    success: function (datos) {
      $("#informacion").html(datos);
    },
  });
}

function eliminaLegal(id) {
  var operacion = "eliminar";
  $.ajax({
    url: "../LegalControlador",
    cache: false,
    type: "POST",
    data: "operacion=" + operacion + "&id=" + id,
    success: function (datos) {
      $("#informacion").html(datos);
    },
  });
}

function CallGuardaLogic() {
  var IDVENTA = $("#IDVENTA").attr("value");
  var IDCLIENTE = $("#IDCLIENTE").attr("value");
  var direccion = $("#direccion").attr("value");
  var telefono = $("#telefono").attr("value");
  var fechaenvio = $("#fechaenvio").attr("value");
  var estadodelenvio = $("#estadodelenvio").attr("value");
  var tipoenvio = $("#tipoenvio").attr("value");
  var observaciones = $("#observaciones").attr("value");
  var operacion = "insertar";
  $.ajax({
    url: "../LogicControlador",
    cache: false,
    type: "POST",
    data:
      "operacion=" +
      operacion +
      "&IDVENTA=" +
      IDVENTA +
      "&IDCLIENTE=" +
      IDCLIENTE +
      "&direccion=" +
      direccion +
      "&telefono=" +
      telefono +
      "&fechanevio=" +
      fechaenvio +
      "&estadodelenvio=" +
      estadodelenvio +
      "&tipoenvio=" +
      tipoenvio +
      "&observaciones=" +
      observaciones,
    success: function (datos) {
      $("#informacion").html(datos);
    },
  });
}

function CallGuardaAlmacen() {
  var IDALMACEN = $("#IDALMACEN").attr("value");
  var NOMBRE = $("#NOMBRE").attr("value");
  var operacion = "insertar";
  $.ajax({
    url: "../AlmacenControlador",
    cache: false,
    type: "POST",
    data:
      "operacion=" +
      operacion +
      "&IDALMACEN=" +
      IDALMACEN +
      "&NOMBRE=" +
      NOMBRE,
    success: function (datos) {
      $("#informacion").html(datos);
    },
  });
}

function CallGuardaProveedor() {
  var IDPROVEEDOR = $("#IDPROVEEDOR").attr("value");
  var nombre = $("#nombre").attr("value");
  var direccion = $("#direccion").attr("value");
  var telefono = $("#telefono").attr("value");
  var observacion = $("#observacion").attr("value");
  var operacion = "insertar";
  $.ajax({
    url: "../ProveedorControlador",
    cache: false,
    type: "POST",
    data:
      "operacion=" +
      operacion +
      "&IDPROVEEDOR=" +
      IDPROVEEDOR +
      "&nombre=" +
      nombre +
      "&direccion=" +
      direccion +
      "&telefono=" +
      telefono +
      "&observacion=" +
      observacion,
    success: function (datos) {
      $("#informacion").html(datos);
    },
  });
}

function CallGuardaConsumible() {
  var IDCONSUMIBLE = $("#IDCONSUMIBLE").attr("value");
  var nombre = $("#nombre").attr("value");
  var almacen = $("#almacen").attr("value");
  var operacion = "insertar";
  $.ajax({
    url: "../ConsumibleControlador",
    cache: false,
    type: "POST",
    data:
      "operacion=" +
      operacion +
      "&IDCONSUMIBLE=" +
      IDCONSUMIBLE +
      "&nombre=" +
      nombre +
      "&almacen=" +
      almacen,
    success: function (datos) {
      $("#informacion").html(datos);
    },
  });
}

function CallGuardaEquipo() {
  var IDEQUIPO = $("#IDEQUIPO").attr("value");
  var nombre = $("#nombre").attr("value");
  var proveedor = $("#proveedor").attr("value");
  var almacen = $("#almacen").attr("value");
  var status = $("#status").attr("value");
  var operacion = "insertar";
  $.ajax({
    url: "../EquipoControlador",
    cache: false,
    type: "POST",
    data:
      "operacion=" +
      operacion +
      "&IDEQUIPO=" +
      IDEQUIPO +
      "&nombre=" +
      nombre +
      "&proveedor=" +
      proveedor +
      "&almacen=" +
      almacen +
      "&status=" +
      status,
    success: function (datos) {
      $("#informacion").html(datos);
    },
  });
}

function CallGuardaProducto() {
  var codigo = $("#codigo").attr("value");
  var nombre = $("#nombre").attr("value");
  var marca = $("#marca").attr("value");
  var almacen = $("#almacen").attr("value");
  var descripcion = $("#descripcion").attr("value");
  var cantidad = $("#cantidad").attr("value");
  var precio = $("#precio").attr("value");
  var fecha = $("#fecha").attr("value");
  var operacion = "insertar";
  $.ajax({
    url: "../ProductoControlador",
    cache: false,
    type: "POST",
    data:
      "operacion=" +
      operacion +
      "&codigo=" +
      codigo +
      "&nombre=" +
      nombre +
      "&marca=" +
      marca +
      "&almacen=" +
      almacen +
      "&descripcion=" +
      descripcion +
      "&cantidad=" +
      cantidad +
      "&precio=" +
      precio +
      "&fecha=" +
      fecha,
    success: function (datos) {
      $("#informacion").html(datos);
    },
  });
}

function CallGuardaUsuario() {
  var idusuario = $("#idusuario").attr("value");
  var cuenta = $("#cuenta").attr("value");
  var clave = $("#clave").attr("value");
  var perfil = $("#perfil").attr("value");
  var operacion = "insertar";
  $.ajax({
    url: "../UsuariosControlador",
    cache: false,
    type: "POST",
    data:
      "operacion=" +
      operacion +
      "&idusuario=" +
      idusuario +
      "&cuenta=" +
      cuenta +
      "&clave=" +
      clave +
      "&perfil=" +
      perfil,
    success: function (datos) {
      $("#informacion").html(datos);
    },
  });
}

function callMenuIn() {
  $.ajax({
    url: "INCLUDE/menus/Minfraestructura.html",
    cache: false,
    type: "GET",
    success: function (datos) {
      $("#izquierda").html(datos);
    },
  });
}

function callNuevoPro() {
  $.ajax({
    url: "INCLUDE/jsp/nuevoPuesto.html",
    cache: false,
    type: "GET",
    success: function (datos) {
      $("#informacion").html(datos);
    },
  });
}

function checaNavegador() {
  var navegador = navigator.appName;
  if (navegador == "Microsoft Internet Explorer") {
    return true;
  } else {
    return false;
  }
}

//inicio de sesion
function IniciarSesion() {
  var usuario = $("#usuario").attr("value");
  var clave = $("#clave").attr("value");
  var operacion = "checar";
  $.ajax({
    url: "UsuariosControlador",
    cache: false,
    type: "POST",
    data: "operacion=" + operacion + "&cuenta=" + usuario + "&clave=" + clave,
    success: function (datos) {
      if (datos == 1) {
        if (checaNavegador()) {
          window.open(
            "jsp/principal.jsp",
            null,
            "height=600,width=1000,status=yes,toolbar=no,menubar=no,location=no"
          );
        } else {
          window.open(
            "jsp/principal.jsp",
            "Correo Tabasco",
            "width=1000,height=600,resizable=1,scrollbars=0,location=0"
          );
        }
      } else {
        alert("Usuario no existe");
      }
    },
  });
}

function llamaInforme(archivo) {
  window.open(
    "../print/" + archivo,
    "Informes",
    "width=500,height=500,resizable=1,scrollbars=0,location=0"
  );
}

/*
	function actualizarDatos(){
		var IDcontacto = $('#IDcontacto').attr('value');
		var Alias = $('#Alias').attr('value');
		var Nombre = $('#Nombre').attr('value'); 
		var Apepat = $('#Apepat').attr('value'); 
     	var Apemat = $('#Apemat').attr('value'); 
		var FKcategoria = $("#FKcategoria").attr("value");

		$.ajax({
			url: 'php/actualizar.php',
			type: "POST",
			data: "submit=&IDcontacto="+IDcontacto+"&Alias="+Alias+"&Nombre="+Nombre+"&Apepat="+Apepat+"&Apemat="+Apemat+"&FKcategoria="+FKcategoria,
			success: function(datos){
				alert(datos);
				consultarContactos();
				$("#formulario").hide();
				$("#tabla").show();
			}
		});
		return false;
	}

	function ConsultaDatos(){
		$.ajax({
			url: 'consulta.php',
			cache: false,
			type: "GET",
			success: function(datos){
				$("#tabla").html(datos);
			}
		});
	}

	function crearNuevo(){
		$.ajax({
			url: 'php/Fcontactos.php',
			cache: false,
			type: "POST",
			success: function(datos){
				$("#resultado").html(datos);
			}
		});
	}
	
	function consultarContactos(){
		$.ajax({
			url: 'php/ConsultarContactos.php',
			cache: false,
			type: "POST",
			success: function(datos){
				$("#resultado").html(datos);
			}
		});
	}
	
	function actualiza(id){
		$.ajax({
			url: 'php/actualizarContacto.php',
			cache: false,
			type: "POST",
			data: "id="+id,
			success: function(datos){
				$("#resultado").html(datos);
			}
		});
	}
	function grabaContacto(){
		var alias = $('#alias').attr('value');
		var nombre = $('#nombre').attr('value'); 
		var appat = $('#appat').attr('value'); 
		var apmat = $('#apmat').attr('value'); 
		var categoria = $('#categoria').attr('value'); 		
		$.ajax({
			url: 'php/insertarContacto.php',
			cache: false,
			type: "POST",
			data: "alias="+alias+"&nombre="+nombre+"&appat="+appat+"&apmat="+apmat+"&categoria="+categoria,
			success: function(datos){
				$("#resultado").html(datos);
			}
		});
	}

	function eliminarDato(id){
		var msg = confirm("Desea eliminar este dato?")
		if (msg) {
			$.ajax({
				url: 'php/eliminarContacto.php',
				type: "POST",
				data: "id="+id,
				success: function(datos){
					alert(datos);
					$("#fila-"+id).remove();
				}
			});
		}
		return false;
	}
/*	
	function GrabarDatos(){
		var nombres = $('#nombres').attr('value');
		var ciudad = $('#ciudad').attr('value'); 
		var alternativas = $("input[@name='alternativas']:checked").attr("value");
		var telefono = $("#telefono").attr("value");
		var fecha_nacimiento = $("#fecha_nacimiento").attr("value");

		$.ajax({
			url: 'nuevo.php',
			type: "POST",
			data: "submit=&nombres="+nombres+"&ciudad="+ciudad+"&alternativas="+alternativas+"&telefono="+telefono+"&fecha_nacimiento="+fecha_nacimiento,
			success: function(datos){
				ConsultaDatos();
				alert(datos);
				$("#formulario").hide();
				$("#tabla").show();
			}
		});
		return false;
	}
	
	function buscar(){
		var nombres = $('#matricula').attr('value');
		var ciudad = $('#password').attr('value'); 
		//var alternativas = $("input[@name='alternativas']:checked").attr("value");
		//var telefono = $("#telefono").attr("value");
		//var fecha_nacimiento = $("#fecha_nacimiento").attr("value");

		$.ajax({
			url: 'php/sesion.php',
			type: "POST",
			data: "submit=&matricula="+nombres+"&password="+ciudad,
			success: function(datos){
				//ConsultaDatos();
				//alert(datos);
				//$("#formulario").hide();
				//$("#tabla").show();
				$("#sesion").html(datos);
			}
		});
		return false;
	}

	function Cancelar(){
		$("#formulario").hide();
		$("#tabla").show();
		return false;
	}
	
	// funciones del calendario
	function update_calendar(){
		var month = $('#calendar_mes').attr('value');
		var year = $('#calendar_anio').attr('value');
	
		var valores='month='+month+'&year='+year;
	
		$.ajax({
			url: 'calendario.php',
			type: "GET",
			data: valores,
			success: function(datos){
				$("#calendario_dias").html(datos);
			}
		});
	}
	
	function set_date(date){
		$('#fecha_nacimiento').attr('value',date);
		show_calendar();
	}
	
	function show_calendar(){
		$('#calendario').toggle();
	}
*/
