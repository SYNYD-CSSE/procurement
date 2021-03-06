import React from "react";
import Loadable from "react-loadable";

import DefaultLayout from "./containers/DefaultLayout/DefaultLayout";

function Loading() {
  return <div> Loading... </div>;
}

const NewEmployee = Loadable({
  loader: () => import('./views/Employee/NewEmployee'),
  loading: Loading,
});
const EmployeesList = Loadable({
  loader: () => import('./views/Employee/EmployeesList'),
  loading: Loading,
});

const NewUser = Loadable({
  loader: () => import('./views/User/NewUser'),
  loading: Loading,
});
const UsersList = Loadable({
  loader: () => import('./views/User/UsersList'),
  loading: Loading,
});

const Breadcrumbs = Loadable({
  loader: () => import("./views/Base/Breadcrumbs"),
  loading: Loading
});

const Cards = Loadable({
  loader: () => import("./views/Base/Cards"),
  loading: Loading
});

const Carousels = Loadable({
  loader: () => import("./views/Base/Carousels"),
  loading: Loading
});

const Collapses = Loadable({
  loader: () => import("./views/Base/Collapses"),
  loading: Loading
});

const Dropdowns = Loadable({
  loader: () => import("./views/Base/Dropdowns"),
  loading: Loading
});

const Forms = Loadable({
  loader: () => import("./views/Base/Forms"),
  loading: Loading
});

const Jumbotrons = Loadable({
  loader: () => import("./views/Base/Jumbotrons"),
  loading: Loading
});

const ListGroups = Loadable({
  loader: () => import("./views/Base/ListGroups"),
  loading: Loading
});

const Navbars = Loadable({
  loader: () => import("./views/Base/Navbars"),
  loading: Loading
});

const Navs = Loadable({
  loader: () => import("./views/Base/Navs"),
  loading: Loading
});

const Paginations = Loadable({
  loader: () => import("./views/Base/Paginations"),
  loading: Loading
});

const Popovers = Loadable({
  loader: () => import("./views/Base/Popovers"),
  loading: Loading
});

const ProgressBar = Loadable({
  loader: () => import("./views/Base/ProgressBar"),
  loading: Loading
});

const Switches = Loadable({
  loader: () => import("./views/Base/Switches"),
  loading: Loading
});

const Tables = Loadable({
  loader: () => import("./views/Base/Tables"),
  loading: Loading
});

const Tabs = Loadable({
  loader: () => import("./views/Base/Tabs"),
  loading: Loading
});

const Tooltips = Loadable({
  loader: () => import("./views/Base/Tooltips"),
  loading: Loading
});

const BrandButtons = Loadable({
  loader: () => import("./views/Buttons/BrandButtons"),
  loading: Loading
});

const ButtonDropdowns = Loadable({
  loader: () => import("./views/Buttons/ButtonDropdowns"),
  loading: Loading
});

const ButtonGroups = Loadable({
  loader: () => import("./views/Buttons/ButtonGroups"),
  loading: Loading
});

const Buttons = Loadable({
  loader: () => import("./views/Buttons/Buttons"),
  loading: Loading
});

const Charts = Loadable({
  loader: () => import("./views/Charts"),
  loading: Loading
});

const Dashboard = Loadable({
  loader: () => import("./views/Dashboard"),
  loading: Loading
});

const CoreUIIcons = Loadable({
  loader: () => import("./views/Icons/CoreUIIcons"),
  loading: Loading
});

const Flags = Loadable({
  loader: () => import("./views/Icons/Flags"),
  loading: Loading
});

const FontAwesome = Loadable({
  loader: () => import("./views/Icons/FontAwesome"),
  loading: Loading
});

const SimpleLineIcons = Loadable({
  loader: () => import("./views/Icons/SimpleLineIcons"),
  loading: Loading
});

const Alerts = Loadable({
  loader: () => import("./views/Notifications/Alerts"),
  loading: Loading
});

const Badges = Loadable({
  loader: () => import("./views/Notifications/Badges"),
  loading: Loading
});

const Modals = Loadable({
  loader: () => import("./views/Notifications/Modals"),
  loading: Loading
});

const Colors = Loadable({
  loader: () => import("./views/Theme/Colors"),
  loading: Loading
});

