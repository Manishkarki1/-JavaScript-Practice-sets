//function manish(){
//	alert("are you sure? ");


//confirm("sure?");
function showdate(){
	document.getElementById("namaste").innerHTML=Date();
}
function add(){
	var a=parseInt(document.getElementById("fn").value);
	var b=parseInt(document.getElementById("sn").value);
	document.getElementById("hello").innerHTML=(a+b);
}
function sub(){
    var a=parseInt(document.getElementById("fn").value);
	var b=parseInt(document.getElementById("sn").value);
	document.getElementById("hello").innerHTML=(a-b);	
}
function mul(){
	var a=parseInt(document.getElementById("fn").value);
	var b=parseInt(document.getElementById("sn").value);
	document.getElementById("hello").innerHTML=(a*b);
}
function div(){
	var a=parseFloat(document.getElementById("fn").value);
	var b=parseFloat(document.getElementById("sn").value);
	document.getElementById("hello").innerHTML=(a/b);
}
function remain(){
	var a=parseFloat(document.getElementById("fn").value);
	var b=parseFloat(document.getElementById("sn").value);
	document.getElementById("hello").innerHTML=(a%b);
}