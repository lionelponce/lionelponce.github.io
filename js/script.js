"use strict"
document.getElementById('btnSend').addEventListener("click", sendWhatsapp);


function sendWhatsapp(){
    let name = encodeURIComponent(document.getElementById('name').value);
    let message = encodeURIComponent(document.getElementById('message').value);

    // https://wa.me/1XXXXXXXXXX?text=I'm%20interested%20in%20your%20car%20for%20sale
    window.open("https://wa.me/+543465409011?text="+message+"%0A*"+name+"*");
}