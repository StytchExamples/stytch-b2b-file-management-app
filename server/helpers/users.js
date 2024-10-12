const db = require('../utils/memory');
const { v4: uuidv4 } = require('uuid');

const createUser = async (name, email, member_id) => {
    try {
        const user = {
            id: member_id || uuidv4(),
            name,
            email,
        };
        return db.createUser(user);
    } catch (error) {
        throw new Error(`Could not create user: ${error.message}`);
    }
};

const getUser = async (member_id) => {
    try {
        return db.getUser(member_id);
    } catch (error) {
        throw new Error(`Could not get user: ${error.message}`);
    }
};

const updateUser = async (member_id, name) => {
    try {
        const updatedUser = db.updateUser(member_id, { name });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return updatedUser;
    } catch (error) {
        throw new Error(`Could not update user: ${error.message}`);
    }
};

module.exports = {
    createUser,
    getUser,
    updateUser,
};