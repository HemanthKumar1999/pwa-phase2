var para;
var paravalue;
var query=window.location.search.substring(1).split("?");
for(var i in query){
  para=query[i].substring(1).split("=");
  paravalue=parseInt(para[1]);
}


var idb=window.indexedDB || window.mozIndexedDB ||
window.msIndexedDB || window.webIndexedDB ;



if(!idb in window){
  console.log("indexedDB is not supported");
}



var request;
var store;
  var open=idb.open("storeData",1);
  console.log("IndexedDB is created");
  // window.open("index.html");



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
  var info=store.get(paravalue);
  info.onsuccess=function(data){
    console.log(data);
    personalinfo(data.target.result);
  }
}
var left=document.querySelector(".left");
var right=document.querySelector(".right");
function personalinfo(pi)
{
  var image=document.createElement("img");
  image.src="images/logo.svg";
  image.alt=pi.name;
  left.append(image);
var name=document.createElement("h3");
  name.textContent=pi.name;
  left.append(name);

  var mobile=document.createElement("h3");
    mobile.textContent=pi.mobile;
    left.append(mobile);
    var email=document.createElement("h3");
    email.textContent=pi.email;
    left.append(email);

    var place=document.createElement("h3");
    place.textContent=pi.place;
    left.append(place);
    var head12=document.createElement("h2");
    head12.textContent="Career Objective";
    right.append(head12);
    var career=document.createElement("h3");
    career.textContent=pi.career;
    right.append(career);
    var head11=document.createElement("h2");
    head11.textContent="Education Details";
    right.append(head11);
    var table=document.createElement("table");
    table.border="1";
    var tr1="<tr><th>institute</th><th>branch</th><th>percentage</th><th>year</th></tr>";
    var tr2="";
    for(var i in pi.education){
     tr2=tr2+"<tr><td>"+pi.education[i].inst+"</td>"
     +"<td>"+pi.education[i].branch+"</td>"+
     "<td>"+pi.education[i].per+"</td>"+
     "<td>"+pi.education[i].year+"</td></tr>";
    }
    table.innerHTML=(tr1+tr2);
    right.append(table);
    var head13=document.createElement("h2");
    head13.textContent="Skills";
    right.append(head13);
    var skills=document.createElement("h3");
    skills.textContent=pi.skills;
    right.append(skills);
}
