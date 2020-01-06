psa = require("pouchdb-seamless-auth")(PouchDB);
const api= 'https://869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix:76147209959e786263adc8636eb25e3e61edeb63e68d1b7aa0bd183690f2808f@869a3a9a-8356-4ae9-8dbf-06e2f727e1ba-bluemix.cloudantnosqldb.appdomain.cloud/';
var db = new PouchDB(api.concat("school1"));

function logMe(){
    var k=document.getElementById('code');
    var l= document.getElementById('passcode');
    var db = new PouchDB("users");
    db.seamlessSignUp(k, l)
.then(function (response) {
 console.log(response);
})
}