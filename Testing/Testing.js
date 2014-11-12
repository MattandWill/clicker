var number = 0;
	
function addNumber(item)
{
	var number2=Math.round(Math.random()*10);
	number+=number2;
	document.getElementById("numbers").innerHTML = item+": " + number+" Start number: " + number2;
}



//Not using (Time Based)
var seconds = 2642; // uptime in seconds
var timer = setInterval(function() {seconds++;}, 1000);