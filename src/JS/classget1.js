function call(){
    var x=document.getElementById("class").value;
    localStorage.setItem("class1",x);
    var x="studentList:";
    var z=x.concat(localStorage.getItem("class1"));
    localStorage.setItem("modifiedclass1",z);
    window.location.href='classwiseattendace.html'

}