const Typography = Loadable({
  loader: () => import("./views/Theme/Typography"),
  loading: Loading
});

const Widgets = Loadable({
  loader: () => import("./views/Widgets/Widgets"),
  loading: Loading
});

const Users = Loadable({
  loader: () => import("./views/Users/Users"),
  loading: Loading
});

const User = Loadable({
  loader: () => import("./views/Users/User"),
  loading: Loading
});

const Payment = Loadable({
  loader: () => import("./views/Payment/Payment"),
  loading: Loading
});

const AddItem = Loadable({
  loader: () => import("./views/Item/AddItem"),
  loading: Loading
});

const OrderDetails = Loadable({
  loader: () => import('./views/Pages/Orders/OrderDetails'),
  loading: Loading,
});
const SupplierRating = Loadable({
  loader: () => import('./views/Pages/Suppliers/SupplierRating'),
  loading: Loading
});

const ItemList = Loadable({
  loader: () => import("./views/Item/ItemList"),
  loading: Loading
});

const AddSupplier = Loadable({
  loader: () => import('./views/Supplier/AddSupplier'),
  loading: Loading,
});
const Changes = Loadable({
  loader: () => import('./views/Pages/Changes/Change'),
  loading: Loading,
});

const ViewSupplier = Loadable({
  loader: () => import('./views/Supplier/ViewSuppliers'),
  loading: Loading,
});

const UpdateSupplier = Loadable({
  loader: () => import('./views/Supplier/UpdateSupplier'),
  loading: Loading,
});

const ViewApprovedOrders = Loadable({
  loader: () => import('./views/ApprovedOrders/ViewApprovedOrders'),
  loading: Loading,
});

const OrderQuotation = Loadable({
  loader: ()=> import('./views/ApprovedOrders/OrderQuotation'),
  loading: Loading,
})
const EditItem = Loadable({
  loader: () => import("./views/Item/EditItem"),
  loading: Loading
});

const AddOrder = Loadable({
  loader: () => import("./views/Order/index"),
  loading: Loading
});
const PlaceOrder = Loadable({
  loader: () => import("./views/Order/components/PlaceOrder"),
  loading: Loading
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  
  { path: '/employee/list', name: 'Employees List', component: EmployeesList },
  { path: '/employee/:id', name: 'New Employee', component: NewEmployee },

 
  { path: '/user/list', name: 'Users List', component: UsersList },
  { path: '/user/:id', name: 'New User', component: NewUser },
 
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', exact: true, name: 'Base', component: Cards },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/forms', name: 'Forms', component: Forms },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Button Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
  { path: '/notifications', exact: true, name: 'Notifications', component: Alerts },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/payment', exact: true,  name: 'Payment', component: Payment },
  { path: '/orders/details', exact: true,  name: 'OrderDetails', component: OrderDetails },
  { path: '/orders/SupplierRating', exact: true,  name: 'SupplierRating', component: SupplierRating },
  { path: '/addSupplier', exact: true,  name: 'Add Supplier', component: AddSupplier },
  { path: '/viewSupplier', exact: true,  name: 'View Supplier', component: ViewSupplier },
  { path: '/updateSupplier/:supplierId', exact: true,  name: 'Update Supplier', component:UpdateSupplier },
  { path: '/viewApprovedOrders', exact: true,  name: 'Approved Orders', component: ViewApprovedOrders },
  { path: '/sendQuotation/:orderId/:refId', exact: true,  name: 'Approved Orders', component: OrderQuotation },

  {
    path: "/addItem",
    exact: true,
    name: "AddItem",
    component: AddItem
  },
  {
    path: "/itemList",
    exact: true,
    name: "ItemList",
    component: ItemList
  },
  {
    path: "/editItem/:itemId",
    exact: true,
    name: "EditItem",
    component: EditItem
  },
  {
    path: "/addOrder",
    exact: true,
    name: "AddOrder",
    component: AddOrder
  },
  {
    path: "/placeOrder",
    exact: true,
    name: "PlaceOrder",
    component: PlaceOrder
  },
  { path: '/orders/items/:orderId', exact: true,  name: 'Changes', component: Changes },
];

export default routes;
