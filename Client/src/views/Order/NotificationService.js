export const NOTIF_ORDERLIST_CHANGED = "notif_orderlist_changed";

let instance = null;
var observers = {};
class NotificationService {
  constructor() {
    // super();
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  postNotification = (notifName, data) => {
    let obs = observers[notifName];
    for (let x = 0; x < obs.length; x++) {
      var obj = obs[x];
      obj.callBack(data);

    }
  }
  removeObserver = (observer, notifyName) => {
    var obs = observers[notifyName];
    if (obs) {
      for (let x = 0; x < obs.length; x++) {
        if (observer === obs[x].observer) {
          obs.splice(x, 1);
          observers[notifyName] = obs;
          break;
        }

      }
    }
  }
  addObserver = (notifyName, observer, callBack) => {
    let obs = observers[notifyName];

    if (!obs) {
      observers[notifyName] = [];
    }

    let obj = {
      observer: observer,
      callBack: callBack
    };
    observers[notifyName].push(obj);
  }
}

export default NotificationService;
