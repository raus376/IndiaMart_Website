// DOM variables
let productInfo = {
    
        id : 1 ,
        category : "makeup" ,
        image : "https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-500x500.jpg",
        title : "Foundation" ,
        content : [ "Easy spreading, water proof, Non oily formula.", "Enriched with Vitamin-E and Aloe vera.", "Improves natural skin texure.", "Controls Sebum to give your facial skin a flawless matt finish all day long." ] ,
}
let imgDiv = document.getElementById("imgDiv")
let details = document.getElementById("details")



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
    completeDetails.innerText = "View Complete Details"
    imgDiv.append(image)
    latestPrice.innerText = "Get Latest Price" 
    details.append(title,latestPrice,list,completeDetails)

}

append(productInfo)