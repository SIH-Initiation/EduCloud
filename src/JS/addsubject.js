const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function find(schoolcode,class1,subjectw){
    let ed;
    let ed1;
    let ed2;
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
     console.log(schoolcode,class1,subjectw)
     var s=[];
    //  var z={};
    //  z["name"]="hindi";
    //  var marks={};
    //  marks["fa1"]="30";
    //  marks["fa2"]="30";
    //  marks["sa1"]="60";
    //  z["maxmarks"]=marks;
     var x="subjects:".concat(class1);
     console.log(x)
     db.get(x).then(function(doc) {
         s=doc.subjects
         console.log(s)
         s.push(subjectw)
        return db.put({
            _id:x,
          _rev: doc._rev,
          subjects:subjectw
          
        });
      }).then(function(response){
      }).catch(function (err) {
        console.log(err);
      });}