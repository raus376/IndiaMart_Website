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
            // showPayment(el)
            document.querySelector("#rimg").innerHTML=null;
            document.querySelector("#rimg2").innerHTML=null;
            document.querySelector("#rimg3").innerHTML=null;
            document.querySelector("#rthird4").innerHTML=null;
            document.querySelector("#rcompname").value=null;
        document.querySelector("#rinpgst").value=null;
            let rrr=[];
            rrr.push(el)
            let rcheck2=JSON.parse(localStorage.getItem("users"));
            if(rcheck2===null)
            {
                alert("Login firstly")
            }
            else{
                rrrshow(rrr,rcheck2)
                document.body.classList.add("popup-active")
            }
        
        

        })
        
        getQuote.addEventListener("click",()=>{
            document.querySelector("#rimg").innerHTML=null;
            document.querySelector("#rimg2").innerHTML=null;
            document.querySelector("#rimg3").innerHTML=null;
            document.querySelector("#rthird4").innerHTML=null;
            document.querySelector("#rcompname").value=null;
        document.querySelector("#rinpgst").value=null;
            let rrr=[];
            rrr.push(el)
            let rcheck2=JSON.parse(localStorage.getItem("users"));
            if(rcheck2===null)
            {
                alert("Login firstly")
            }
            else{
                rrrshow(rrr,rcheck2)
                document.body.classList.add("popup-active")
            }
            
        })
        latestPrice.addEventListener("click",()=>{
            document.querySelector("#rimg").innerHTML=null;
            document.querySelector("#rimg2").innerHTML=null;
            document.querySelector("#rimg3").innerHTML=null;
            document.querySelector("#rthird4").innerHTML=null;
            document.querySelector("#rcompname").value=null;
        document.querySelector("#rinpgst").value=null;
            let rrr=[];
            rrr.push(el)
            let rcheck2=JSON.parse(localStorage.getItem("users"));
            if(rcheck2===null)
            {
                alert("Login firstly")
            }
            else{
                rrrshow(rrr,rcheck2)
                document.body.classList.add("popup-active")
            }
          
        })
        intrestedBtn.addEventListener("click",()=>{
            document.querySelector("#rimg").innerHTML=null;
            document.querySelector("#rimg2").innerHTML=null;
            document.querySelector("#rimg3").innerHTML=null;
            document.querySelector("#rthird4").innerHTML=null;
            document.querySelector("#rcompname").value=null;
        document.querySelector("#rinpgst").value=null;
            // showPayment(el)
            let rrr=[];
            rrr.push(el)
            let rcheck2=JSON.parse(localStorage.getItem("users"));
            if(rcheck2===null)
            {
                alert("Login firstly")
            }
            else{
                rrrshow(rrr,rcheck2)
                document.body.classList.add("popup-active")
            }
           
        })


        imgDiv.append(image,intrested,getQuote)
        detailsDiv.append(title,latestPrice,list,intrestedBtn)
        card.append(imgDiv,detailsDiv)
        productsDiv.append(card)


    })

    function rrrshow(rrr,rdetails){
       
        // popup window

       //  var robj={
//       id:21,
//       category:"scrubs",
//       image:"https://3.imimg.com/data3/QC/FL/MY-3792183/fairness-scrub-500x500.jpg",
//       title:"Fairness Scrub",
//       content:["Skin undergoes a natural renewal process where upper skin cells become dead and accumulated with other impurities, hiding skin's freshest layer. Blue heaven's unique deep root exfoliating formula blended with mild surfactants. Fairness vitamins and aloe vera to serve."]
//    }

// var rdetails=JSON.parse(localStorage.getItem("users"));
rdetails=rdetails[0];
// var robj=JSON.parse(localStorage.getItem("rdata"));
// console.log(robj)
// console.log(el)
var robj=rrr[0];
console.log(robj)
console.log(rdetails)


// var rdetails={
//     name:"Raushan",
//     number:7070107767,
//     email:"raushan376kumar@gamil.com"
// }

var rid;


function rshow(obj,details){

    let img=document.createElement("img");
    img.setAttribute("id","rrimg")
    img.src=obj.image;
    document.querySelector("#rimg").append(img)

   document.querySelector("#rtitle").innerText=obj.title;

   document.querySelector("#rname").innerText=details.fname;
   
   document.querySelector("#rnumber").innerHTML=details.number;
   document.querySelector("#rgmail").innerHTML=details.email;

//    second page

let img2=document.createElement("img");
img2.src=obj.image;
document.querySelector("#rimg2").append(img2)

document.querySelector("#rtitle2").innerText=obj.title;

document.querySelector("#rname2").innerText=details.fname;

document.querySelector("#rnumber2").innerHTML=details.number;
document.querySelector("#rgmail2").innerHTML=details.email;
   
// Third page

let img3=document.createElement("img");
img3.src=obj.image;
document.querySelector("#rimg3").append(img3)

document.querySelector("#rtitle3").innerText=obj.title;

document.querySelector("#rname3").innerText=details.fname;

document.querySelector("#rnumber3").innerHTML=details.number;
document.querySelector("#rgmail3").innerHTML=details.email;

}
rshow(robj,rdetails)

function rstart(){
   
    let dis=document.querySelector("#click");
    let close=document.querySelector(".cancel")

    dis.addEventListener("click",function(){
        document.body.classList.add("popup-active")
       
    })

    close.addEventListener("click",function(){
        document.body.classList.remove("popup-active")
        document.querySelector("#rrimg").innerHTML=null;
        document.querySelector("#rinpinp").value=null;
        // document.querySelector("#rcheckbox1").value=null;
        // document.querySelector("#rcheckbox2").value=null;
        // document.querySelector("#rcheckbox3").value=null;
    })

    let dis2=document.querySelector("#rnext");
    dis2.addEventListener("click",function(){
        document.body.classList.remove("popup-active");
        document.body.classList.add("popup-active2")
        document.querySelector("#rinpinp").value=null;
        // document.querySelector("#rcheckbox1").value=null
        // ;
        // document.querySelector("#rcheckbox2").value=null;
        // document.querySelector("#rcheckbox3").value=null;
    })

    let close2=document.querySelector(".cancel2");
    close2.addEventListener("click",function(){
        document.body.classList.remove("popup-active2")
    })

    let back2=document.querySelector("#rback2");
    back2.addEventListener("click",function(){
        document.body.classList.remove("popup-active2");
        document.body.classList.add("popup-active")
    })

    let dis3=document.querySelector("#rnext2");
    dis3.addEventListener("click",function(){
        document.body.classList.remove("popup-active2");
        document.body.classList.add("popup-active3")

    })

    let dis4=document.querySelector("#rbutton3");
    dis4.addEventListener("click",function(){

      let rcheck=  document.querySelector("#rcompname").value;
     
      if(rcheck.length<=4)
      {
        alert("Enter Correct Details")

      }
      else{
        document.body.classList.remove("popup-active3");
        document.body.classList.add("popup-active4");
        document.querySelector("#rcompname").value=null;
        document.querySelector("#rinpgst").value=null;

        setTimeout(function(){

            if(rid)
            {
                clearTimeout(rid)
            }
    
            window.location.href="index.html"
    
        },10000)

      }
     
     

        
    })

    let close3=document.querySelector(".cancel3");
    close3.addEventListener("click",function(){
        document.body.classList.remove("popup-active3")
        document.querySelector("#rcompname").value=null;
        document.querySelector("#rinpgst").value=null;
    })

    let close4=document.querySelector(".cancel4");
    close4.addEventListener("click",function(){
        document.body.classList.remove("popup-active4")
  
    })

    
    
}
rstart()

var data_ind=[{img:"https://3.imimg.com/data3/US/UJ/MY-3792183/lip-balm-250x250.jpg",
name:"Lip Balm",
price:1295,
supplier:"3G Channel"},
{img:"http://5.imimg.com/data5/ECOM/Default/2022/3/NA/CV/JR/149518787/untitled-1-500x-ab266190-ab21-4355-8a22-b57b67dff0e3-250x250.jpg",
name:"Beauty People",
price:275,
supplier:"3G Channel"},
{img:"http://5.imimg.com/data5/ECOM/Default/2022/6/HP/TP/AC/147540438/product-image-1348594280-250x250.jpg",
name:"Mascara",
price:499,
supplier:"Adhya Collection"},
{img:"http://5.imimg.com/data5/ECOM/Default/2022/5/DP/QN/AD/11390531/natureupblackmascara-eyeliner-250x250.jpg",
name:"AM Enterprise",
price:1295,
supplier:"Garima Collection"}];

let append=(data)=>{
data.forEach((ele)=>{

    let box=document.createElement("div");

    let img=document.createElement("img");
    img.src=ele.img;

    let h4=document.createElement("h4");
    h4.innerText=ele.name;

    let price=document.createElement("h3");
    price.innerText="₹"+ele.price;

    let p=document.createElement("p");
    p.innerText=ele.supplier;

    let box2=document.createElement("div");
    let btn=document.createElement("button");
    btn.setAttribute("id","rbtn4");
    btn.innerText="Buy Now";
    box2.append(btn)

    box.append(img,h4,price,p,box2);

    document.querySelector("#rthird4").append(box)
})
}

append(data_ind)


document.querySelector("#rwhat").addEventListener("mouseenter",function(){
    document.querySelector("#rdetails3").style.display="block";
})

document.querySelector("#rwhat").addEventListener("mouseleave",function(){
    document.querySelector("#rdetails3").style.display="none";
})





        }
        
      
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
