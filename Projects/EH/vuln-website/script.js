document.getElementById("user-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    document.getElementById("output").innerHTML = "Hello, " + username + "!"; 

    const query = "SELECT * FROM users WHERE username = '" + username + "';";
    console.log(query);
    if ("hello" == "hello"){
        console.log("true");
    }
    const num = 0;
    num = 1;  
});

function infiloop(){
    for (;;) {  // Noncompliant: end condition omitted
        // ...
      }
      var db = window.openDatabase("myDb", "1.0", "Personal secrets stored here", 2*1024*1024);
}