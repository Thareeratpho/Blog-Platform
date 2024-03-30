//nav
function navFunction() {
    var nav = document.getElementById("myLinks");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}

//log in
function loginFunction() {
    var modal = document.getElementById("login-modal");
    var btn = document.getElementById("loginbutton");
    var span = document.getElementsByClassName("close")[0];
    if (btn && modal) {
        btn.onclick = function() {
            modal.style.display = "block";
        }
    }
    if (span && modal) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
};