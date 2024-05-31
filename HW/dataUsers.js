let dataUsers = [];
let currentId = 0;

module.exports = {
    getUsers: () => dataUsers,

    getUser: (id) => {
        const userIndex = dataUsers.findIndex(u => u.id == id);

        if(userIndex !== -1){
            return dataUsers[userIndex];
        }

        return null;
    },

    addUser: (user) => {
        user.id = currentId++;
        dataUsers.push(user);
    },

    updateData: (id, updateData) =>{
        const userIndex = dataUsers.findIndex(u => u.id == id);

        if(userIndex !== -1){
            dataUsers[userIndex] = { ...dataUsers[userIndex], ...updateData };
            return dataUsers[userIndex];
        }

        return null;
    },

    deleteUser: (id) =>{
        const userIndex = dataUsers.findIndex(u => u.id == id);

        if(userIndex !== -1){
            dataUsers.splice(userIndex, 1);
            return true;
        }

        return false;
    },
};