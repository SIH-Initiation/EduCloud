const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function call(){
    var k=localStorage.getItem("name");
    var d=JSON.parse(k)
    document.getElementById("name").innerHTML=k;
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
     document.getElementById("adm").innerHTML=localStorage.getItem("schoolcode");
     var x=localStorage.getItem("class1");
     console.log(x);
   db.find({selector:
    {
        "date":{
            "$type":"string"
        },
        "standard":x,
    "doc_type":"attendace"},

}).then(function(result){
    var ed=JSON.stringify(result);
    var ed1=JSON.parse(ed);
    var ed2=JSON.stringify(ed1["docs"].length)
    //document.getElementById("test").innerHTML=ed2;
    console.log(ed)
    var adm=[]
    var i=0
    var e;
    var node = document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode("DATE");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node = document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode("    ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
    for(e in ed1["docs"]["0"]){
       
        if(JSON.stringify(e)===JSON.stringify("date") || JSON.stringify(e)===JSON.stringify("doc_type") || JSON.stringify(e)===JSON.stringify("_id")|| JSON.stringify(e)===JSON.stringify("_rev") || JSON.stringify(e)===JSON.stringify(x)){
            continue;
        }
        else{
            adm.push(e);
        }
    }
    for(i=0;i<adm.length;i++){
        var node = document.createElement("td")                 // Create a <li> node
        var textnode = document.createTextNode(adm[i]);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("json").appendChild(node);
        var node = document.createElement("td")                 // Create a <li> node
        var textnode = document.createTextNode(" ");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("json").appendChild(node);
    }
    var j=0;
    for(i=0;i<ed1["docs"].length;i++){
        var node = document.createElement("tr")                 // Create a <li> node
        var textnode = document.createTextNode(" ");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("json").appendChild(node);
        var node = document.createElement("td")                 // Create a <li> node
        var textnode = document.createTextNode(ed1["docs"][i]["date"]);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("json").appendChild(node);
        for(j=0;j<adm.length;j++){
            var node = document.createElement("td")                 // Create a <li> node
        var textnode = document.createTextNode(ed1["docs"][i][adm[j]]);         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("json").appendChild(node);
        var node = document.createElement("td")                 // Create a <li> node
        var textnode = document.createTextNode(" ");         // Create a text node
        node.appendChild(textnode);                              // Append the text to <li>
        document.getElementById("json").appendChild(node);
        }
    }

}).catch(function(err){
    document.getElementById("test").innerHTML=err
})}