function signup(){
    var username= document.getElementById("schoolcode").value;
    var password=document.getElementById("passwordschool").value;
    var db= new PouchDB("credentials");
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
   


    axios.post('https://academicdb-api.herokuapp.com/api/users/login/', {
        username: username,
        password: password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
        console.log(password)
      });
    }