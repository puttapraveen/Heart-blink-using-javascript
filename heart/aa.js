var id=0;
var difference=2;
var width=100;
function increase()
{
	clearInterval(id);
	document.getElementById("h1").innerHTML="DIL DHADKEGA";
	id=setInterval(expand,200);
}
function expand()
{
	if(width<200)
	{
		width=width+difference;
		document.getElementById("img").style.width=width;
	}
	else
	{
		clearInterval(id);
	}
}
function decrease()
{
	clearInterval(id);
	document.getElementById("h1").innerHTML="Hover to Dhak Dhak";
	id=setInterval(compress,200);
}
function compress()
{
	if(width>100)
	{
		width=width-difference;
		document.getElementById("img").style.width=width;
	}
	else{
		clearInterval(id);
	}
}