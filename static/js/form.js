//variables
var $form = $("#form"),
	$title = $("#form-title"),
	$author = $("#form-author"),
	$url = $("#form-url"),
	$button = $("#view-form-btn"),
	$list = $("#contenido"),
	$post = $(".item").first();

//funciones
function viewForm(){
	$form.slideToggle();
	return false; //sirve para que no se vaya arriba cuando se pulsa el boton
}

function addPost(){
	var url = $url.val(),
		title = $title.val(),
		author = $author.val(),
		$clone = $post.clone(),
		linktitulo = $clone.find('.titulo_item a'),
		linkautor = $clone.find('.autor_item a');
	linktitulo.text(title);
	linktitulo.attr('href', url);
	linkautor.text(author);
	//$clone.find(".titulo_item a").text(title).attr("href", url);
	$clone.hide();

	$list.prepend($clone);
	$clone.fadeIn();
	return false;
}

//eventos
$button.on("click", viewForm);
$form.on("submit", addPost);