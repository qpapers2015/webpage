var x=0;
var y=0;
var z=0;
var w=0;
document.getElementById("AB").onclick=function(){

	if(x===0)
	{
	document.getElementById("AB2").style.display="block";
	x=1;
	}
	else
	{document.getElementById("AB2").style.display="none"
	x=0;}
}
document.getElementById("Samota").onclick=function(){
	if(y===0)
	{
	document.getElementById("Samota2").style.display="block";
	y=1;
	}
	else
	{document.getElementById("Samota2").style.display="none"
	y=0;}
}
	
document.getElementById("Ken").onclick=function(){
	if(z===0)
	{
	document.getElementById("Ken2").style.display="block";
	z=1;
	}
	else
	{document.getElementById("Ken2").style.display="none"
	z=0;}
}
	
document.getElementById("Dnvasa").onclick=function(){
	if(w===0)
	{
	document.getElementById("Dnvasa2").style.display="block";
	w=1;
	}
	else
	{document.getElementById("Dnvasa2").style.display="none"
	w=0;}
	
}
	

	
