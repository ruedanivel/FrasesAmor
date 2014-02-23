

function CargarIMG()
{	

	//var v_random = Math.floor((Math.random()*5)+1);

	$('.nav-img').attr("src", "images/butonpulse.svg");


	//$('body').css('background-image','url(images/f'+v_random+'.png)');

	$.ajax({
		url:'http://musicamaestra.com/programin/app/frasesamor/php.php',
		type:'post',
		success:  function (response) {
			
			$('#text').html(response);

			$('.nav-img').attr("src", "images/buton.svg");

			$('#text').css("display","block");
 
		}
	});


}


function resize() {

	alert('awe');


	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;
	var styleSheet = document.styleSheets[0];
	// ar = aspect ratio h/w; Replace this with your apps aspect ratio
	var ar = 0.17;
	// x = scaling factor
	var x = 0.1; 
	var rem;
	if (h / w > ar) { // higher than aspect ratio
	    rem = x * w;
	} else { // wider than aspect ratio
	    rem = x * h;
	}
	document.documentElement.style.fontSize = rem + 'px';

}


