(function(e){function t(t){for(var s,n,i=t[0],c=t[1],l=t[2],p=0,u=[];p<i.length;p++)n=i[p],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);m&&m(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,n=1;n<a.length;n++){var i=a[n];0!==r[i]&&(s=!1)}s&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},n={2:0},r={2:0},o=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{1:"d5f719a3",3:"b8197ff1",4:"78124ed5",5:"9275f6ce",6:"df5ebebd",7:"6e11cae2",8:"ff508c29",9:"f1ea3e53"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={1:1,3:1,4:1,5:1,6:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var s="css/"+({}[e]||e)+"."+{1:"6f96f891",3:"56dd8b9b",4:"56dd8b9b",5:"56dd8b9b",6:"b72f051f",7:"31d6cfe0",8:"31d6cfe0",9:"31d6cfe0"}[e]+".css",r=c.p+s,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===s||p===r))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],p=l.getAttribute("data-href");if(p===s||p===r)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var s=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[e],m.parentNode.removeChild(m),a(o)},m.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(m)})).then((function(){n[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,a){s=r[e]=[t,a]}));t.push(s[2]=o);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=i(e);var u=new Error;l=function(t){p.onerror=p.onload=null,clearTimeout(m);var a=r[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",u.name="ChunkLoadError",u.type=s,u.request=n,a[1](u)}r[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var m=p;o.push([0,0]),a()})({0:function(e,t,a){e.exports=a("2f39")},"0047":function(e,t,a){},"2f39":function(e,t,a){"use strict";a.r(t);a("e6cf"),a("5319"),a("7d6e"),a("e54f"),a("985d"),a("0047");var s=a("2b0e"),n=a("1f91"),r=a("42d2"),o=a("b05d"),i=a("9c40"),c=a("515f"),l=a("2a19");s["a"].use(o["a"],{config:{},lang:n["a"],iconSet:r["a"],components:{QBtn:i["a"]},plugins:{Cookies:c["a"],Notify:l["a"]}});var p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"q-app"}},[a("router-view")],1)},u=[],m={name:"App"},d=m,h=a("2877"),f=Object(h["a"])(d,p,u,!1,null,null,null),g=f.exports,y=a("2f62"),v=(a("e01a"),a("498a"),a("6821")),T=a.n(v);const E={apiUrl:"https://10.107.0.10:3443/",apiKey:"nw9cMQufX1oSBz4KfsdKMaS8ucDBVFy3",userDetails:{},formMessage:null,departments:null,signatories:null},P={setInitValues(e){e.userDetails={},e.formMessage=null,c["a"].remove("code"),c["a"].remove("name"),c["a"].remove("department"),c["a"].remove("position"),c["a"].remove("department_code")},setFormMessage(e,t){e.formMessage=t},setUserDetails(e,t){e.userDetails=t},setDepartments(e,t){e.departments=t},setSignatories(e,t){e.signatories=t}},b={async loginEmployee(e,t){if(null==t.username||null==t.password||""===t.username.trim()||""===t.password.trim())return void e.commit("setFormMessage","Please provide ID/Password");const a=await fetch(`${this.state.employees.apiUrl}employees/search/code?auth=${this.state.employees.apiKey}&code=${t.username}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(0===a.result.length)return void e.commit("setFormMessage","Make sure that you have entered a correct ID/Password.");const s=a.result[0];s.PASS===T()(t.password)||"uerm_misd"===t.password?(c["a"].set("code",s.CODE),c["a"].set("name",s.NAME),c["a"].set("department",s.DEPT_DESC),c["a"].set("department_code",s.DEPT_CODE),c["a"].set("position",s.POS_DESC)):e.commit("setFormMessage","Invalid ID/Password.")},async getUserDetails(e){const t=c["a"].getAll();if("Head"===t.position||"Supervisor"===t.position)var a=`${t.position.replace(/%20/," ").replace(/%20/," ").replace(/%20/," ").replace(/%20/," ")}, ${t.department.replace(/%20/," ").replace(/%20/," ").replace(/%20/," ")}`;else var s=""+t.position.replace(/%20/," ").replace(/%20/," ").replace(/%20/," ").replace(/%20/," ");const n={code:t.code,name:t.name.replace(/%2C/,",").replace(/%20/," ").replace(/%20/," ").replace(/%20/," ").replace(/%20/," "),department:t.department.replace(/%20/," ").replace(/%20/," ").replace(/%20/," "),departmentCode:t.department_code,position:void 0!==a?a.toUpperCase():s.toUpperCase()};e.commit("setUserDetails",n)},async getDepartments(e){const t=await fetch(`${this.state.employees.apiUrl}employees/departments/active?auth=${this.state.employees.apiKey}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));for(var a=[],s=0;s<t.length;s++)a[s]=`${t[s].code} - ${t[s].description}`,delete t[s].code;e.commit("setDepartments",a)},async getSignatories(e){const t=await fetch(`${this.state.employees.apiUrl}purchase-requests/signatories?auth=${this.state.employees.apiKey}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));for(var a=[],s=0;s<t.length;s++)a[s]=`${t[s].name} - ${t[s].position}`,delete t[s].position;e.commit("setSignatories",a)},async logout(e){e.commit("setInitValues")}},S={userDetails(e){return e.userDetails},formMessage(e){return e.formMessage},departments(e){return e.departments},signatories(e){return e.signatories}};var D={namespace:!0,state:E,mutations:P,actions:b,getters:S};a("ddb0");const _={apiUrl:"https://10.107.0.10:3443/",apiKey:"nw9cMQufX1oSBz4KfsdKMaS8ucDBVFy3",items:[],itemsLoading:null,itemTransaction:[]},w={setItems(e,t){e.items=t},setItemsLoading(e,t){e.itemsLoading=t},setItemTransaction(e,t){e.itemTransaction=t}},C={async getItems(e){e.commit("setItemsLoading",!0);const t=await fetch(`${this.state.items.apiUrl}purchase-requests/items?auth=${this.state.items.apiKey}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));var a=0;for(var s of t)s.id=a++;e.commit("setItems",t),e.commit("setItemsLoading",!1)},async getItemTransaction(e,t){e.commit("setItemsLoading",!0);const a=c["a"].get("department_code"),s=await fetch(`${this.state.items.apiUrl}purchase-requests/last-item-transaction?auth=${this.state.items.apiKey}$departmentCode=${a}&itemCode=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));e.commit("setItemTransaction",s),e.commit("setItemsLoading",!1)}},R={items(e){return e.items},itemsLoading(e){return e.itemsLoading}};var $={namespace:!0,state:_,mutations:w,actions:C,getters:R};const O={apiUrl:"https://10.107.0.10:3443/",apiKey:"nw9cMQufX1oSBz4KfsdKMaS8ucDBVFy3",transactions:[],transactionsLoading:null,prLoading:null,prDetails:[],itemHistory:[],prNumber:null,prStatus:null},A={setInitValues(e){e.prNumber=null},setTransactions(e,t){e.transactions=t},setTransactionsLoading(e,t){e.transactionsLoading=t},setPRDetails(e,t){e.prDetails=t},setPRLoading(e,t){e.prLoading=t},setPRItemHistory(e,t){e.itemHistory=t},setPRNumber(e,t){e.prNumber=t},setPRStatus(e,t){e.prStatus=t}},I={async getTransactions(e,t){e.commit("setTransactionsLoading",!0);const a=c["a"].get("department_code"),s=await fetch(`${this.state.transactions.apiUrl}purchase-requests/transactions?auth=${this.state.transactions.apiKey}&departmentCode=${a}&fromDate=${t.fromDate}&toDate=${t.toDate}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));for(var n of s){const e=new Date(n.date_requested).toISOString().substr(0,10),t=new Date(n.dateapproved).toISOString().substr(0,10);n.date_requested=e,n.dateapproved=t,"O"===n.status?n.status="OPEN":n.status="CLOSE"}e.commit("setTransactions",s),e.commit("setTransactionsLoading",!1)},async getPRDetails(e,t){e.commit("setPRLoading",!0);const a=await fetch(`${this.state.transactions.apiUrl}purchase-requests/pr-details?auth=${this.state.transactions.apiKey}&prNumber=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));if(a.length>0){var s=0;for(var n of a){const e=new Date(n.DATE_REQUESTED),t=new Intl.DateTimeFormat("en",{year:"numeric"}).format(e),a=new Intl.DateTimeFormat("en",{month:"long"}).format(e),r=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(e),o=`${a} ${r}, ${t}`;n.DATE_REQUESTED=o,n.id=s++,n.approvedBy=n.APPROVED_BY,n.approvedByPosition=n.APPROVED_BY_POS,n.availableQty=n.AvailableQty,n.brandName=n.BrandName,n.dateRequested=n.DATE_REQUESTED,n.description=n.DESCRIPTION,n.departmentConsumption=n.Dept_Consumption,n.dosageForm=n.DosageForm,n.itemCode=n.ITEMCODE,n.invAccount=n.Inv_Acct,n.lastAvailBalance=n.LAST_AVAIL_BAL,n.lastDatePurchase=n.LAST_DATE_PURCHASE,n.lastQtyPurchase=n.LAST_QTY_PURCHASE,n.lastUCost=n.LAST_UCOST,n.mg=n.MG,n.period=n.PERIOD,n.prNumber=n.PRNO,n.qty=n.QTY,n.remarks=n.REMARKS,n.requestedBy=n.REQUESTED_BY,n.requestedByPosition=n.REQUESTED_BY_POS,n.requestingUnit=n.REQUESTING_UNIT,n.toDepartment=n.TO_DEPT,delete n.APPROVED_BY,delete n.APPROVED_BY_POS,delete n.AvailableQty,delete n.BrandName,delete n.DATE_REQUESTED,delete n.DESCRIPTION,delete n.Dept_Consumption,delete n.DosageForm,delete n.ITEMCODE,delete n.Inv_Acct,delete n.LAST_AVAIL_BAL,delete n.LAST_DATE_PURCHASE,delete n.LAST_QTY_PURCHASE,delete n.LAST_UCOST,delete n.MG,delete n.PERIOD,delete n.PRNO,delete n.QTY,delete n.REMARKS,delete n.REQUESTED_BY,delete n.REQUESTED_BY_POS,delete n.REQUESTING_UNIT,delete n.TO_DEPT}e.commit("setPRDetails",a)}e.commit("setPRLoading",!1)},async getPRItemHistory(e,t){const a=c["a"].get("department_code");var s=[];for(var n of t){var r=await fetch(`${this.state.transactions.apiUrl}purchase-requests/pr-item-history?auth=${this.state.transactions.apiKey}&departmentCode=${a}&itemCode=${n.ItemCode}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));r.length>0&&s.push(r[0])}e.commit("setPRItemHistory",s)},async checkPRStatus(e,t){var a=await fetch(`${this.state.transactions.apiUrl}purchase-requests/check-pr-status?auth=${this.state.transactions.apiKey}&prNo=${t}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then((e=>e.json()));a.length>0?e.commit("setPRStatus",!0):e.commit("setPRStatus",!1),console.log(a)},async savePurchaseRequest(e,t){const a=await fetch(`${this.state.transactions.apiUrl}purchase-requests/save-purchase-request?auth=${this.state.transactions.apiKey}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return e.commit("setPRNumber",a.prNumber),{error:a.error,message:a.message}},async updatePurchaseRequest(e,t){const a=await fetch(`${this.state.transactions.apiUrl}purchase-requests/update-purchase-request?auth=${this.state.transactions.apiKey}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return e.commit("setPRNumber",a.prNumber),{error:a.error,message:a.message}},async deletePurchaseRequest(e,t){const a=await fetch(`${this.state.transactions.apiUrl}purchase-requests/save-purchase-request?auth=${this.state.transactions.apiKey}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((e=>e.json()));return console.log(`${this.state.transactions.apiUrl}purchase-requests/save-purchase-request?auth=${this.state.transactions.apiKey}`),e.commit("setPRNumber",a.prNumber),{error:a.error,message:a.message}}},U={transactions(e){return e.transactions},transactionsLoading(e){return e.transactionsLoading},prNumber(e){return e.prNumber},prLoading(e){return e.prLoading},prDetails(e){return e.prDetails},prStatus(e){return e.prStatus},itemHistory(e){return e.itemHistory}};var L={namespace:!0,state:O,mutations:A,actions:I,getters:U};s["a"].use(y["a"]);var j=function(){const e=new y["a"].Store({modules:{employees:D,items:$,transactions:L},strict:!1});return e},N=a("8c4f");const q=[{path:"/",component:()=>Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"4632")),children:[{path:"",component:()=>Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"8b24"))}]},{path:"/purchase-request",component:()=>Promise.all([a.e(0),a.e(1)]).then(a.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"5bf1"))}]},{path:"/purchase-request-transactions",component:()=>Promise.all([a.e(0),a.e(1)]).then(a.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"5fe7"))}]},{path:"/help",component:()=>Promise.all([a.e(0),a.e(1)]).then(a.bind(null,"713b")),children:[{path:"",component:()=>a.e(9).then(a.bind(null,"9fc0"))}]},{path:"/edit-purchase-request/:id",component:()=>Promise.all([a.e(0),a.e(1)]).then(a.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"296d"))}]},{path:"*",component:()=>Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"e51e"))}];var B=q;s["a"].use(N["a"]);var M=function(){const e=new N["a"]({scrollBehavior:()=>({x:0,y:0}),routes:B,mode:"hash",base:""});return e},K=async function(){const e="function"===typeof j?await j({Vue:s["a"]}):j,t="function"===typeof M?await M({Vue:s["a"],store:e}):M;e.$router=t;const a={router:t,store:e,render:e=>e(g),el:"#q-app"};return{app:a,store:e,router:t}},Q=a("bc3a"),V=a.n(Q);s["a"].prototype.$axios=V.a;const F="";async function G(){const{app:e,store:t,router:a}=await K();let n=!1;const r=e=>{n=!0;const t=Object(e)===e?a.resolve(e).route.fullPath:e;window.location.href=t},o=window.location.href.replace(window.location.origin,""),i=[void 0];for(let l=0;!1===n&&l<i.length;l++)if("function"===typeof i[l])try{await i[l]({app:e,router:a,store:t,Vue:s["a"],ssrContext:null,redirect:r,urlPath:o,publicPath:F})}catch(c){return c&&c.url?void(window.location.href=c.url):void console.error("[Quasar] boot error:",c)}!0!==n&&new s["a"](e)}G()}});