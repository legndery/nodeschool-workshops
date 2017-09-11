function loadUsers(userIds, load, done) {
    let users = []
    userIds.forEach(function(id, i) {
        load(id, function(user){
            users[i] = user;
            if(users.length == userIds.length){
                return done(users);
            }
        });
    });
}

module.exports = loadUsers