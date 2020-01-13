//const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function test (){
    var sync = PouchDB.sync(api.concat("schools"),"schools"), {
        live: true,
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
    var db = new PouchDB("schools");
    db.find({selector:
        {
            "subdistrict":"east"
        },
        fields:['_id','school','principal','board']

    }).then(function(result){
        var ed=JSON.stringify(result);
        var i=0;
        var ed1=JSON.parse(ed);
        //var i;
        for(i=0;i<3;i++){
            ed3=JSON.stringify(ed1["docs"][i]["_id"])
            ed2=JSON.stringify(ed1["docs"][i]["school"])
            ed4=JSON.stringify(ed1["docs"][i]["principal"])
            ed5=JSON.stringify(ed1["docs"][i]["board"])
            ed31=JSON.parse(ed3)
            ed21=JSON.parse(ed2)
            ed41=JSON.parse(ed4)
            ed51=JSON.parse(ed5)
        var h = document.getElementById("json");
        h.insertAdjacentHTML("afterend", ed51);
        h.insertAdjacentHTML("afterend", '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
        h.insertAdjacentHTML("afterend", ed41);
        h.insertAdjacentHTML("afterend", '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
        h.insertAdjacentHTML("afterend", ed21);
        h.insertAdjacentHTML("afterend", '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
        h.insertAdjacentHTML("afterend", ed31);
        h.insertAdjacentHTML("afterend", "<br>");
        //for(i=0;i<ed1["docs"].length;i++){
        //var ed2=JSON.stringify(ed1["docs"][i]["school"])
        //document.getElementById("json").innerHTML=document.getElementById("json").innerHTML+'<br>'+ed2;}
        //e.insertAdjacentElement('afterbegin',<div><p>{{ed}}</p></div>);

    }}).catch(function(err){
        document.getElementById("json").innerHTML=err
    });
}
