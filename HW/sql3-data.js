const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('yourdatabase.db');

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER NOT NULL
)`);

module.exports = {
    getUsers: async () => {
        try {
            const users = await new Promise((resolve, reject) => {
                db.all('SELECT * FROM users', [], (error, rows) => {
                    if(error){
                        reject(error);
                    } else{
                        resolve(rows);
                    }
                });
            });

            return users;
        } catch (error) {
            return null;
        }
    },

    async getUser(id) {
        const user = await new Promise((resolve, reject) => {
            db.get('SELECT * FROM users WHERE id = ?', [id], (error, rows) => {
                if(error){
                    reject(error);
                } else{
                    resolve(rows);
                }
            });
        });

        return user;
    },

    addUser: async (user) => {
        const lastID = await new Promise((resolve, reject) => {
            db.run('INSERT INTO users (name, age) VALUES(?, ?)', [user.name, user.age], function(error) {
                if(error){
                    reject(error);
                } else{
                    resolve(this.lastID);
                }
            });
        });

        return { id: lastID, ...user };
    },

    deleteUser: async (id) => {
        const changes = await new Promise((resolve, reject) => {
            db.run('DELETE FROM users WHERE id = ?', [id], function (error) {
                if(error){
                    reject(error);
                } else{
                    resolve(this.changes);
                }
            });
        });

        return changes > 0;
    },

    updateUser: async function(id, userData) {
        const changes = await new Promise((resolve, reject) => {
            db.run('UPDATE users SET name = ?, age = ? WHERE id = ?', [userData.name, userData.age, id], function (error) {
                if(error){
                    reject(error);
                } else{
                    resolve(this.changes);
                }
            });
        });

        if(changes === 0)
            return null;

        return this.getUser(id);
    }
}