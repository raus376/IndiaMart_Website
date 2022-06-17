
// Improt
// import {appendMini,appendProducts} from "../scriptsToExport/append.js"
import {sideBar} from "../components/sidebar.js"


let data = JSON.parse(localStorage.getItem("data")) 
let exploreData = JSON.parse(localStorage.getItem("exploreData"))                     
let minCard = document.getElementById("vkMinCard")
let productsDiv = document.getElementById("vkProductDiv")
let exploreDiv = document.getElementById("exploreDiv")
let sideBarDiv = document.getElementById("vkSidebar")
sideBarDiv.innerHTML = sideBar()

function getData(cate){
    let lipstickArr = data.filter((el)=>{
        return el.category == cate
    })
    return lipstickArr
}
let lipstickArr = getData("lipstick")
console.log(lipstickArr)

function appendMini(arr){
    minCard.innerHTML = null 
    // arr.forEach((el)=>{
        for(let i = 0; i < 7; i++)
        {
            let el = lipstickArr[i] 
            let card = document.createElement("div")
            // let infoDiv = document.createElement("div")
            let image = document.createElement("img") 
            let title = document.createElement("p")
            let askPrice = document.createElement("p")
            image.src = el.image 
            title.innerText = el.title
            title.addEventListener("click",()=>{
                showPayment(el)
            }) 
            image.addEventListener("click",()=>{
                showPayment(el)
            })
            askPrice.addEventListener("click",()=>{
                showPayment(el)
            })
            askPrice.innerText = "Ask Price"
            // infoDiv.append(title,askPrice)
            card.append(image,title,askPrice)
            minCard.append(card)
    }
}
appendMini(lipstickArr)

function showPayment(el){
    console.log(el)
}

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
        
        let title = document.createElement("h2")
        let latestPrice = document.createElement("p")
        let intrestedBtn = document.createElement("button")
        image.src = el.image
        
        title.innerText = el.title
        latestPrice.innerText = "Get Latest Price"
        intrestedBtn.innerText = "Yes, I am interested!"

        image.addEventListener("click",()=>{
            showPayment(el)
        })
        title.addEventListener("click",()=>{
            showPayment(el)
        })
        intrestedBtn.addEventListener("click",()=>{
            showPayment(el)
        })
        latestPrice.addEventListener("click",()=>{
            showPayment(el)
        })

        

        imgDiv.append(image)
        detailsDiv.append(latestPrice,intrestedBtn)
        card.append(title,imgDiv,latestPrice,intrestedBtn)
        productsDiv.append(card)


    })
}
appendProducts(lipstickArr)

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