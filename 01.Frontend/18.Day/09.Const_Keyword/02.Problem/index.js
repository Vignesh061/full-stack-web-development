const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mybtn").onclick = function() {
    radius = document.getElementById("myinput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh3").textContent = circumference;
}
