
var myVar = 1;
console.log(myVar);

a();

function b() {
	var myVar=4;
	console.log(myVar);
}

function a(){
	var myVar = 2;
	console.log(myVar);
	b();
}



