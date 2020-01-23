const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function call(){
    var k=localStorage.getItem("name");
    var d=JSON.parse(k)
    document.getElementById("name").innerHTML=k;
    document.getElementById("adm").innerHTML=localStorage.getItem("adminno");
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
  var ed1=0;
   var db = new PouchDB(localStorage.getItem("schoolcode"));
   var x="subjects:"
   var subjects=[];
    var exams=[];
   var z=x.concat(localStorage.getItem("class"));
   db.find({selector:
    {
        "_id":z
    },

}).then(function(result){
    var ed=JSON.stringify(result);
    ed1=JSON.parse(ed)
    var ed2=JSON.stringify(ed1["docs"]["0"]["subjects"]["0"]["maxMarks"])
    //console.log("hello");
    document.getElementById("test").innerHTML=ed2;
    var i=0;
    var max1=0;
    var maxi=0;
    var node = document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode("TYPE OF EXAM");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node = document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode(" ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
    for(i=0;i<ed1["docs"]["0"]["subjects"].length;i++){
        subjects.push(ed1["docs"]["0"]["subjects"][i]["name"])
        if(ed1["docs"]["0"]["subjects"][i]["maxMarks"].length>max1){
            max1=ed1["docs"]["0"]["subjects"][i]["maxMarks"].length;
            maxi=i;
        }
        var node = document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode(ed1["docs"]["0"]["subjects"][i]["name"]);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node = document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode(" ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
    }
    var e;
    for(e in ed1["docs"]["0"]["subjects"][maxi]["maxMarks"]){
        exams.push(e);
    }
    //document.getElementById("test2").innerHTML=subjects;
    //document.getElementById("test3").innerHTML=exams;

    

    

}).catch(function(err){
    document.getElementById("json").innerHTML=err
});
var s="marks:"
var f=s.concat(localStorage.getItem("adminno"))
db.find({selector:
    {
        "_id":f
    },

}).then(function(result){
   var wd=JSON.stringify(result);
   var wd1=JSON.parse(wd);
   var wd2=JSON.stringify(wd1["docs"])
   document.getElementById("test1").innerHTML=wd2;
   var i=0;
   var j=0;
   var k=0;
   var sub=0;
   var ex=0;
   var maxmarks=0;
   var marks=0;
   for(i=0;i<exams.length;i++){
     ex=exams[i]
     var node = document.createElement("tr")                 // Create a <li> node
            var textnode = document.createTextNode(" ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node = document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode(ex);         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
            var node = document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode(" ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);
     for(j=0;j<subjects.length;j++){
       sub=subjects[i]
     //  console.log(ex,sub,ed1)
       for(k=0;k<ed1["docs"]["0"]["subjects"].length;k++){
       // console.log("hello");
       // console.log(ed1["docs"]["0"]["subjects"][k]["name"],JSON.stringify(sub))
         if(JSON.stringify(ed1["docs"]["0"]["subjects"][k]["name"])===JSON.stringify(sub)){
         //  console.log("hello")
           maxmarks=ed1["docs"]["0"]["subjects"][k]["maxMarks"][ex]
           //console.log(maxmarks)
           break;
         }
       }
       marks=wd1["docs"]["0"][ex][sub]
       //console.log("hello")
       var node = document.createElement("td")                 // Create a <li> node
       var textnode = document.createTextNode(marks);         // Create a text node
       node.appendChild(textnode);                              // Append the text to <li>
       document.getElementById("json").appendChild(node);
       var node = document.createElement("td")                 // Create a <li> node
            var textnode = document.createTextNode(" ");         // Create a text node
            node.appendChild(textnode);                              // Append the text to <li>
            document.getElementById("json").appendChild(node);




     }
   }

    

}).catch(function(err){
    document.getElementById("json").innerHTML=err
});



    }