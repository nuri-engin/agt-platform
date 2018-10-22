Ext.define('Admin.view.users.UserGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usersgrid',

    store: {
        type: 'userstore',
        autoLoad: true
    },

    columns: [
        {
            text: 'Name',
            width: 100,
            sortable: false,
            hideable: false,
            dataIndex: 'name'
        },
        {
            text: 'Email Address',
            width: 150,
            dataIndex: 'email',
            hidden: true
        },
        {
            text: 'Phone Number',
            flex: 1,
            dataIndex: 'phone'
        }
    ],

    plugins: [
        {
            ptype: 'rowexpander',
            rowBodyTpl: [
                '<table>',
                '<tpl foreach=".">',
                '<tr><td>{$}</td><td>{.}</td></tr>',
                '</tpl>',
                '</table>'
            ]
        }
    ]
});
