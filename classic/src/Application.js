Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Admin',

    views: [
        'login.Login'
    ],

    stores: [
        'NavigationTree'
    ],

    defaultToken : 'dashboard',

    launch: function () {
        Ext.widget('login-dlg');

    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
