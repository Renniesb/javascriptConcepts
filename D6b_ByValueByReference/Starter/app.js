// by value (primitives)
var a = 7;
var b;
b = a;
a = 2;
console.log(a);
console.log(b);

// by reference (all objects (including functions))
var c = { greeting: "hi" };
var d;
d = c;
c.greeting = "hey";

console.log(c);
console.log(d);


// by reference (even as parameters)
function changeGreeting(obj){
	obj.greeting = "Hola"
}

changeGreeting(d);
console.log(c);
console.log(d);

// equals operator sets up new memory space (new address)
c = {greeting: "Howdy"};
console.log(c);
console.log(d);