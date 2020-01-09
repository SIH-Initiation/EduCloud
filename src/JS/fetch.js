const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
var db = new PouchDB("subdistricts");

function fetchd(){
    var sync = PouchDB.sync('subdistricts',api.concat("subdistricts"), {
        live: true,
        retry: true
      }).on('change', function (info) {
        console.log("change");
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

      db.find({
        selector: {'_id': 'East'},
        fields: ['_id', 'sb'],
      }).then(function (result) {
        console.log(result);
      }).catch(function (err) {
        console.log(err);
      });


  }