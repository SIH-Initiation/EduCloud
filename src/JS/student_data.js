// var PouchDB = require('pouchdb');
// var admno= document.getElementById("admno").value;
// var fname = document.getElementById("fname");
// var lname = document.getElementById('lname');
// var schoolcode = document.getElementById('schoolcode');
// // var rollnumber = document.get.getElementById('rollnumber');
// var dob = document.getElementById('dob');



function test (){
  var db = new PouchDB('school1');
  var doc = {
    '_id':  document.getElementById('admno').value,
    "name": document.getElementById("fname").value,
    'lastname': document.getElementById('lname').value,
    'schoolcode': document.getElementById('schoolcode').value,
    'dob':  document.getElementById('dob').value.toString(),
  

    // 'stand': document.getElementById('standard')toString(),
  };

  db.put(doc).then(function (response) {
          alert(responses)
        }).catch(function (err) {
          console.log(err);
        });   

  
//   db.put({
//       '_id':  document.getElementById("admno"),
//       'firstname': document.getElementById("fname"),
//       'lastname': document.getElementById('lname'),
//       'schoolcode': document.getElementById('schoolcode'),
//       'dob':  document.getElementById('dob'),
//       'stand': document.getElementById('standard'),
//       'sec': document.getElementById("section"),
//       'bloodgrp': document.getElementById('bloodgroup'),
//       'transport': document.getElementById("transport"),
//       'father': document.getElementById('fathersname'),
//       'mother': document.getElementById('mothersname'),
//       'address': document.getElementById('address'),
//       'number':document.getElementById('contactnumber'),
//       'doj':document.getElementById('doj'),
//       'dol':document.getElementById('dol')
//     },).then(function (response) {
//       console.log(response);
//     }).catch(function (err) {
//       console.log(err);
//     });   
  
  }