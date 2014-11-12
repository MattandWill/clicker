var number = 0;
	
function addNumber(item)
{
	number+=Math.round(Math.random()*10);
	document.getElementById("numbers").innerHTML = item+": " + number;
}



//Not using (Time Based)
var seconds = 2642; // uptime in seconds
var timer = setInterval(
    function() {
        seconds++;
    }, 1000
);