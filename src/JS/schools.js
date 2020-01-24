//const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function test (){
  var sync = PouchDB.sync("schools",api.concat("schools"), {
        live: true,
      }).on('change', function (info) {
        console.log("change chala");
      }).on('paused', function (err) {
       
      }).on('active', function () {
       
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
        document.getElementById("test").innerHTML=ed2;
      
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
        return ed2;

       
    }).catch(function(err){
        document.getElementById("json").innerHTML=err
    });
}


