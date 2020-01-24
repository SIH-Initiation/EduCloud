const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function teacherdivision(schoolcode){
    var sync = PouchDB.sync(schoolcode,api.concat(schoolcode), {
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
     var db = new PouchDB(schoolcode);
   db.find({selector:
    {
        "_id":"root:teacherDivision"
    }

}).then(function(result){
    let ed=JSON.stringify(result);
    let ed1=JSON.parse(ed);
    let ed2=JSON.stringify(ed1["docs"]["0"]["divisions"])
    return ed2;
  
}).catch(function(err){
    return ed2;
})}