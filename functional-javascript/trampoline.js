function repeat(operation, num) {
    // Modify this so it doesn't cause a stack overflow!
    let done = false;
    if (num <= 0){
        done = true;
        return {num, done};
    } 
    operation()
    num--;
    return {num, done}
}

function trampoline(fn) {
    let {num, done} = fn.apply(null, Array.prototype.slice.call(arguments, 1));

    while(!done){
        // console.log(Array.prototype.slice.call(arguments, 1,2).concat(num))
       const obj = fn.apply(null, Array.prototype.slice.call(arguments, 1,2).concat(num));
       num = obj.num;
       done = obj.done;
    }
}
module.exports = function (operation, num) {
    // You probably want to call your trampoline here!
    return trampoline(repeat, operation, num);
}