Ext.define('Admin.view.dashboard.Dashboard', {
    extend: 'Ext.container.Container',
    xtype: 'admindashboard',

    requires: [
        'Ext.ux.layout.ResponsiveColumn'
    ],

    layout: 'responsivecolumn',

    items: [
        {
            xtype: 'mainpanel',
            items: [
                {
                    xtype: 'mainpanel',
                    title: 'Pano',
                    html: 'Hello Antalya Gida Toplulugu!'
                },
                {xtype: 'component', height: 20},
                {
                    xtype: 'mainpanel',
                    html: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0wgeFpwZPhA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
                }
            ]
        }
    ]
});