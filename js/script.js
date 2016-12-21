$(document).ready(function() {
	var elementos=0;
	$('.addBtn').click(function() {
		if ($('#texTarea').val() == ""){
			alert('Recuerda ingresar tus pendientes');
		} else{
		var valorTexto = $('#texTarea').val();
		elementos++;
	// Añadir caja de texto
        $('.elementos').append('<li id="'+elementos+'"><span class="texto">'+valorTexto+'</span><i name="'+elementos+'" class="fa fa-heart favorito" id="" aria-hidden="true"></i><i class="fa fa-trash eliminar" aria-hidden="true" name="'+elementos+'"></i><input name="'+elementos+'" class="hecho" type="checkbox"></li>');
   		$('#texTarea').val('');
   		}
   	});
   	// Basuritas
	$('.elementos').on("click", "i.eliminar", function(){
		var nro="#"+$(this).attr("name");
		// console.log(nro);
		$(nro).remove();
	});
	$('.elementos').on("click", "i.favorito", function(){
		if($(this).attr("id")=="red"){
			$(this).css("color", "white");
			$(this).attr("id", "blanco");
		}else{
			$(this).css("color", "red");
			$(this).attr("id", "red");
		}
		
	});
	$('.elementos').on("click", ".hecho", function(){
		var nro="#"+$(this).attr("name")+" .texto";
		if( $(this).prop('checked')) {
			$(nro).css("text-decoration", "line-through");
		} else{
			$(nro).css("text-decoration", "none");
		}

	});


});
// $(document).ready(function(){
// 	$('p').click(function(){
// 		alert('hola mundo')
// 	});
// });