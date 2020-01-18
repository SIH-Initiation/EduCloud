const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function find(){
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
            "class":localStorage.getItem("class")
        }

    }).then(function(result){
        var ed=JSON.stringify(result);
        var ed1=JSON.parse(ed);

        //for(i=0;i<ed1["docs"].length;i++){
        var ed2=JSON.stringify(ed1["docs"])
        //document.getElementById("json").innerHTML=document.getElementById("json").innerHTML+'<br>'+ed2;}
        //e.insertAdjacentElement('afterbegin',<div><p>{{ed}}</p></div>);
        localStorage.setItem("schoolname",ed2);

    }).catch(function(err){
        document.getElementById("json").innerHTML=err
    });
    window.location.href=''

}