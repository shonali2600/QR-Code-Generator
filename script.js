const Qrtext = document.querySelector("input");
const Qrimg = document.querySelector("img");
const generateQR = document.querySelector("button");

generateQR.addEventListener("click", generate);

function generate(){
    const url = 'https://chart.googleapis.com/chart?cht=qr&chl=' + Qrtext.value + '&chs=160x160&chld=L|0'
    Qrimg.src = url;
}