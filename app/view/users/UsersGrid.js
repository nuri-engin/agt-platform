Ext.define('Admin.view.users.UserGrid', {
    extend: 'Admin.view.base.BaseGrid',
    xtype: 'usersgrid',

    columns: [
        {text: 'Isim'},
        {text: 'Soyisim'},
        {text: 'Email'},
        {text: 'Telefon'},
        {text: 'Adres'}
    ]
});
