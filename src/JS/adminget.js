
function store(){
    var f=document.getElementById("adminno").value;
    localStorage.setItem("adminno",f);
    var x="student:"
    var z=x.concat(localStorage.getItem("adminno"))
    localStorage.setItem("modifiedadminno",z);
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
     },fields:["name"],
 
 }).then(function(result){
     ed=JSON.stringify(result)
     ed1=JSON.parse(ed)
     ed2=JSON.stringify(ed1["docs"]["0"]["name"])
     //document.getElementById("test").innerHTML=ed2
     localStorage.setItem("name",ed2);
 
 }).catch(function(err){
     document.getElementById("json").innerHTML=err
 });
    window.location.href="studentprofile.html"
}


