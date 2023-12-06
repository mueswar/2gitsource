//var two = require('./two')

var a = {x:"abc",
		y:"pqr"};

console.log(a.x);

var b = 2;
var c =3.3;
var d = "abcdef"
var f = function d(a){console.log(a)};
f(b);
f(c);
f(d);
if(c >b){
	console.log("C big")
} else {
	console.log("else condition")
}

if(c < b){
	console.log("if failed")
} else {
	console.log("b small")
}