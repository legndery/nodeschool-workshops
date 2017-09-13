function curryN(fn, n) {
    n= n || fn.length;

    function genCurry(prev) {
        return function(){
            let args = prev.concat(Array.prototype.slice.call(arguments));
            console.log(args)
            if (args.length < n) {
                return genCurry(args);
            } else {
                return fn.apply(null, args);
            }
        }
    }
    return genCurry([]);
}

module.exports = curryN