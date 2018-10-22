Ext.define('Admin.view.users.UserList', {
    extend: 'Ext.panel.Panel',
    xtype: 'userlist',

    title: 'Uyeler',

    items: [
        {
            xtype: 'usersgrid'
        }
    ]
});
