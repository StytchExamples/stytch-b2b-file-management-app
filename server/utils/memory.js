const users = [];
const folders = [];

module.exports = {
  users,
  folders,
  createUser: (user) => {
    users.push(user);
    return user;
  },
  getUser: (id) => users.find(u => u.id === id),
  updateUser: (id, updatedData) => {
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedData };
      return users[index];
    }
    return null;
  },
  createFolder: (folder) => {
    folders.push(folder);
    return folder;
  },
  getFolders: (creatorId) => folders.filter(f => f.creatorId === creatorId),
  getFolder: (id) => folders.find(f => f.id === id),
};
