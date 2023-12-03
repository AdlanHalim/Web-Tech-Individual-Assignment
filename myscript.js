function validateForm() {
    
    var form = document.getElementById("rm1-form");
    
    var name = form.elements["name"];
    var staffNo = form.elements["staff-no"];
    var contactNo = form.elements["contact-no"];
    var email = form.elements["email"];
    var amount = form.elements["amount"];
    var campaign = form.elements["campaign"];

    let scrollUp = document.getElementById("scroll-up");
    let scrollDown = document.getElementById("scroll-down");
    
    scrollUp.addEventListener("click", function() {
        window.scrollBy(0, -200);
    });
    
    scrollDown.addEventListener("click", function() {
        window.scrollBy(0, 200);
    });

}