
const user = JSON.parse(localStorage.getItem('user')) | {user:{role : 'Management'}};

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
      name: 'Payment',
      url: '/payment',
      icon: 'icon-basket',
    },

    {
      name: 'Add Item',
      url: '/addItem',
      icon: 'icon-briefcase',
    },
    {
      name: 'View Item',
      url: '/itemList',
      icon: 'icon-briefcase',
    },
    {
      name: 'Add Order',
      url: '/addOrder',
      icon: 'icon-briefcase',
    },
    
    // Samith's Functions Navigation Items
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
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [{
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
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
    }
  ] 
  }

  
  ]
  
};

// switch (user.role) {
//   case 'Management' : break;
//   case 'Accountant' : 
//             NavigationBar.items = NavigationBar.items.slice(0,3);
//             break;
//   default : NavigationBar = {items: []};
// }

export default NavigationBar;