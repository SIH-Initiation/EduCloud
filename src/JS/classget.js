function call(){
    var x=document.getElementById("class").value;
    localStorage.setItem("class",x);
    var x="studentList:";
    var z=x.concat(localStorage.getItem("class"));
    localStorage.setItem("modifiedclass",z);
    window.location.href='studentlist.html'

}
