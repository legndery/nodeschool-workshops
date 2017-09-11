function curryN(fn, n) {
    let expArg = n || fn.length;
    return function(){
        let args = Array.prototype.slice.call(arguments);
        if(args.length < expArg){
            return function(){
                this.apply(null, args);
            }
        }else{
            return fn.apply(null, args);
        }
    }
}

module.exports = curryN