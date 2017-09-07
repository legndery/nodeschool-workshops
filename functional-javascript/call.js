
function duckCount() {
    return Array.prototype.slice.call(arguments).reduce(function (prev, current, i, k) {
        if (Object.prototype.hasOwnProperty.call(current, 'quack')) {
            prev += 1;
        }
        return prev;
    }, 0)
}

module.exports = duckCount