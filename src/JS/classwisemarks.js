const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
 function call(){
  let subjects=[];
  let exams=[];
  let combine=[];
    var sync = PouchDB.sync(localStorage.getItem("schoolcode"),api.concat(localStorage.getItem("schoolcode")), {
       live: true,
       retry: true
     }).on('change', function (info) {
    console.log("change")
     }).on('paused', function (err) {
     
       // replication paused (e.g. replication up to date, user went offline)
     }).on('active', function () {
     
     }).on('denied', function (err) {
      
       // a document failed to replicate (e.g. due to permissions)
     }).on('complete', function (info) {
      var db = new PouchDB(localStorage.getItem("schoolcode"));
      
     let ed;
     let ed1;
     let ed2;
      var x="subjects:";
      var y=localStorage.getItem("class2");
      var z=x.concat(y);
    db.find({selector:
     {
         "_id":z
         }
 
 }).then(function(result){
    ed=JSON.stringify(result);
    ed1=result;
    //ed1=JSON.stringify(result["docs"])
    //document.getElementById("test").innerHTML=ed1;
     var ed2=JSON.stringify(ed1["docs"]["0"]["subjects"]["0"]["maxMarks"])
     var i=0;
     var max1=0;
     var maxi=0;
     for(i=0;i<ed1["docs"]["0"]["subjects"].length;i++){
         subjects.push(ed1["docs"]["0"]["subjects"][i]["name"])
         if(ed1["docs"]["0"]["subjects"][i]["maxMarks"].length>max1){
             max1=ed1["docs"]["0"]["subjects"][i]["maxMarks"].length;
             maxi=i;
         }
     }
     var e;
     for(e in ed1["docs"]["0"]["subjects"][maxi]["maxMarks"]){
         exams.push(e);
     }
     //document.getElementById("test").innerHTML=subjects.length;
     //document.getElementById("test1").innerHTML=exams.length;
     console.log(subjects);
     console.log(exams);
     console.log(subjects.length);
     console.log(exams.length);
 
 }).catch(function(err){
     document.getElementById("test").innerHTML=err
 })
      console.log("complete")
     }).on('error', function (err) {
       // handle error
     });
     var db = new PouchDB(localStorage.getItem("schoolcode"));
    let ed;
    let ed1;
    let ed2;
     var x="subjects:";
     var y=localStorage.getItem("class2");
     var z=x.concat(y);
   db.find({selector:
    {
        "_id":z
        }

}).then(function(result){
   ed=JSON.stringify(result);
   ed1=result;
   //ed1=JSON.stringify(result["docs"])
   //document.getElementById("test").innerHTML=ed1;
    var ed2=JSON.stringify(ed1["docs"]["0"]["subjects"]["0"]["maxMarks"])
    var i=0;
    var max1=0;
    var maxi=0;
    for(i=0;i<ed1["docs"]["0"]["subjects"].length;i++){
        subjects.push(ed1["docs"]["0"]["subjects"][i]["name"])
        if(ed1["docs"]["0"]["subjects"][i]["maxMarks"].length>max1){
            max1=ed1["docs"]["0"]["subjects"][i]["maxMarks"].length;
            maxi=i;
        }
    }
    var e;
    for(e in ed1["docs"]["0"]["subjects"][maxi]["maxMarks"]){
        exams.push(e);
    }
   
let marks=new Array();
let j=0;

for(i=0;i<subjects.length;i++){
  for(j=0;j<exams.length;j++){
    console.log("!");
    var x="marks:";
    var y=localStorage.getItem("class2");
    let z=x.concat(y);
    let a="-";
    let b=z.concat(a);
    let c=b.concat(subjects[i]);
    let d=c.concat("-");
    let e=d.concat(exams[j]);
    console.log(e);
db.find({selector:
  {
      "_id":e
  }

}).then(function(result){
 ed=JSON.stringify(result);
 ed1=JSON.parse(ed);
 ed2=JSON.stringify(ed1["docs"])
 
 console.log(ed2);
 marks.push(ed1["docs"]);
 console.log(marks)
 // var i=0;
  // for(i=0;i<ed1["docs"]["0"]["subjects"].length;i++){
  //     subjects.push(ed1["docs"]["0"]["subjects"][i]["name"])
  //     if(ed1["docs"]["0"]["subjects"][i]["maxMarks"].length>max1){
  //         max1=ed1["docs"]["0"]["subjects"][i]["maxMarks"].length;
  //         maxi=i;
  //     }
  // }
  // var e;
  // for(e in ed1["docs"]["0"]["subjects"][maxi]["maxMarks"]){
  //     exams.push(e);
  // }
  // document.getElementById("test").innerHTML=subjects;
  // document.getElementById("test1").innerHTML=exams;

  



}).catch(function(err){
  return err;
})}}
combine.push(subjects);
combine.push(exams);
combine.push(marks);
console.log(combine);
}).catch(function(err){
  return err;
 })
// console.log("!");
// let marks=new Array();
// let j=0;
// //document.getElementById("test").innerHTML=subjects.length;
// //document.getElementById("test1").innerHTML=exams.length;
// for(i=0;i<subjects.length;i++){
//   for(j=0;j<exams.length;j++){
//     console.log("!");
//     var x="marks:";
//     var y=localStorage.getItem("class2");
//     var z=x.concat(y);
//     var a="-";
//     var b=z.concat(a);
//     var c=z.concat(subjects[i]);
//     var d=z.concat("-");
//     var e=z.concat(exams[j]);
// db.find({selector:
//   {
//       "_id":e
//   }

// }).then(function(result){
//  ed=JSON.stringify(result);
//  ed1=result;
//  //ed1=JSON.stringify(result["docs"])
//  //document.getElementById("test").innerHTML=ed1;
//  // var ed2=JSON.stringify(ed1["docs"]["0"]["subjects"]["0"]["maxMarks"])
//  console.log(ed);
//   document.getElementById("test").innerHTML=document.getElementById("test").innerHTML+"br"+ed;
//  // var i=0;
//   var max1=0;
//   var maxi=0;
//   // for(i=0;i<ed1["docs"]["0"]["subjects"].length;i++){
//   //     subjects.push(ed1["docs"]["0"]["subjects"][i]["name"])
//   //     if(ed1["docs"]["0"]["subjects"][i]["maxMarks"].length>max1){
//   //         max1=ed1["docs"]["0"]["subjects"][i]["maxMarks"].length;
//   //         maxi=i;
//   //     }
//   // }
//   // var e;
//   // for(e in ed1["docs"]["0"]["subjects"][maxi]["maxMarks"]){
//   //     exams.push(e);
//   // }
//   // document.getElementById("test").innerHTML=subjects;
//   // document.getElementById("test1").innerHTML=exams;

  



// }).catch(function(err){
//   document.getElementById("test").innerHTML=err
// })}}}
console.log(combine)
 }