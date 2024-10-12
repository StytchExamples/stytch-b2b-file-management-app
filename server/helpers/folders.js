const db = require('../utils/memory');
const { v4: uuidv4 } = require('uuid');

const createFolder = async (name, member_id) => {
    try {
        const folder = {
            id: uuidv4(),
            name,
            creatorId: member_id,
        };
        return db.createFolder(folder);
    } catch (error) {
        throw new Error(`Could not create folder: ${error.message}`);
    }
};

const fetchFolder = async (folder_id) => {
    try {
        return db.getFolder(folder_id);
    } catch (error) {
        throw new Error(`Could not get folder: ${error.message}`);
    }
};

const fetchFolders = async (member_id) => {
    try {
        const folders = db.getFolders(member_id);
        return folders;
    } catch (error) {
        throw new Error(`Could not fetch folders: ${error.message}`);
    }
};

module.exports = {
    createFolder,
    fetchFolder,
    fetchFolders,
};
