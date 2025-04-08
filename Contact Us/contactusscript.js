function sendMail(event){
    event.preventDefault();


    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_pkwuyft", "template_ensgaoz", params)
        .then(response => {
            alert("Email Sent Successfully!");
            console.log("Email sent:", response);
        })
        .catch(error => {
            alert("Failed to send email.");
            console.error("Error:", error);
        });
}