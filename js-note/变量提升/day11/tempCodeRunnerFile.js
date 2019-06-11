
var a=2
function fn(a){
    console.log(a)
    a=3;
    console.log(a)
    var obj={
        a:a
    }
    
    return function(a){
        console.log(a)
    }
}
fn(a)(2)