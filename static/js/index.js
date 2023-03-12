const inputEl = document.querySelector(".input")
const bodyEl = document.querySelector("body")
const invest = document.querySelector(".navInvest")
const ProfilePicName = document.querySelector(".ProfilePicName")
const theme = document.querySelector(".theme")
const leftOne = document.querySelector("#leftOne")
const leftTwo = document.querySelector("#leftTwo")
const leftThree = document.querySelector("#leftThree")
const leftFour = document.querySelector("#leftFour")
const leftFive = document.querySelector("#leftFive")
const leftSix = document.querySelector("#leftSix")
const leftSeven = document.querySelector("#leftSeven")
const leftEight = document.querySelector("#leftEight")
const leftParagraph = document.querySelector(".leftParagraph")
const leftParagraphOne = document.querySelector(".leftParagraphOne")
const leftParagraphTwo = document.querySelector(".leftParagraphTwo")
const leftParagraphThree = document.querySelector(".leftParagraphThree")
const leftParagraphFour = document.querySelector(".leftParagraphFour")
const leftParagraphFive = document.querySelector(".leftParagraphFive")
const leftParagraphSix = document.querySelector(".leftParagraphSix")
const leftParagraphSeven = document.querySelector(".leftParagraphSeven")
const leftParagraphEight = document.querySelector(".leftParagraphEight")
const leftONE = document.querySelector("#leftONE")

inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
    if(inputEl.checked) {
        bodyEl.style.background = "black";
        bodyEl.style.color = "white"
        invest.style.color = "black"
        ProfilePicName.style.color = "black"
 
    }
    else{
        bodyEl.style.background = "gainsboro";
        bodyEl.style.color = "black"
        leftONE.style.background = "white"
    }
}

inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
})

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked))
}


const hamicon = document.querySelector("#HAMICON")
const left = document.querySelector(".left")

hamicon.addEventListener("click", function (){
    left.classList.toggle("showleft")
})


const logoutDIV = document.querySelector(".logoutDIV");
const navProfile = document.querySelector(".navProfile");
const body = document.querySelector("body")

navProfile.addEventListener('click', function(){
    logoutDIV.classList.toggle("showlogoutDIV")
})



document.querySelector(".ProfilePicName").innerHTML = localStorage.getItem("userName")

const log = document.querySelector(".logout")

log.addEventListener("click", function () {
    alert("LOGOUT SUCCESSFULL")
})


const profilePic = document.querySelector("#ProfilePic");
const file = document.querySelector("#file");
const uploadbtn = document.querySelector("#uploadbtn");

file.addEventListener("change", function(){
    const choosedFile = this.files[0];

    if(choosedFile){
        const reader = new FileReader();
        reader.addEventListener("load", function(){
            profilePic.setAttribute('src', reader.result);
        })
        reader.readAsDataURL(choosedFile);
    }
    
})

let mineBTC = document.querySelector(".mineBTC")
let mineETHEREUIM = document.querySelector(".mineETHEREUIM")
let minemineUSDTBTC = document.querySelector(".mineUSDT")

let middleElOneChildPrice = document.querySelector(".middleElOneChildPrice")
let ethchild = document.getElementById("ethchild")
let usdtchild = document.getElementById("usdtchild")

// let numbers = 2;
// var sec = 0;

// mineBTC.onclick = () => {
//     setInterval(()=>{
//         middleElOneChildPrice.innerHTML = `${numbers}<span>.00</span>`
//         numbers++
//     },1000);
// }

let outputtens = document.getElementById("tens")
let numbers = 1;
var sec = 0;

mineBTC.onclick = () => {
    setInterval(()=>{
        middleElOneChildPrice.innerHTML = '0000' + sec;
        sec++
        if(sec > 5){
            numbers++
            outputtens.innerHTML = "0" + numbers
            sec = 0;
            outputtens.innerHTML = "" + numbers
        }
        mineBTC.innerHTML = "minning..."
        mineBTC.style.color="white"
    },200);
}
middleElOneChildPrice.innerHTML = ""



// let ethnumber = 2
// mineETHEREUIM.onclick = () => {
//     setInterval(()=>{
//         ethchild.innerHTML = `${ethnumber}<span>.00</span>`
//         ethnumber++
//     },1000);
// }


let middleElOneChildPriceid = document.getElementById("middleElOneChildPrice")
// let ethnumber = 1
let ethnum =1 
var secs = 0;

mineETHEREUIM.onclick = () => {
    setInterval(()=>{
        middleElOneChildPriceid.innerHTML = '0000' + secs;
        secs++
        if(secs > 5){
            ethnum++
            ethchild.innerHTML = "0" + ethnum
            secs = 0;
            ethchild.innerHTML = "" + ethnum
        }
        mineETHEREUIM.innerHTML = "minning..."
        mineETHEREUIM.style.color="white"
    },200);
}
middleElOneChildPriceid.innerHTML = ""

// let usdtnumber = 2 
// minemineUSDTBTC.onclick = () => {
//     setInterval(()=>{
//         usdtchild.innerHTML = `${usdtnumber}<span>.00</span>`
//         usdtnumber++
//     },1000);
// }


let middleElOneChildPriceidusdt = document.getElementById("middleElOneChildPriceidusdt")
let usdtnumber = 1
var secss = 0;

minemineUSDTBTC.onclick = () => {
    setInterval(()=>{
        middleElOneChildPriceidusdt.innerHTML = '0000' + secss;
        secss++
        if(secss > 5){
            usdtnumber++
            usdtchild.innerHTML = "0" + usdtnumber
            secss = 0;
            usdtchild.innerHTML = "" + usdtnumber
        }
        minemineUSDTBTC.innerHTML = "minning..."
        minemineUSDTBTC.style.color="white"
    },200);
}

middleElOneChildPriceidusdt.innerHTML = ""