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
     var x="subjects:";
     var z=c.concat(localStorage.getItem("class"));
   db.find({selector:
    {
        "_id":z
        }

}).then(function(result){
   var ed=JSON.stringify(result);
   document.getElementById("test").innerHTML=ed;

}).catch(function(err){
    document.getElementById("test").innerHTML=err
})}