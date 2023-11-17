let statOne = document.getElementById("status-one")
let statTwo = document.getElementById("status-two")
let statThree = document.getElementById("status-three")
let previousIcon = document.getElementById("prev")
let nextIcon = document.getElementById("next")
let landing = document.getElementById("land")
let overLay = document.getElementById("overlay")
let titleInfo = document.getElementById("tit-info")
let desc = document.getElementById("tit-desc")

function oneActive() {
    statOne.classList.add("active")
    statTwo.classList.remove("active")
    statThree.classList.remove("active")
    landing.style.cssText = "background-image: url(images/img2.jpg)";
    titleInfo.innerHTML = "Green Energy for a Sustainable Future"
    desc.innerHTML = "Join us in our mission for a greener planet. Watt Charge is proud to offer eco-friendly battery solutions, including rechargeable batteries that reduce waste and contribute to environmental conservation."
}
function twoActive() {
    statOne.classList.remove("active")
    statTwo.classList.add("active")
    statThree.classList.remove("active")
    landing.style.cssText = "background-image: url(images/img1.jpg)";
    titleInfo.innerHTML = "Customized Business Solutions"
    desc.innerHTML = "Discover how Watt Charge can tailor battery solutions to meet the unique needs of your business. From bulk purchasing options to branded partnerships, we provide reliable and scalable solutions for businesses of all sizes."
}
function threeActive() {
    statOne.classList.remove("active")
    statTwo.classList.remove("active")
    statThree.classList.add("active")
    landing.style.cssText = "background-image: url(images/img3.jpg)";
    titleInfo.innerHTML = "Powering Your Devices, Empowering Your Life"
    desc.innerHTML = "At Watt Charge, we are dedicated to delivering top-notch battery solutions designed to meet your diverse needs. Whether you're powering essential household devices, high-performance electronics, or seeking sustainable energy solutions, we've got you covered."
}

statOne.onclick = function(){
    oneActive()
}
statTwo.onclick = function(){
    twoActive()
}
statThree.onclick = function(){
    threeActive()
}

previousIcon.onclick = function(){
    if(statOne.classList.contains("active")){
        threeActive()
    }else if(statTwo.classList.contains("active")){
        oneActive()
    }else if(statThree.classList.contains("active")){
        twoActive()
    }
}

nextIcon.onclick = function(){
    if(statOne.classList.contains("active")){
        twoActive()
    }else if(statTwo.classList.contains("active")){
        threeActive()
    }else if(statThree.classList.contains("active")){
        oneActive()
    }
}


