function call(){
    var x=document.getElementById("class").value;
    localStorage.setItem("class2",x);
    var x="studentList:";
    var z=x.concat(localStorage.getItem("class2"));
    localStorage.setItem("modifiedclass1",z);
    window.location.href='classwisemarks.html'

}
