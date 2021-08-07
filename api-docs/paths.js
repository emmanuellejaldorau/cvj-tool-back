const getUsers = require('./user/get-users');
const getUser = require('./user/get-user');
const createUser = require('./user/create-user');
//const updateUser = require('./user/update-user');
const deleteUser = require('./user/delete-user');      
const getContacts = require('./contact/get-contacts');
const getContact = require('./contact/get-contact');
const createContact = require('./contact/create-contact');
//const updateContact = require('./contact/update-contact');
const deleteContact = require('./contact/delete-contact');

module.exports = {
    paths:{
        '/users':{
            ...getUsers,
            ...createUser
        },
        '/users/{id}':{
            ...getUser,
 //           ...updateUser,
            ...deleteUser
        },
        '/contacts':{
            ...getContacts,
            ...createContact
        },
        '/contacts/{id}':{
            ...getContact,
 //           ...updateContact,
            ...deleteContact
        }
    }
}