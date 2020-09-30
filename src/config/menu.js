
export const menu_items = [
    {
        id: 1,
        path: '/',
        icon: 'money-bill',
        label: 'Dashboard'
    },

    {
        id: 2,
        path: '#',
        icon: 'shopping-cart',
        label: 'Sales',
        children: [
            {
                id: 1,
                path: '/sales_orders',
                icon: 'shopping-cart',
                label: 'Orders'
            },
        
            {
                id: 2,
                path: '/sales_invoices',
                icon: 'calendar',
                label: 'Invoices'
            },
        
            {
                id: 3,
                path: '/sales_returns',
                icon: 'calendar',
                label: 'Returns'
            }
        ]
    },
    
    {
        id: 3,
        path: '#',
        icon: 'shopping-bag',
        label: 'Purchase',
        children: [
            {
                id: 1,
                path: '/purchase_orders',
                icon: 'shopping-bag',
                label: 'Orders'
            },
        
            {
                id: 2,
                path: '/purchase_invoices',
                icon: 'calendar',
                label: 'Invoices'
            },
        
            {
                id: 3,
                path: '/purchase_returns',
                icon: 'calendar',
                label: 'Returns'
            }
        ]
    },
    
    {
        id: 4,
        path: '#',
        icon: [ 'fab', 'salesforce' ],
        label: 'SFA',
        children: [
            {
                id: 1,
                path: '/sfa/sales',
                icon: 'shopping-cart',
                label: 'Sales'
            },
        
            {
                id: 2,
                path: '#',
                icon: 'users',
                label: 'Customers',
                children: [
                    {
                        id: 1,
                        path: '/sfa/customers',
                        icon: 'users',
                        label: 'Customers'
                    },

                    {
                        id: 2,
                        path: '/sfa/customers/segments',
                        icon: 'users',
                        label: 'Segments'
                    }
                ]
            }
        ]
    },
    
    {
        id: 5,
        path: '/cashflow',
        icon: 'money-bill',
        label: 'Cash Flows'
    },
    
    {
        id: 6,
        path: '#',
        icon: [ 'fab', 'salesforce' ],
        label: 'Product',
        children: [
            {
                id: 1,
                path: '/products',
                icon: 'shopping-cart',
                label: 'Products'
            },

            {
                id: 2,
                path: '/products/categories',
                icon: 'users',
                label: 'Categories'
            },

            {
                id: 3,
                path: '/products/reviews',
                icon: 'users',
                label: 'Reviews'
            }
        ]
    },

    {
        id: 7,
        path: '#',
        icon: 'users',
        label: 'Customers',
        children: [
            {
                id: 1,
                path: '/customers',
                icon: 'users',
                label: 'Customers'
            },

            {
                id: 2,
                path: '/customers/segments',
                icon: 'users',
                label: 'Segments'
            }
        ]
    }    
]
