const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function test(){
    var sync = PouchDB.sync(localStorage.getItem("schoolcode"),api.concat(localStorage.getItem("schoolcode")), {
      //live: true,
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
            "_id":"root:class_list"
        },

    }).then(function(result){
        var ed=JSON.stringify(result);
        var ed1=JSON.parse(ed);
        for(i=0;i<ed1["docs"]["0"]["class_list"].length;i++){
            var node = document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode(ed1["docs"]["0"]["class_list"][i]);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node = document.createElement("tr")                 // Create a <li> node
            var textnode = document.createTextNode("");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
        }
        //var ed2=JSON.stringify(ed1["docs"]["0"]["class_list"].length)
        //var ed3=JSON.stringify(ed2["0"]["class_list"])
        //document.getElementById("test").innerHTML=ed2;
       /* var ed1=JSON.parse(ed);
        var ed2=JSON.stringify(ed1["docs"]["0"]["name"])
        localStorage.setItem("schoolname",ed2)
        localStorage.setItem("schoolcode",ed1["docs"]["0"]["schoolcode"])
        localStorage.setItem("district",ed1["docs"]["0"]["district"])
        localStorage.setItem("subdistrict",ed1["docs"]["0"]["subDistrict"])
        localStorage.setItem("address",ed1["docs"]["0"]["address"])
        localStorage.setItem("phone",ed1["docs"]["0"]["phone"])
        localStorage.setItem("email",ed1["docs"]["0"]["email"])
        localStorage.setItem("board",ed1["docs"]["0"]["board"])
        localStorage.setItem("principal",ed1["docs"]["0"]["principal"])
        localStorage.setItem("teachercount",ed1["docs"]["0"]["teacherCount"])
        //document.getElementById("test").innerHTML=localStorage.getItem("district");

        //for(i=0;i<ed1["docs"].length;i++){
       // var ed2=JSON.stringify(ed1["docs"][0]["school"])
        //document.getElementById("json").innerHTML=document.getElementById("json").innerHTML+'<br>'+ed2;}
        //e.insertAdjacentElement('afterbegin',<div><p>{{ed}}</p></div>);
        //localStorage.setItem("schoolname",ed2);*/

    }).catch(function(err){
        document.getElementById("json").innerHTML=err
    });
}