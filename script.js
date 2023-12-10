/*Iconos a presionar*/
const menuIcon = document.querySelector(".menu-icon")
const asideMenu = document.querySelector(".inactive")
const closeIcon = document.querySelector(".close-icon")
const featureIcon = document.querySelector(".feature-down")
const companyIcon = document.querySelector(".company-down")

const Features = document.querySelector(".Features")
const Company = document.querySelector(".Company")
const featuresOptions = document.querySelector(".features-inactive")
const companyOptions = document.querySelector(".company-inactive")

menuIcon.addEventListener("click", toggleAsideMenu)
closeIcon.addEventListener("click", toggleAsideMenu)

function toggleAsideMenu(){
    asideMenu.classList.toggle("inactive")
}

Features.addEventListener("click", toggleFeatures)
function toggleFeatures(){
    const interaccion = featuresOptions.classList.toggle("features-inactive")
    featureIcon.src = "./images/icon-arrow-down.svg"
    if(!interaccion){
        featureIcon.src = "./images/icon-arrow-up.svg"
    }
}

Company.addEventListener("click", toggleCompany)
function toggleCompany(){
    const interaccion = companyOptions.classList.toggle("company-inactive")
    companyIcon.src = "./images/icon-arrow-down.svg"
    if(!interaccion){
        companyIcon.src = "./images/icon-arrow-up.svg"
    }
}

/**Navbar en desktop */

const buttonFeatures = document.querySelector(".buttonFeatures")
const fdown = document.querySelector(".fdown")
const buttonCompany = document.querySelector(".buttonCompany")
const cdown = document.querySelector(".cdown")

const Foptions = document.querySelector(".FOinactive")
const Coptions = document.querySelector(".COinactive")

buttonFeatures.addEventListener("click", toggleFoptions)
function toggleFoptions(){
    const interaccion = Foptions.classList.toggle("FOinactive")
    fdown.src = "./images/icon-arrow-down.svg"
    if(!interaccion){
        fdown.src = "./images/icon-arrow-up.svg"
    }
    let isCoptionClosed = Coptions.classList.contains("COinactive")
    if(!isCoptionClosed){
        Coptions.classList.add("COinactive")
        cdown.src = "./images/icon-arrow-down.svg"
    }
}


buttonCompany.addEventListener("click", toggleCoptions)
function toggleCoptions(){
    const interaccion = Coptions.classList.toggle("COinactive")
    cdown.src = "./images/icon-arrow-down.svg"
    if(!interaccion){
        cdown.src = "./images/icon-arrow-up.svg"
    }
    let isFeaturedClosed = Foptions.classList.contains("FOinactive")
    if(!isFeaturedClosed){
        Foptions.classList.add("FOinactive")
        fdown.src = "./images/icon-arrow-down.svg"
    }
}