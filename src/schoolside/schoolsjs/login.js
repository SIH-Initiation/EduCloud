function signup(){
    var username= document.getElementById("schoolcode");
    var password=document.getElementById("passwordschool");
    var db= new PouchDB("credentials");
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    window.location.href = "school_landing.html";
    
}