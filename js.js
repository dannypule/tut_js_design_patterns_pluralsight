function add(){
    var x = 0;

    for(var i = 0; i < arguments.length; i++){
        x = x + arguments[i];
    }

    console.log(x);
}
// add(1,1);

/////////////////

var Calc = function(start){
    this.add = function(x){

    };

    this.multiply = function (x) {

    };

    this.equals = function(callback){

    };
}

new Calc(0)
    .add(1)
    .add(2)
    .multiply(3)
    .equals(function(result){
        console.log(result)
    });
