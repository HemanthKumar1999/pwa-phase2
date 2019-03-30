function submitData(){
  var career=document.querySelector("#career").value;


  var name=document.querySelector("#name").value;
  var mobile=document.querySelector("#mobile").value;
  var email=document.querySelector("#email").value;
  var place=document.querySelector("#place").value;


  var ginst=document.querySelector("#ginst").value;
  var gbranch=document.querySelector("#gbranch").value;
  var gyear=document.querySelector("#gyear").value;
  var gper=document.querySelector("#gper").value;


  var iinst=document.querySelector("#iinst").value;
  var ibranch=document.querySelector("#ibranch").value;
  var iyear=document.querySelector("#iyear").value;
  var iper=document.querySelector("#iper").value;



  var sinst=document.querySelector("#sinst").value;
  var syear=document.querySelector("#syear").value;
  var sper=document.querySelector("#sper").value;


  var skills=document.querySelector("#skills").value;


var idb=window.indexedDB || window.mozIndexedDB ||
window.msIndexedDB || window.webIndexedDB ;

if(!idb in window){
  console.log("indexedDB is not supported");
}
var request;
var store;
  var open=idb.open("storeData",1);
  console.log("IndexedDB is created");
  window.open("index.html");
open.onupgradeneeded=function (e){
  request=e.target.result;
  store=request.createObjectStore("formdata",{keyPath:"id",autoIncrement:true});
  console.log("Store is created");
}
open.error=function(error){
  console.log("Error is occured");
}
open.onsuccess=function(e){
  request=e.target.result;
  var transaction=request.transaction("formdata","readwrite");
  store = transaction.objectStore("formdata");
  store.put({
    career:career,
    name:name,email:email,mobile:mobile,place:place,
    education:[
      {
    inst:ginst,branch:gbranch,per:gper,year:gyear
     },
     {
       inst:iinst,branch:ibranch,per:iper,year:iyear
     },
     {
       inst:sinst,per:sper,year:syear
     }
   ],

     skills:skills
  });
}
}
