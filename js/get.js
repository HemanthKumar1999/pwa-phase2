var idb=window.indexedDB || window.mozIndexedDB ||
window.msIndexedDB || window.webIndexedDB ;

if(!idb in window){
  console.log("indexedDB is not supported");
}
var request;
var store;
  var open=idb.open("storeData",1);
  console.log("IndexedDB is created");

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
  var info=store.getAll();
  info.onsuccess=function(data){
    console.log(data.target.result);
    display(data.target.result);
  }
}

var parent=document.querySelector(".parent");
function display(d){
  for (var i = 0; i < d.length; i++) {
    var child=document.createElement("div");
    child.classList.add("child");
    var image=document.createElement("img");
    image.src="images/logo.svg";
    image.alt=d[i].name;

    var name=document.createElement("h3");
    name.textContent=d[i].name;

    var link=document.createElement("a");
    link.classList.add("link");
    link.href="resume.html?id="+d[i].id;
    link.textContent="viewprofile";
    // var head=document.createElement("h3");
    // head.innerHTML=d[i].name;
    child.append(image);
    child.append(name);
    child.append(link);
    //child.append(head);
    parent.append(child);
  }
}
