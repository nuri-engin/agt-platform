Ext.define('Admin.store.NavigationTree', {
    extend: 'Ext.data.TreeStore',

    storeId: 'NavigationTree',

    fields: [{
        name: 'text'
    }],

    root: {
        expanded: true,
        children: [
            {
                text: 'Pano',
                iconCls: 'x-fa fa-desktop',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'admindashboard',
                routeId: 'dashboard', // routeId defaults to viewType
                leaf: true
            },
            {
                text: 'Uyeler',
                iconCls: 'x-fa fa-user',
                children: [
                    {
                        text: 'Uye Listesi',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'userlist',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Ureticiler',
                iconCls: 'x-fa fa-user',
                children: [
                    {
                        text: 'Uretici Listesi',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'producerlist',
                        leaf: true
                    }
                ]
            },
            {
                text: 'Urunler',
                iconCls: 'x-fa fa-user',
                children: [
                    {
                        text: 'Urun Listesi',
                        iconCls: 'x-fa fa-file-o',
                        viewType: 'productlist',
                        leaf: true
                    }
                ]
            }
        ]
    }
});
