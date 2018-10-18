Ext.define('Admin.Application', {
    extend: 'Ext.app.Application',
    
    name: 'Admin',

    views: [
        'login.Login'
    ],

    stores: [
        'NavigationTree'
    ],

    // defaultToken : 'dashboard',

    // The name of the initial view to create. This class will gain a "viewport" plugin
    // if it does not extend Ext.Viewport.
    //
    // mainView: 'Admin.view.authentication.Login',
    // mainView: 'Admin.view.main.Main',

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
