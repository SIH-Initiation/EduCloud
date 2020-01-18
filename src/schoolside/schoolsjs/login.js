function signup(){
    var username= document.getElementById("schoolcode").value;
    var password=document.getElementById("passwordschool").value;
    var db= new PouchDB("credentials");
  var doc ={
    '_id':username,
    'password':password
  }
  
  db.get(username).then(function (doc) {
      if(doc["password"]==password){
        window.location.href='school_landing.html'
      }
  }).catch(function (err) {
    console.log(err);
    console.log("nhi milla")
  });

    axios.post('https://academicdb-api.herokuapp.com/api/users/login/', {
        username: username,
        password: password
      })
      .then(function (response) {
        db.put(doc).then(function (response) {
          console.log(response);
          console.log("ho gya")
          }).catch(function (err) {
            console.log(err);
          });   
        console.log(response);
        db.get(username).catch(function (err) {
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
            '_id':username,
            'password':password,
            "_rev":configDoc["_rev"] 
          }
          db.put(doc2).then(function (response) {
            console.log(response);
            console.log("ho gya")
            }).catch(function (err) {
              console.log(err);
            });   
            window.location.href='school_landing.html'

        }).catch(function (err) {
          console.error("err")
        });
        
      })
      .catch(function (error) {
        console.log(error);
        
      });
    }