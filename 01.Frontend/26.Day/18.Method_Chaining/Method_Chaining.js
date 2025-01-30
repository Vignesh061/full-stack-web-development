//Method chaining = Calling one method after another
// in one continuous line of code.'
let username = window.prompt("Enter your user Name:"); //      clevrcodequest
//---------NO METHOD CHAINING ---------

   
    username=username.trim(); //clevercodequest
    let letter=username.charAt(0);//c
       letter=letter.toUpperCase();//C

    let extraname=username.slice(1);
    extraname=extraname.toLowerCase();
    username=letter+extraname;

    console.log(username); 
    
    // ---------METHOD CHAINING ---------

 username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
 console.log(username);