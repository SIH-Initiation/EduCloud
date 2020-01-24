const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function call(){
    var sync = PouchDB.sync(localStorage.getItem("schoolcode"),api.concat(localStorage.getItem("schoolcode")), {
       live: true,
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
        "_id":localStorage.getItem("modifiedadminno")
    },

}).then(function(result){
    var ed=JSON.stringify(result);
    var ed1=JSON.parse(ed);
    var ed2=JSON.stringify(ed1["docs"]["0"]["admission_no"])
    var ed21=JSON.parse(ed2)
    var ed3=JSON.stringify(ed1["docs"]["0"]["name"])
    var ed31=JSON.parse(ed3)
    var ed4=JSON.stringify(ed1["docs"]["0"]["standard"])
    var ed41=JSON.parse(ed4)
    var ed5=JSON.stringify(ed1["docs"]["0"]["section"])
    var ed51=JSON.parse(ed5)
    var ed6=JSON.stringify(ed1["docs"]["0"]["gender"])
    var ed61=JSON.parse(ed6)
    var ed7=JSON.stringify(ed1["docs"]["0"]["dob"])
    var ed71=JSON.parse(ed7)
    var ed8=JSON.stringify(ed1["docs"]["0"]["father_name"])
    var ed81=JSON.parse(ed8)
    var ed9=JSON.stringify(ed1["docs"]["0"]["mother_name"])
    var ed91=JSON.parse(ed9)    
    var ed10=JSON.stringify(ed1["docs"]["0"]["phone"])
    var ed101=JSON.parse(ed10)
    var ed11=JSON.stringify(ed1["docs"]["0"]["email"])
    var ed111=JSON.parse(ed11)
    var ed12=JSON.stringify(ed1["docs"]["0"]["address"])
    var ed121=JSON.parse(ed12)
    var ed13=JSON.stringify(ed1["docs"]["0"]["date_of_joining"])
    var ed131=JSON.parse(ed13)
    var ed14=JSON.stringify(ed1["docs"]["0"]["transport"])
    var ed141=JSON.parse(ed14)
    document.getElementById("adno").innerHTML=ed21;
    document.getElementById("name").innerHTML=ed31;
    document.getElementById("standard").innerHTML=ed41;
    document.getElementById("section").innerHTML=ed51;
    document.getElementById("gender").innerHTML=ed61;
    document.getElementById("dob").innerHTML=ed71;
    document.getElementById("fname").innerHTML=ed81;
    document.getElementById("mname").innerHTML=ed91;
    document.getElementById("phone").innerHTML=ed101;
    document.getElementById("email").innerHTML=ed111;
    document.getElementById("address").innerHTML=ed121;
    document.getElementById("doj").innerHTML=ed131;
    document.getElementById("transport").innerHTML=ed141;
    document.getElementById("test").innerHTML=JSON.stringify(ed1["docs"])

    //for(i=0;i<ed1["docs"].length;i++){
   // var ed2=JSON.stringify(ed1["docs"][0]["school"])
    //document.getElementById("json").innerHTML=document.getElementById("json").innerHTML+'<br>'+ed2;}
    //e.insertAdjacentElement('afterbegin',<div><p>{{ed}}</p></div>);
    //localStorage.setItem("schoolname",ed2);

}).catch(function(err){
    document.getElementById("json").innerHTML=err
});
    }