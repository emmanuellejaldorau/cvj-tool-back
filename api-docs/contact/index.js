const getContacts = require('./get-contacts');
const getContact = require('./get-contact');
const createContact = require('./create-contact');
//const updateTodo = require('./update-todo');
const deleteContact = require('./delete-contact');

module.exports = {
    paths:{
        '/contacts':{
            ...getContacts,
            ...createContact
        },
        '/contacts/{id}':{
            ...getContact,
 //           ...updateTodo,
            ...deleteContact
        }
    }
}