Ext.define('Admin.view.users.UserList', {
    extend: 'Admin.view.base.BaseList',
    xtype: 'userlist',

    title: 'Uyeler',

    items: [
        {xtype: 'usersgrid'}
    ]
});
