function test1(){
    var x1=localStorage.getItem("schoolname");
    //var y1=JSON.parse(x1);
   var x2=localStorage.getItem("schoolcode");
    //var y2=JSON.parse(x2);
    var x3=localStorage.getItem("district");
    //var y3=JSON.parse(x3);
    var x4=localStorage.getItem("subdistrict");
    //var y4=JSON.parse(x4);
    var x5=localStorage.getItem("address");
    //var y5=JSON.parse(x5);
    var x6=localStorage.getItem("phone");
    //var y6=JSON.parse(x6);
    var x7=localStorage.getItem("email");
    //var y7=JSON.parse(x7);
    var x8=localStorage.getItem("board");
    //var y8=JSON.parse(x8);
    var x9=localStorage.getItem("principal");
    //var y9=JSON.parse(x9);
    var x10=localStorage.getItem("teachercount");
    //var y10=JSON.parse(x10);
    document.getElementById("name").innerHTML=x1;
    document.getElementById("schoolcode").innerHTML=x2;
    document.getElementById("district").innerHTML=x3;
    document.getElementById("subdistrict").innerHTML=x4;
    document.getElementById("address").innerHTML=x5;
    document.getElementById("phone").innerHTML=x6;
    document.getElementById("email").innerHTML=x7;
    document.getElementById("board").innerHTML=x8;
    document.getElementById("principal").innerHTML=x9;
    document.getElementById("teachercount").innerHTML=x10;
    const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
var sync = PouchDB.sync(localStorage.getItem("schoolcode"),api.concat(localStorage.getItem("schoolcode")), {
//live: true,
retry: true
}).on('change', function (info) {
console.log("change chala");
}).on('paused', function (err) {
// replication paused (e.g. replication up to date, user went offline)
}).on('active', function () {
// replicate resumed (e.g. new changes replicating, user went back online)
}).on('denied', function (err) {
// a document failed to replicate (e.g. due to permissions)
}).on('complete', function (info) {
console.log("complete")
}).on('error', function (err) {
// handle error
});
var db = new PouchDB(localStorage.getItem("schoolcode"));
db.find({selector:
  {
      "_id":"root:profile"
  },

}).then(function(result){
  var ed=JSON.stringify(result);
  var ed1=JSON.parse(ed);
  var ed2=JSON.stringify(ed1["docs"])
  document.getElementById("test").innerHTML=ed2;
  // localStorage.setItem("schoolname",ed2)
  // localStorage.setItem("schoolcode",ed1["docs"]["0"]["schoolcode"])
  // localStorage.setItem("district",ed1["docs"]["0"]["district"])
  // localStorage.setItem("subdistrict",ed1["docs"]["0"]["subDistrict"])
  // localStorage.setItem("address",ed1["docs"]["0"]["address"])
  // localStorage.setItem("phone",ed1["docs"]["0"]["phone"])
  // localStorage.setItem("email",ed1["docs"]["0"]["email"])
  // localStorage.setItem("board",ed1["docs"]["0"]["board"])
  // localStorage.setItem("principal",ed1["docs"]["0"]["principal"])
  // localStorage.setItem("teachercount",ed1["docs"]["0"]["teacherCount"])
  //document.getElementById("test").innerHTML=localStorage.getItem("district");

  //for(i=0;i<ed1["docs"].length;i++){
 // var ed2=JSON.stringify(ed1["docs"][0]["school"])
  //document.getElementById("json").innerHTML=document.getElementById("json").innerHTML+'<br>'+ed2;}
  //e.insertAdjacentElement('afterbegin',<div><p>{{ed}}</p></div>);
  //localStorage.setItem("schoolname",ed2);
  return ed2;

}).catch(function(err){
  document.getElementById("json").innerHTML=err
  console.log("galat hua")
});
// window.location.href='schoolprofile.html'

}