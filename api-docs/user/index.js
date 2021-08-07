const getUsers = require('./get-users');
const getUser = require('./get-user');
const createUser = require('./create-user');
//const updateTodo = require('./update-todo');
const deleteUser = require('./delete-user');

module.exports = {
    paths:{
        '/users':{
            ...getUsers,
            ...createUser
        },
        '/users/{id}':{
            ...getUser,
 //           ...updateTodo,
            ...deleteUser
        }
    }
}