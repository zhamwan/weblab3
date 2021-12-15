var Var = setInterval(function() {
    Timer();
}, 13000);

function Timer() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}