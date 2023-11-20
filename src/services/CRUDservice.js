const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
};

const getUserById = async (userId) => {
    let [results, fields] = await connection.query(
        'select * from Users where id = ?',
        [userId]
    );
    console.log('results = ', results);

    let user = results && results.length > 0 ? results[0] : {};

    return user;
};

const updateUserByID = async (id, email, name, city) => {
    let [results, fields] = await connection.query(
        `update Users set email = ?, city = ?, name = ? where id = ?`,
        [email, city, name, id]
    );
};

const deleteUserByID = async (id) => {
    let [results, fields] = await connection.query(
        `DELETE FROM Users WHERE id=?`,
        [id]
    );
};

module.exports = { getAllUsers, getUserById, updateUserByID, deleteUserByID };
