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
        path: "/sales_orders",
        component: Components.Sales.Orders
    },

    {
        id: 3,
        path: "/sales_invoices",
        component: Components.Sales.Invoices
    },

    {
        id: 4,
        path: "/sales_returns",
        component: Components.Sales.Returns
    },

    {
        id: 5,
        path: "/purchase_orders",
        component: Components.Purchase.Orders
    },

    {
        id: 6,
        path: "/purchase_invoices",
        component: Components.Purchase.Invoices
    },

    {
        id: 7,
        path: "/purchase_returns",
        component: Components.Purchase.Returns
    },

    {
        id: 8,
        path: "/stock",
        component: 10000
    },

    {
        id: 9,
        path: "/settings",
        component: Components.Settings
    },

    {
        id: 10,
        path: "/cashflow",
        component: Components.CashFlow
    }
]

export default routes