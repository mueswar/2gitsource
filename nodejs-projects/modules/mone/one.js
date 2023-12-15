var abc = function (){
    console.log('mone - one- mone abc');
};

const xyz = function (){
    console.log('mone - one- mone xyz');
};
exports.add = function (x, y) {
    console.log("int put x: "+x);
    console.log("int put y: "+y);
    return x + y;
};
module.exports.m1= abc;
module.exports.m2= xyz;