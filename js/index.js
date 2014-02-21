
function CargarIMG()
{	

	alert('1');

	$.ajax({
		url:'http://musicamaestra.com/programin/app/frasesamor/php.php',
		type:'post',
		success:  function (response) {
		
				$('#text').html(response);
 
		}
	});

	alert('2');

}

