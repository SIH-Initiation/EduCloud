const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
//to fetch district
async function district(){
    let l=[];
    let ed;
    let ed1;
    let ed2;
    var sync = PouchDB.sync("sikkim",api.concat("sikkim"), {
      // live: true,
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
     var db = new PouchDB("sikkim");
   db.find({selector:
    {
        "_id":{"$type":"string"}
    },"fields":["_id"]

}).then(function(result){
    ed=JSON.stringify(result);
    ed1=JSON.parse(ed);
    ed2=JSON.stringify(ed1["docs"]);
    var i=0;
    for(i=0;i<ed1["docs"].length;i++){
        l.push(ed1["docs"][i]["_id"]);
    }
  
}).catch(function(err){
    return err;
})
return l;}

// function find(){
//     var x=document.getElementById("district").value
//     localStorage.setItem("district",x);
//     window.location.href="subdistrict1.html"
// }

//to fetch subdistrict isko district bhejna
function subdistrict(district){
    let subdistrict=[];
    let ed;
    let ed1;
    let ed2;
    var sync = PouchDB.sync("sikkim",api.concat("sikkim"), {
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
     var db = new PouchDB("sikkim");
   result = await db.find({selector:
    {
        "_id":district
    }

})
function kuch_bhi(result){
    ed=JSON.stringify(result);
    ed1=JSON.parse(ed);
    ed2=JSON.stringify(ed1["docs"]["0"]["subdistricts"]);
    subdistrict=ed2;
    console.log(ed2);
    return ed2;
  
})
function(err){
    return(err);
})}

// function find(){
//     var x=document.getElementById("subdistrict").value
//     localStorage.setItem("subdistrict",x);
//     window.location.href='schools.html'

// }

//to fetch schoolist isko subdistrict bhejna hai
function schoollist (subdistrict){
    let ed2;
    let ed;
    let ed1;
    var sync = PouchDB.sync("schools",api.concat("schools"), {
          live: true,
          retry:true,
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
      db.get(subdistrict).then(function(result){
          var ed=JSON.stringify(result);
          var ed1=JSON.parse(ed);
          var ed2=JSON.stringify(ed1["schools"]);
          var ed3=JSON.parse(ed2);
        
    
          return ed2;
  
         
      }).catch(function(err){
          return err;
      });
  }
//   const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
// function findschools (){
//     var getinput=document.getElementById("sc").value;
//     //var d=JSON.stringify(getinput);
//     localStorage.setItem("schoolcode",getinput);
//     var sync = PouchDB.sync(localStorage.getItem("schoolcode"),api.concat(localStorage.getItem("schoolcode")), {
//       //live: true,
//       retry: true
//     }).on('change', function (info) {
//       console.log("change chala");
//     }).on('paused', function (err) {
//       // replication paused (e.g. replication up to date, user went offline)
//     }).on('active', function () {
//       // replicate resumed (e.g. new changes replicating, user went back online)
//     }).on('denied', function (err) {
//       // a document failed to replicate (e.g. due to permissions)
//     }).on('complete', function (info) {
//      console.log("complete")
//     }).on('error', function (err) {
//       // handle error
//     });
//     var db = new PouchDB(localStorage.getItem("schoolcode"));
//     db.find({selector:
//         {
//             "_id":"root:profile"
//         },

//     }).then(function(result){
//         var ed=JSON.stringify(result);
//         var ed1=JSON.parse(ed);
//         var ed2=JSON.stringify(ed1["docs"]["0"]["name"])
//         localStorage.setItem("schoolname",ed2)
//         localStorage.setItem("schoolcode",ed1["docs"]["0"]["schoolcode"])
//         localStorage.setItem("district",ed1["docs"]["0"]["district"])
//         localStorage.setItem("subdistrict",ed1["docs"]["0"]["subDistrict"])
//         localStorage.setItem("address",ed1["docs"]["0"]["address"])
//         localStorage.setItem("phone",ed1["docs"]["0"]["phone"])
//         localStorage.setItem("email",ed1["docs"]["0"]["email"])
//         localStorage.setItem("board",ed1["docs"]["0"]["board"])
//         localStorage.setItem("principal",ed1["docs"]["0"]["principal"])
//         localStorage.setItem("teachercount",ed1["docs"]["0"]["teacherCount"])
//         //document.getElementById("test").innerHTML=localStorage.getItem("district");

//         //for(i=0;i<ed1["docs"].length;i++){
//        // var ed2=JSON.stringify(ed1["docs"][0]["school"])
//         //document.getElementById("json").innerHTML=document.getElementById("json").innerHTML+'<br>'+ed2;}
//         //e.insertAdjacentElement('afterbegin',<div><p>{{ed}}</p></div>);
//         //localStorage.setItem("schoolname",ed2);

//     }).catch(function(err){
//         document.getElementById("json").innerHTML=err
//         console.log("galat hua")
//     });
//     window.location.href='schoolprofile.html'

// }

//to fetch schollprofile isko schoolcode bhej
function schoolprofile(schoolcode){
      let ed;
      let ed1;
      let ed2;
var sync = PouchDB.sync(schoolcode,api.concat(schoolcode), {
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
var db = new PouchDB(schoolcode);
db.find({selector:
  {
      "_id":"root:profile"
  },

}).then(function(result){
  ed=JSON.stringify(result);
  ed1=JSON.parse(ed);
  ed2=JSON.stringify(ed1["docs"]);
  
  return ed2;

}).catch(function(err){
  return err;
  console.log("galat hua")
});

}
//ye single student wala hai yeh classlist fetch krega isko schoolcode bhej
function classlist(schoolcode){
    let c=[];
    var sync = PouchDB.sync(schoolcode,api.concat(schoolcode), {
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
    var db = new PouchDB(schoolcode);
    db.find({selector:
        {
            "_id":"root:class_list"
        },

    }).then(function(result){
        var ed=JSON.stringify(result);
        var ed1=JSON.parse(ed);
        for(i=0;i<ed1["docs"]["0"]["class_list"].length;i++){
          c.push(ed1["docs"]["0"]["class_list"][i]);
        }
        

    }).catch(function(err){
        document.getElementById("json").innerHTML=err
    });
    return c;
}
// function call(){
//     var x=document.getElementById("class").value;
//     localStorage.setItem("class",x);
//     var x="studentList:";
//     var z=x.concat(localStorage.getItem("class"));
//     localStorage.setItem("modifiedclass",z);
//     window.location.href='studentlist.html'

// }

//to show student_list isko class or school_code bhej
function studentlist(schoolcode,class1){
     var sync = PouchDB.sync(schoolcode,api.concat(schoolcode), {
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
    var db = new PouchDB(schoolcode);
    var x="studentList:";
    var z=x.concat(class1);
    db.find({selector:
        {
            "_id":z
        },

    }).then(function(result){
        var ed=JSON.stringify(result);
        var ed1=JSON.parse(ed);
        var ed2=JSON.stringify(ed1["docs"]["0"]["students"]);
        var i=0;
        return ed2;

    }).catch(function(err){
        return ed2;
    });
}

// function store(){
//     var f=document.getElementById("adminno").value;
//     localStorage.setItem("adminno",f);
//     var x="student:"
//     var z=x.concat(localStorage.getItem("adminno"))
//     localStorage.setItem("modifiedadminno",z);
//     var sync = PouchDB.sync(localStorage.getItem("schoolcode"),api.concat(localStorage.getItem("schoolcode")), {
//         live: true,
//         retry: true
//       }).on('change', function (info) {
//         console.log("change chala");
//       }).on('paused', function (err) {
//         // replication paused (e.g. replication up to date, user went offline)
//       }).on('active', function () {
//         // replicate resumed (e.g. new changes replicating, user went back online)
//       }).on('denied', function (err) {
//         // a document failed to replicate (e.g. due to permissions)
//       }).on('complete', function (info) {
//        console.log("complete")
//       }).on('error', function (err) {
//         // handle error
//       });
//     var db = new PouchDB(localStorage.getItem("schoolcode"));
//     db.find({selector:
//      {
//          "_id":localStorage.getItem("modifiedadminno")
//      },fields:["name"],
 
//  }).then(function(result){
//      ed=JSON.stringify(result)
//      ed1=JSON.parse(ed)
//      ed2=JSON.stringify(ed1["docs"]["0"]["name"])
//      //document.getElementById("test").innerHTML=ed2
//      localStorage.setItem("name",ed2);
 
//  }).catch(function(err){
//      document.getElementById("json").innerHTML=err
//  });
//     window.location.href="studentprofile.html"
// }



//to fetch student profile isko schoolcode and admission no bhej
function studentprofile(schoolcode,admno){
    let ed2;
    var sync = PouchDB.sync(schoolcode,api.concat(schoolcode), {
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
   var db = new PouchDB(schoolcode);
   var x="student:";
   var z=x.concat(admnno);
   db.find({selector:
    {
        "_id":z
    },

}).then(function(result){
    var ed=JSON.stringify(result);
    var ed1=JSON.parse(ed);
    ed2=JSON.stringify(ed1["docs"]);
    return ed2;
    

}).catch(function(err){
    return ed2;
});
    }

//marks ke liye function but ispr discussion krna hai
function marks(schoolcode,student_adm,class1){
        var sync = PouchDB.sync(schoolcode,api.concat(schoolcode), {
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
      let ed1=0;
       var db = new PouchDB(schoolcode);
       var x="subjects:"
       let subjects=[];
        let exams=[];
       var z=x.concat(class1);
       db.find({selector:
        {
            "_id":z
        },
    
    }).then(function(result){
        var ed=JSON.stringify(result);
        ed1=JSON.parse(ed)
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
    
        
    
        
    
    }).catch(function(err){
        document.getElementById("json").innerHTML=err
    });
    var s="marks:"
    var f=s.concat(student_adm)
    db.find({selector:
        {
            "_id":f
        },
    
    }).then(function(result){
       var wd=JSON.stringify(result);
       var wd1=JSON.parse(wd);
       var wd2=JSON.stringify(wd1["docs"])
       var i=0;
       var j=0;
       var k=0;
       var sub=0;
       var ex=0;
       var maxmarks=0;
       var marks=0;
       for(i=0;i<exams.length;i++){
         ex=exams[i]
         for(j=0;j<subjects.length;j++){
           sub=subjects[i]
           for(k=0;k<ed1["docs"]["0"]["subjects"].length;k++){

             if(JSON.stringify(ed1["docs"]["0"]["subjects"][k]["name"])===JSON.stringify(sub)){
             
               maxmarks=ed1["docs"]["0"]["subjects"][k]["maxMarks"][ex]
               
               break;
             }
           }
           marks=wd1["docs"]["0"][ex][sub]
           }
       }
    
        
    
    }).catch(function(err){
        document.getElementById("json").innerHTML=err
    });
    
    
    
        }
//student_wise attendance ke liye or isko schoolcode and admin nno bhejna hai and discuss krna hai
function attendance(schoolcode,adminno){
    let date=[];
    let att=[];
    var sync = PouchDB.sync(schoolcode,api.concat(schoolcode), {
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
     var db = new PouchDB(schoolcode);
   db.find({selector:
    {
        "date":{
            "$type":"string"
        },
    "doc_type":"attendace"},

}).then(function(result){
    var ed=JSON.stringify(result);
    var ed1=JSON.parse(ed);
    var ed2=JSON.stringify(ed1["docs"].length);
    var i=0;
    for(i=0;i<ed1["docs"].length;i++){
       date.push(ed1["docs"][i]["date"]);
       att.push(ed1["docs"][i][adminno])
    }
    return(date,att);
}).catch(function(err){
    document.getElementById("test").innerHTML=err
})}
//to fetch divisons of teacher isko school code bhej
function teacherdivision(schoolcode){
    var sync = PouchDB.sync(schoolcode,api.concat(schoolcode), {
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
     var db = new PouchDB(schoolcode);
   db.find({selector:
    {
        "_id":"root:teacherDivision"
    }

}).then(function(result){
    let ed=JSON.stringify(result);
    let ed1=JSON.parse(ed);
    let ed2=JSON.stringify(ed1["docs"]["0"]["divisions"])
    return ed2;
  
}).catch(function(err){
    return ed2;
})}
// function find(){
//     var x=document.getElementById("division").value
//     localStorage.setItem("division",x);
//     window.location.href="teacherslist.html"
// }

//to fetch teacher list isko division and school code bhej
function teacherlist(schoolcode,division){
    let ed;
    let e1;
    let ed2;
    var sync = PouchDB.sync(schoolcode,api.concat(schoolcode), {
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
     var db = new PouchDB(schooolcode);
     var x="teacherDivision:";
     var z=x.concat(division);
   db.find({selector:
    {
        "_id":z
    }

}).then(function(result){
    ed=JSON.stringify(result);
    ed1=JSON.parse(ed);
    ed2=JSON.stringify(ed1["docs"]["0"]["teachers"])
    return ed2;
  
}).catch(function(err){
    return err;
})}
// function find(){
//     var x=document.getElementById("code").value;
//     localStorage.setItem("teacherid",x);
//     window.location.href="teachersprofile.html"
// }

//to fetch teacher profile isko schoolcode or teacher ke id bhej

function teacherprofile(schoolcode,teacherid){
    let ed;
    let ed1;
    let ed2;
    var sync = PouchDB.sync(schoolcode,api.concat(schoolcode), {
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
     var db = new PouchDB(schoolcode);
     var x="teacher:";
     var z=x.concat(teacherid);
   db.find({selector:
    {
        "_id":z
    }

}).then(function(result){
    ed=JSON.stringify(result);
    ed1=JSON.parse(ed);
    ed2=JSON.stringify(ed1["docs"]);
    return ed2;
  
}).catch(function(err){
    return err;
})}

//class-wise attendace needs discussion
function classattendance(schoolcode,class1){
    var sync = PouchDB.sync(schoolcode,api.concat(schoolcode), {
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
     var db = new PouchDB(schoolcode);
   db.find({selector:
    {
        "date":{
            "$type":"string"
        },
    "doc_type":"attendace"},

}).then(function(result){
    var ed=JSON.stringify(result);
    var ed1=JSON.parse(ed);
    var ed2=JSON.stringify(ed1["docs"].length)
    //document.getElementById("test").innerHTML=ed2;
    var adm=[]
    var i=0
    var e;
    for(e in ed1["docs"]["0"]){
       
        if(JSON.stringify(e)===JSON.stringify("date") || JSON.stringify(e)===JSON.stringify("doc_type") || JSON.stringify(e)===JSON.stringify("_id")|| JSON.stringify(e)===JSON.stringify("_rev")){
            continue;
        }
        else{
            adm.push(e);
        }
    }
   
    var j=0;
    for(i=0;i<ed1["docs"].length;i++){
                                 
        
        for(j=0;j<adm.length;j++){
        }
    }

    return 
}).catch(function(err){
    return 
})}