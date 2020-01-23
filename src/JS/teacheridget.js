function find(){
    var x=document.getElementById("code").value;
    localStorage.setItem("teacherid",x);
    window.location.href="teachersprofile.html"
}