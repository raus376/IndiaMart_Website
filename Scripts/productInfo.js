// DOM variables
let productInfo = {
    
        id : 1 ,
        category : "makeup" ,
        image : "https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-500x500.jpg",
        title : "Foundation" ,
        content : [ "Easy spreading, water proof, Non oily formula.", "Enriched with Vitamin-E and Aloe vera.", "Improves natural skin texure.", "Controls Sebum to give your facial skin a flawless matt finish all day long." ] ,
}
let popularData = [
    {
        image: "https://5.imimg.com/data5/SU/YI/MY-13802071/dd-foundation-cream-250x250.jpg" ,
        title : "DD Foundation Cream",
        price : "₹ 299/ Pack" ,
        companyName : "Pharmakon Health & Beauty Care Private Limited" ,
        address : "Bawana, Delhi" ,
        number : "08048967800"
    },
    {
        image: "https://5.imimg.com/data5/SELLER/Default/2021/2/QG/DH/WX/90340164/sunisa-foundation-250x250.jpeg" ,
        title : "Sunisa Face Foundation",
        price : "₹ 285/ Piece" ,
        companyName : "Blushing Beauty" ,
        address : "brijpuri, Delhi" ,
        number : "08048987521"
    },
    {
        image: "https://5.imimg.com/data5/SELLER/Default/2022/5/ED/SX/SQ/55209265/imagic-makeup-full-coverage-foundation-250x250.jpg" ,
        title : "Imagic Makeup Full Coverage Foundation",
        price : "₹ 699/ Piece" ,
        companyName : "Digisagar Marketing Private Limited" ,
        address : "Rohini, North West Delhi, Delhi" ,
        number : "Call 08047619125"
    },
    {
        image: "https://5.imimg.com/data5/SELLER/Default/2022/3/WW/CP/VD/80012063/swiss-beauty-primer-mousse-foundation-250x250.jpg" ,
        title : "Swiss Beauty Primer Mousse Foundation",
        price : "₹ 210/ Tube" ,
        companyName : "Gurunanak Traders" ,
        address : "New Delhi" ,
        number : "Call 08048273367"
    },
    {
        image: "https://5.imimg.com/data5/ANDROID/Default/2021/10/BZ/CK/OW/130402162/product-jpeg-250x250.jpg" ,
        title : "Sunisa Foundation",
        price : "₹ 190/ Piece", 
        companyName : "S R Hair Accessories" ,
        address : "Barakhana, North East, New Delhi" ,
        number : "Call 08046062321"
    },

]
let imgDiv = document.getElementById("imgDiv")
let details = document.getElementById("details")
let popularDiv = document.getElementById("popularDiv")
document.getElementById("btn").addEventListener("click",()=>{
    console.log(productInfo)
})


// DOM functions

function append(data){
    
    let image = document.createElement("img")
    let title = document.createElement("h2")
    let latestPrice = document.createElement("p")
    let list = document.createElement("ul")
    let completeDetails = document.createElement("p")
    
    image.src = data.image 
    title.innerText = data.title 
    data.content.forEach((el)=>{
        let li = document.createElement("li")
        li.innerText = el
        list.append(li)
    })
    latestPrice.addEventListener("click",()=>{
        console.log(data)
    })
    
    completeDetails.innerText = "View Complete Details"
    imgDiv.append(image)
    latestPrice.innerText = "Get Latest Price" 
    details.append(title,latestPrice,list,completeDetails)

}

append(productInfo)

function appendSimilar(data){
    popularDiv.innerHTML = null 

    data.forEach((el)=>{
        let card = document.createElement("div") 
        let image = document.createElement("img") 
        let title = document.createElement("h3")
        let price =  document.createElement("p")  
        let companyName = document.createElement("p")
        let address = document.createElement("p")
        let number = document.createElement("p")
        let btn = document.createElement("button")

        image.src = el.image 
        title.innerText = el.title 
        price.innerText = el.price 
        companyName.innerText = el.companyName 
        address.innerText = el.address 
        number.innerText = el.number 
        btn.innerText = "Get Latest Price" 
        btn.addEventListener("click",()=>{
            console.log(el) 
        })
        card.append(image,title,price,companyName,address,number,btn)
        popularDiv.append(card)
    })
}
appendSimilar(popularData)