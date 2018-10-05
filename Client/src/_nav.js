
const user = JSON.parse(localStorage.getItem('user'));

let NavigationBar = {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Procurement System',
      wrapper: { // optional wrapper object
        element: '', // required valid HTML5 element tag
        attributes: {} // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '' // optional class names space delimited list for title item ex: "text-center"
    },
    {
      name: 'Employee',
      url: '/employee',
      icon: 'icon-people',
      children: [
        {
          name: 'New Employee',
          url: '/employee/new',
          icon: 'icon-plus',
        },
        {
          name: 'Employee List',
          url: '/employee/list',
          icon: 'icon-list',
        }
      ]
    },
    {
      name: 'User',
      url: '/user',
      icon: 'icon-user',
      children: [
        {
          name: 'New User',
          url: '/user/new',
          icon: 'icon-plus',
        },
        {
          name: 'User List',
          url: '/user/list',
          icon: 'icon-list',
        }
      ]
    },

    {
      name: 'Add Supplier',
      url: '/addSupplier',
      icon: 'icon-basket',
    },
    {
      name: 'View Supplier',
      url: '/viewSupplier',
      icon: 'icon-basket',
    },

   

    
    {
      name: 'Approved Orders',
      url: '/viewApprovedOrders',
      icon: 'icon-basket',
    },


    {
      name: 'Payment',
      url: '/payment',
      icon: 'icon-basket',
    },

    {
      name: 'Categories',
      url: '/category',
      icon: 'icon-people',
      children: [

        {
          // optional class names space delimited list for title item ex: "text-center"
          name: 'Add Item',
          url: '/addItem',
          icon: 'icon-briefcase',
        },
        {
          name: 'View Item',
          url: '/itemList',
          icon: 'icon-briefcase',
        },

      ]
    },

    {
      name: 'Orders',
      url: '/order',
      icon: 'icon-people',
      children: [
        {
          name: 'Add Order',
          url: '/addOrder',
          icon: 'icon-briefcase',
        },
        {
          name: 'Place Order',
          url: '/placeOrder',
          icon: 'icon-briefcase',
        },
      ]
    },


    {
      name: 'Order Details',
      url: '/orders/details',
      icon: 'fa fa-file-text-o ',

    },
    {
      name: 'Supplier Rating',
      url: '/orders/SupplierRating',
      icon: 'icon-star',

    }
  ]

};

if (user != null) {
  console.log(NavigationBar.items );
  switch (user.role) {
    
    case 'Management': break;
    case 'Accountant':
      NavigationBar.items = NavigationBar.items.slice(7, 8);
      break;
    case 'SiteManager':
      NavigationBar.items = NavigationBar.items.slice(10, 12);
      break;
    case 'Constructor':
      NavigationBar.items = NavigationBar.items.slice(8, 10);
      break;
    case 'Supplier':
      NavigationBar.items = NavigationBar.items.slice(6,7);
      break;
   // default: NavigationBar = { items: [] };
  }
}
else if(user === null && window.location.href != "http://localhost:3000/login") {
  window.location.href = "http://localhost:3000/login";
}

console.log(NavigationBar.items );
export default NavigationBar;