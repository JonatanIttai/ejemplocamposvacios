//Script para obtener el id de grupo y el id del curso
$('select#gruposid').on('change',function(){
    var actualId = $(this).val();
	var actualClass = $(this).attr('class');
  
		$.ajax({
					type: "POST",
					url: "grupos.php",
					data: { idgrupo: actualId, idcurso: actualClass }, //Envia parametros por el metodo post
					beforeSend: function () {
					$('#consulta-grupo').html(" Procesando, espere por favor...");
					},
					success:  function (response) {
	
						$('#consulta-grupo').html(response); //El resultado lo imprime en el div#consulta-grupo de index.php
				}
			});
	
		});
		
