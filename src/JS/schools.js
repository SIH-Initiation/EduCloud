//const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function test (){
    var sync = PouchDB.sync("schools",api.concat("schools"), {
        live: true,
      }).on('change', function (info) {
        console.log("change chala");
      }).on('paused', function (err) {
        // replication paused (e.g. replication up to date, user went offline)
      }).on('active', function () {
        // replicate resumed (e.g. new changes replicating, user went back online)
      }).on('denied', function (err) {
       
      }).on('complete', function (info) {
       console.log("complete")
      }).on('error', function (err) {
        // handle error
      });
    var db = new PouchDB("schools");
    db.get(localStorage.getItem("subdistrict")).then(function(result){
        var ed=JSON.stringify(result);
        var ed1=JSON.parse(ed);
        var ed2=JSON.stringify(ed1["schools"])
        var ed3=JSON.parse(ed2)
        //var ed2=JSON.parse(ed1["schools"]);
       // document.getElementById("json").innerHTML=ed3.length;
        var i;
        for(i=0;i<ed3.length;i++){
          var ed4=JSON.stringify(ed3[i]["name"]);
          var ed5=JSON.stringify(ed3[i]["code"]);
          var ed41=JSON.parse(ed4);
          var ed51=JSON.parse(ed5);
          var node = document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode(ed41);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node = document.createElement("td");                 // Create a <li> node
            var textnode = document.createTextNode("          ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node = document.createElement("td");                 // Create a <li> node
            var textnode = document.createTextNode("          ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node = document.createElement("td");                 // Create a <li> node
            var textnode = document.createTextNode(ed51);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node = document.createElement("td");                 // Create a <li> node
            var textnode = document.createTextNode("          ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node = document.createElement("tr");                 // Create a <li> node
            var textnode = document.createTextNode(" ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
        }
        //var i=0;
        //var ed1=JSON.parse(ed);
        //var ed2=JSON.parse(ed1["schools"])
        //var i;
        //for(i=0;i<3;i++){
          //  ed3=JSON.stringify(ed1["docs"][i]["_id"])
           // ed2=JSON.stringify(ed1["docs"][i]["school"])
            //ed4=JSON.stringify(ed1["docs"][i]["principal"])
            //ed5=JSON.stringify(ed1["docs"][i]["board"])
            //ed31=JSON.parse(ed3)
            //ed21=JSON.parse(ed2)
            //ed41=JSON.parse(ed4)
            //ed51=JSON.parse(ed5)
        //var h = document.getElementById("json");
        //h.insertAdjacentHTML("afterend", ed51);
        //h.insertAdjacentHTML("afterend", '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
        //h.insertAdjacentHTML("afterend", ed41);
        //h.insertAdjacentHTML("afterend", '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
        //h.insertAdjacentHTML("afterend", ed21);
        //h.insertAdjacentHTML("afterend", '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
        //h.insertAdjacentHTML("afterend", ed31);
        //h.insertAdjacentHTML("afterend", "<br>");
        //for(i=0;i<ed1["docs"].length;i++){
        //var ed2=JSON.stringify(ed1["docs"][i]["school"])
        //document.getElementById("json").innerHTML=document.getElementById("json").innerHTML+'<br>'+ed2;}
        //e.insertAdjacentElement('afterbegin',<div><p>{{ed}}</p></div>);

    }).catch(function(err){
        document.getElementById("json").innerHTML=err
    });
}
