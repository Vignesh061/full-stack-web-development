//2.Professional Way : Using Html textbox

let username;

document.getElementById("mybtn").onclick=function(){
    username=document.getElementById("mytext").value;
    console.log(username);

    document.getElementById("demo").textContent=`Hello ${username}`;

}