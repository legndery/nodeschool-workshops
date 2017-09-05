function reduce(arr, fn, initial) {
    
    return reduceOne(0,initial);
    
    function reduceOne(index, value){
        if(index> arr.length){
            return value
        }
        return reduceOne(index+1, fn(value,arr[index],index,arr))
    }

}

module.exports = reduce