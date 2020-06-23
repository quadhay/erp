
export const sidebar = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
        path: '/stock',
        icon: 'store',
        label: 'Stock'
    },
    
    {
        id: 4,
        path: '/cashflow',
        icon: 'money-bill',
        label: 'Cash Flows'
    }    
]
