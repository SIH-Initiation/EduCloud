const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';





function test (){
  var db = new PouchDB("school1");
  
  

  var doc = {
    '_id':  document.getElementById('admno').value,
    "name": document.getElementById("fname").value,
    'lastname': document.getElementById('lname').value,
    'schoolcode': document.getElementById('schoolcode').value,
    'dob':  document.getElementById('dob').value.toString(),
    'stand': document.getElementById('standard').value,
    'section':  document.getElementById('section').value,
    'bloodgroup': document.getElementById('bloodgroup').value,
    'father': document.getElementById('fathersname').value,
    'mother': document.getElementById('mothersname').value,
    'address': document.getElementById('address').value,
    'phone': document.getElementById('contactnumber').value,
    'doj':document.getElementById('doj').value,
    'dol':document.getElementById('dol').value
  
  } 
        db.get(document.getElementById('admno').value).catch(function (err) {
          if (err.name === 'not_found') {
          console.log("not found, adding new");
          db.put(doc).then(function (response) {
           console.log(response);
           }).catch(function (err) {
             console.log(err);
           });   
          } else { 
            console.log("kuch ho gya");
            
          }
        }).then(function (configDoc) {
          var doc2 = {
            '_id':  document.getElementById('admno').value,
            "_rev":configDoc["_rev"],
            "name": document.getElementById("fname").value,
            'lastname': document.getElementById('lname').value,
            'schoolcode': document.getElementById('schoolcode').value,
            'dob':  document.getElementById('dob').value.toString(),
            'stand': document.getElementById('standard').value,
            'section':  document.getElementById('section').value,
            'bloodgroup': document.getElementById('bloodgroup').value,
            'father': document.getElementById('fathersname').value,
            'mother': document.getElementById('mothersname').value,
            'address': document.getElementById('address').value,
            'phone': document.getElementById('contactnumber').value,
            'doj':document.getElementById('doj').value,
            'dol':document.getElementById('dol').value
          
          }
          db.put(doc2).then(function (response) {
            console.log(response);
            console.log("ho gya")
            }).catch(function (err) {
              console.log(err);
            });   

        }).catch(function (err) {
          console.error("err")
        });

      //   db.sync('https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/school1', function(err, response) {
      //     if (err) {
      //        return console.log(err);
      //     } else {
      //        console.log(response);
      //     }
      //  });
      var sync = PouchDB.sync('school1',api.concat("school1"), {
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

  
  } 