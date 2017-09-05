function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function({id:idS}){
            return goodUsers.some(function({id:idG}){
                return idG == idS;    
            })
        })
    };
}


module.exports = checkUsersValid