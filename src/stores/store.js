

import { navigate } from "svelte-routing";
import { writable } from "svelte/store";

export const token = writable(localStorage.getItem("token"));
export const Authenticated = writable(localStorage.getItem("Authenticated"));
export const modal = writable(null);
export const version = "0.0039";
export const coreserviceurl = "http://34.75.84.64:80";
export const coreserviceregisterurl = "http://35.237.236.4:80";
export const customerList = writable([]);
export const customerSelected = writable({});
export const keyObservationSelected = writable({});
export const workingWithDashboardsSelected = writable({});
export const workingWithUserSelected = writable({});

export const menuOption = writable([]);

export const idelTimeout = writable(600000);

export const stadisticDashboard = writable({StadisticPanel:[],CharLine:{},RecommendationByUser:[]});

export const currentMenuOption = writable({});

export const MonthsName = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];

export const recommendationByUser = writable([]);
let timeless = "";
const timeOut = 5000 * 1000;
const delayStartTimeOut = 5000;
var h = 0;
var m = 0;
var s = 0;

function userStore() {
  const { subscribe, set } = writable(getStorage());

  return {
    subscribe,
    loginUser: (arg) => set(arg),
    logoutUser: () => set(null),
  };
}

export function setStorage(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getStorage() {
  let ItemUser = localStorage.getItem("user");
  return ItemUser ? JSON.parse(ItemUser) : null;
}

export const user = userStore();

export function setCustomerSelected(customer) {
  // console.log("Set Customer:", customer);
  localStorage.setItem("customer", JSON.stringify(customer));
}

export function getCustomerSelected() {
  let itemCustomer = localStorage.getItem("customer");
  // console.log("Get Customer:", itemCustomer);
  return itemCustomer ? JSON.parse(itemCustomer) : null;
}
var TimeOutValue;
var TimeOutValueTime;
function startTimeOut() {
  console.log("Entre al Time Out");
  // detectionAction();

  h = 0;
  m = 0;
  s = 0;

  // convertMmtoH(timeOut);
  TimeOutValueTime = setInterval(() => {
    timerOfTimeOut();
  }, 1000);

  TimeOutValue = setTimeout(() => {
  //   Swal.fire({
  //     template: '#my-template'
  // })
    // Swal.fire({
    //   title: "Time Out",
    //   buttonsStyling: true,
    //   backdrop: true,
    //   confirmButtonClass: "btn btn-warning",
    //   icon: "warning",
    //   // customClass: {
    //   //   container: 'containerAlert',
    //   // }
    //   // width: "850px",
    // });
    logout();
  }, timeOut);
}

export function detectionAction() {
  var el = document.getElementById("contentApp");
  el.addEventListener(
    "click",
    function () {
      clearTimeout(TimeOutValue);
      clearInterval(TimeOutValueTime);
      clearTimeout(delay);
      delayTimeOut();
      console.log("Entre al click");
    },
    false
  );
  el.addEventListener(
    "mouseenter",
    function () {
      clearTimeout(TimeOutValue);
      clearInterval(TimeOutValueTime);
      clearTimeout(delay);
      delayTimeOut();
      console.log("Entre al mouse enter");
    },
    false
  );
  el.addEventListener(
    "mouseleave",
    function () {
      clearTimeout(TimeOutValue);
      clearInterval(TimeOutValueTime);
      clearTimeout(delay);
      startTimeOut();
      console.log("Entre al mouse leave");
    },
    false
  );

  // console.log("Elemento es=>",el.addEventListener())
}
s
var delay;
export function delayTimeOut() {
  delay = setTimeout(() => {
    startTimeOut();
  }, delayStartTimeOut);
}
function timerOfTimeOut() {
  
  var hAux, mAux, sAux;
  s++;
  if (s > 59) {
    m++;
    s = 0;
  }
  if (m > 59) {
    h++;
    m = 0;
  }
  if (h > 59) {
    h = 0;
  }

  if (s < 10) {
    sAux = "0" + s;
  } else {
    sAux = s;
  }
  if (m < 10) {
    mAux = "0" + m;
  } else {
    mAux = m;
  }
  if (h < 10) {
    hAux = "0" + h;
  } else {
    hAux = h;
  }

  timeless = hAux + ":" + mAux + ":" + sAux;
  // console.log("Nueva hora==>",timeless);
}

function convertMmtoH(duration) {
  (s = Math.floor((duration / 1000) % 60)),
    (m = Math.floor((duration / (1000 * 60)) % 60)),
    (h = Math.floor((duration / (1000 * 60 * 60)) % 24));

  // h = (h < 10) ? "0" + h : h;
  // m = (m < 10) ? "0" + m : m;
  // s = (s < 10) ? "0" + s : s;
}


export const logout = () => {

    console.log("Entre al logut")
    localStorage.clear();
    Authenticated.set(false);
    navigate("/", { replace: true,  });
    
  };

  export function formatDate(date){
    let newDate = new Date(date)
    newDate = newDate.toLocaleDateString("en-US");
    return newDate
  }
  

export  function getStatusColor(pstatus) { 
  pstatus = pstatus.toUpperCase();
  if (pstatus === "AUTHORIZE" || pstatus === "ACTIVE" || pstatus ===  "ACCEPTED")
      return "text-teal-500"

  if (pstatus === "DENY" || pstatus === "INACTIVE" || pstatus ===  "CANCELED")
    return "text-red-500"

  if (pstatus === "DELETE")
    return "text-black"

  if (pstatus === "NEW")
    return "text-gray-500"

}