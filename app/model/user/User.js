Ext.define('Admin.model.users.Users', {
    extend: 'Admin.model.base.Base',

    fields: [
        {name: 'firstname', type: 'string'},
        {name: 'lastname', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'phone', type: 'number'},
        {name: 'adress', type: 'string'},
    ]
});
