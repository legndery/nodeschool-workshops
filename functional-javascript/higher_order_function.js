function repeat(callback, num){
    if(num-1)
        repeat(callback, num-1);
        return callback();
}
module.exports = repeat;
