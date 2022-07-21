

function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="" || password==""){
        
        alert("login failed");
    }
    
    else{
        var url1 ="./youtube.html";
         var winRef = window.open(url1);
        
        
    }
}