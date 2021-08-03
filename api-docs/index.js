const basicInfo = require('./basic-info');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const contact = require('./contact');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    ...contact
};

//module.exports = {
//    ...basicInfo,
//    ...servers,
//    ...components,
//    ...tags,
//    ...todos
//};