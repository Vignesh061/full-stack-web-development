//checked=property that determains that checked state of an
// HTML checked or radio button elements
const flbtn=document.getElementById("flbtn");
const visa=document.getElementById("visa");
const phonepay=document.getElementById("phonepay");
const Gpay=document.getElementById("Gpay");
const flresult=document.getElementById("flresult");
const payresult=document.getElementById("payresult");

mybtn.onclick=function()
{
    if(flbtn.checked)
    {
        console.log ("Your are Following me");
        flresult.textContent=`Your are Following me `;

    }
    else{
        console.log("Your are not Following me");
        flresult.textContent=`Your are not Following me `;
    }
     
    

    if(visa.checked)
    {
        console.log("Your pay through the Visa");
        payresult.textContent=`Your are pay through the Visa`;
    }
    else if(phonepay.checked)
    {
        console.log("Your are pay through the Phonepay");
        payresult.textContent=`You are pay through the phonepay`;
        
    }
    else if(Gpay.checked)
    {
        console.log("Your are pay through the Gpay");
        payresult.textContent=`Your are pay through the Gpay`;
    }
    else{
        console.log("You must select a paymet type");
        payresult.textContent=`You must select a payment type`;
    }

}