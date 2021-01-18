var submit = document.getElementById("SubmitButton");

submit.addEventListener("click", function (){
    alert("From: " + document.getElementById("From").value + ", " +
        "Email: " + document.getElementById("Email").value + ", " +
        "Subject: " + document.getElementById("Subject").value + ", " +
        "Message: " + document.getElementById("Message").value)
});