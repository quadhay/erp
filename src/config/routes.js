import Components from '../components/routeComponents'

const routes = [
    {
        id: 1,
        path: "/",
        exact: true,
        component: Components.DashBoard
    },

    {
        id: 2,
        path: "/sales-orders",
        component: Components.Sales.Orders
    },

    {
        id: 3,
        path: "/sales-invoices",
        component: Components.Sales.Invoices
    },

    {
        id: 4,
        path: "/sales-returns",
        component: Components.Sales.Returns
    },

    {
        id: 5,
        path: "/purchase-orders",
        component: Components.Purchase.Orders
    },

    {
        id: 6,
        path: "/purchase-invoices",
        component: Components.Purchase.Invoices
    },

    {
        id: 7,
        path: "/purchase-returns",
        component: Components.Purchase.Returns
    },

    {
        id: 8,
        path: "/stock",
        component: 10000
    }
]

export default routes