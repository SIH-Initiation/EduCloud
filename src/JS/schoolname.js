const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
function test (){
    var db = new PouchDB(api.concat(""));
    var sub="schoolcode"
    db.find({selector:
        {
            "subdistrict":schoolcode
        }
    }).then(function(result){
        for(i=0;i<result.length;i++){
            document.getElementById("json").innerHTML=document.getElementById("json")+"<br>"+result[i]
        }
    }).catch(function(err){
        document.getElementById("json").innerHTML=err
    });
}