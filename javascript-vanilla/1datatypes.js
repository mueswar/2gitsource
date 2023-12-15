
var b = 2;
var c =3.3;
var d = "abcdef"
var f = function d(a){console.log(a)};
f(b);//int
f(c);//float
f(d);//string

//if condition and else if condition are same like java
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

const g = 20;
if (g<19){
	console.log("if failed")
} else if (g<21){
	console.log("g is less than 21 and g= "+ g)
} else {
	console.log(' else if filed');
}

if(2){
	console.log(' number 2 is ture in if condition');// it is different from java
}
if(1){
	console.log(' number 1 is ture in if condition')
}

if(0){
	console.log(' number 0 is ture in if condition')
} else {
	console.log(' number 0 is false in if condition')
}
console.log('------------------ for  loop ----------------');
//like java only but no type
for (i=0; i<5 ; i++){
	console.log(i);
}