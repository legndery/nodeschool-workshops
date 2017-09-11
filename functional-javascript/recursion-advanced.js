function getDependencies(tree) {
    if(tree === null || tree === undefined){
        return []
    }

    let {dependencies} = tree;
    if(dependencies === null || dependencies === undefined){
        return []
    }
    let array = {};

    Object.keys(dependencies).forEach(function (d) {
        getOneDependency(dependencies[d], d, array);
    })
    return Object.keys(array).sort();
}
function getOneDependency(dependencies, name, array) {
    let depen = dependencies["dependencies"];
    if (depen === undefined) {
        array[`${name}@${dependencies['version']}`]=0;
        return
    } else {
        array[`${name}@${dependencies['version']}`] = 0;
        Object.keys(depen).forEach(function (d) {
            getOneDependency(depen[d], d, array);
        })
    }
}

module.exports = getDependencies