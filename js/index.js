
function CargarIMG()
{	

	$.ajax({
		url:'http://musicamaestra.com/programin/app/frasesamor/php.php',
		type:'post',
		success:  function (response) {
		
				$('#text').html(response);
 
		}
	});

}

