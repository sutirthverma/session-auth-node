let sessionToUserMap = new Map();

function setUser(id, user){
    sessionToUserMap.set(id, user);
}

function getUser(id){
    return sessionToUserMap.get(id);
}

module.exports = {
    getUser,
    setUser
}