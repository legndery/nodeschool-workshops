function Spy(target, method) {
    let spy =  {count:0};

    const org = target[method];

    target[method] = function(){
        spy.count++;
        return org.apply(target, Array.prototype.slice.call(arguments));
    };
    return (spy);
}
module.exports = Spy
