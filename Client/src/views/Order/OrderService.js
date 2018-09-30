import NotificationService, {
  NOTIF_ORDERLIST_CHANGED
} from "./NotificationService";

let ns = new NotificationService();

let instance = null;
var orderList = [];
class OrderService {
  constructor() {
    // super();
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  itemOnOrderList = item => {
    for (let x = 0; x < orderList.length; x++) {
      if (orderList[x]._id === item._id) {
        return true;
      }
    }
    return false;
  }
  addOrderListItem = item => {
    orderList.push(item);
    ns.postNotification(NOTIF_ORDERLIST_CHANGED, orderList)
  };

  removeOrderListItem = item => {
    for (let x = 0; x < orderList.length; x++) {
      if (orderList[x]._id === item._id) {
        orderList.splice(x, 1);
        ns.postNotification(NOTIF_ORDERLIST_CHANGED, orderList)
        break;
      }
    }
  };
}

export default OrderService;
