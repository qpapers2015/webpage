document.getElementById("GATE").onclick=function(){
	document.getElementById("content").style.display="none";
	document.getElementById("quote").style.display="none";
	document.getElementById("body_frame").style.display="block";
	
	document.getElementById("body_frame").setAttribute("src","GATE.html");
	
}

document.getElementById("HOME").onclick=function(){
	document.getElementById("content").style.display="block";
	document.getElementById("quote").style.display="block";
	document.getElementById("body_frame").style.display="none";
}
	

document.getElementById("ContactUs").onclick=function(){
	document.getElementById("content").style.display="none";
	document.getElementById("quote").style.display="none";
	document.getElementById("body_frame").style.display="block";	
	document.getElementById("body_frame").setAttribute("src","ContactUs.html");
}
