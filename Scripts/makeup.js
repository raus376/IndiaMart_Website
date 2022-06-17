// Improt
import {sideBar} from "../components/sidebar.js"


// DOM variables
let data = JSON.parse(localStorage.getItem("data")) 
let exploreData = JSON.parse(localStorage.getItem("exploreData"))  
let minCard = document.getElementById("vkMinCard")
let productsDiv = document.getElementById("vkProductDiv")
let exploreDiv = document.getElementById("exploreDiv")
let sideBarDiv = document.getElementById("vkSidebar")
sideBarDiv.innerHTML = sideBar()
let category = document.getElementById("category").innerText 
console.log(category)
if(category=="Bleach Cream")
{
    var productDataArr = getData("bleachCream")
}
else if(category=="Makeup")
{
    var productDataArr = getData("makeup")
}
else if(category=="Lips Products")
{
    var productDataArr = getData("lipsProducts")
}
else if(category=="Scrubs")
{
    var productDataArr = getData("scrubs")
}
else if(category=="Eyes Products")
{
    var productDataArr = getData("eyesProducts")
}
else if(category=="LipCare")
{
    var productDataArr = getData("lipcare")
}





// DOM functions 

function showPayment(el){
    console.log(el)
}


function getData(cate){
    let arr = data.filter((el)=>{
        return el.category == cate
    })
    return arr
}
// let productDataArr = getData("lipsProducts")
// console.log(productDataArr)

function appendMini(arr){
    minCard.innerHTML = null 
    arr.forEach((el)=>{
        let card = document.createElement("div")
        // let infoDiv = document.createElement("div")
        let imgDiv = document.createElement("div")
        let image = document.createElement("img") 
        let title = document.createElement("p")
        let askPrice = document.createElement("p")
        image.src = el.image 
        title.innerText = el.title 
        askPrice.addEventListener("click",()=>{
            showPayment(el)
        })
        askPrice.innerText = "Ask Price"
        title.addEventListener("click",()=>{
            showPayment(el)
        })
        image.addEventListener("click",()=>{
            showPayment(el)
        })
        // infoDiv.append(title,askPrice)
        imgDiv.append(image)
        card.append(imgDiv,title,askPrice)
        minCard.append(card)
    })
}
appendMini(productDataArr)

let appendProducts = (data)=>{
    productsDiv.innerText = null 
    data.forEach((el)=>{
        let card = document.createElement("div")
        card.setAttribute("class","productCard")
        let imgDiv = document.createElement("div")
        imgDiv.setAttribute("class","imgDiv")
        let detailsDiv = document.createElement("div")
        detailsDiv.setAttribute("class","detailsDiv")
        let image = document.createElement("img")
        let intrested = document.createElement("p")
        let getQuote = document.createElement("p")
        let title = document.createElement("h2")
        let latestPrice = document.createElement("p")
        let list = document.createElement("ul")
        let intrestedBtn = document.createElement("button")
        let decsArr = el.content 

        image.src = el.image
        intrested.innerText = "Interested in this product?"
        getQuote.innerText = "Get Best Quote"
        title.innerText = el.title
        latestPrice.innerText = "Get Latest Price"
        intrestedBtn.innerText = "Yes, I am interested!"
        for(let listInfo of decsArr){
            let listingItems = document.createElement("li")
            listingItems.innerText = listInfo 
            list.append(listingItems)
        }
        image.addEventListener("click",()=>{
            showPayment(el)
        })
        getQuote.addEventListener("click",()=>{
            showPayment(el)
        })
        latestPrice.addEventListener("click",()=>{
            showPayment(el)
        })
        intrestedBtn.addEventListener("click",()=>{
            showPayment(el)
        })

        imgDiv.append(image,intrested,getQuote)
        detailsDiv.append(title,latestPrice,list,intrestedBtn)
        card.append(imgDiv,detailsDiv)
        productsDiv.append(card)


    })
}

appendProducts(productDataArr)


function appendExplore(data){
    exploreDiv.innerHTML = null 
    data.forEach((el)=>{
        let card = document.createElement("div")
        card.setAttribute("class","exploreCard")
        let imgDiv = document.createElement("div")
        let detailsDiv = document.createElement("div")
        let image = document.createElement("img")
        let title = document.createElement("h3")
        let available = document.createElement("p")
        image.src = el.image 
        title.innerText = el.title 
        available.innerText = el.available 
        imgDiv.append(image)
        detailsDiv.append(title,available)
        card.append(imgDiv,detailsDiv)
        exploreDiv.append(card)
        // console.log("hi")
    })
    let more = document.createElement("div")
    more.setAttribute("class","exploreCard")
    let p = document.createElement("p")
    p.innerText = "View complete range"
    more.append(p)
    exploreDiv.append(more)
    
    
}
appendExplore(exploreData)
