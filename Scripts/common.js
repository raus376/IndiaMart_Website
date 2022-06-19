// Improt
import {sideBar} from "../components/sidebar.js"
// import {productData,exploreData} from "../components/data.js"
let dat=[

    {
    id : 1 ,
    category : "makeup" ,
    image : "https://3.imimg.com/data3/BX/CS/MY-3792183/foundation-500x500.jpg",
    title : "Foundation" ,
    content : [ "Easy spreading, water proof, Non oily formula.", "Enriched with Vitamin-E and Aloe vera.", "Improves natural skin texure.", "Controls Sebum to give your facial skin a flawless matt finish all day long." ] ,
  },
  {
      id : 2 ,
      category : "makeup" ,
      image : "https://3.imimg.com/data3/YL/EJ/MY-3792183/01-500x500.jpg" ,
      title : "Compact" ,
      content : [ "Oil control, water proof formula", "Matte velvet finish all day long.", "Applies and blends easily on skin.", "A fine powder enriched with oil absorbers,", "UV-filters and moisturizer." ] ,
  },
  {
      id : 3 ,
      category : "makeup" ,
      image : "https://3.imimg.com/data3/VL/AM/MY-3792183/pan-cake-500x500.jpg" ,
      title : "Pan Cake Foundation" ,
      content : [ "A light scattering cake make up specialy made for face and body.", "Proffesional make up foundation in stick form.", "Used as a base to adhere other make up products." , "With UV-absorbers." ] ,
  },
  {
      id : 4 ,
      category : "makeup" ,
      image : "https://3.imimg.com/data3/LX/OI/MY-3792183/pan-stick-500x500.jpg" ,
      title : "Pan Stick Foundation" ,
      content : [ "Proffesional make up foundation in stick form.", "Used as a base to adhere other make up products.", "With UV-absorbers."  ] ,
  },
  {
      id : 5 ,
      category : "lipstick" ,
      image : "https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg" ,
      title : "Baked Brick Lipstick" ,
      content : [  ] ,
  },
  {
      id : 6 ,
      category : "lipstick" ,
      image : "https://4.imimg.com/data4/RR/NW/GLADMIN-3792183/1-250x250.jpg" ,
      title : "Cerise Pink Lipstick" ,
      content : [  ] ,
  },
  {
      id : 7 ,
      category : "lipstick" ,
      image : "https://4.imimg.com/data4/QI/AY/GLADMIN-3792183/2-250x250.jpg" ,
      title : "Coral Red Lipstick" ,
      content : [  ] ,
  },
  {
      id : 8 ,
      category : "lipstick" ,
      image : "https://4.imimg.com/data4/ED/UH/GLADMIN-3792183/1-250x250.jpg" ,
      title : "Desert Rose Lipstick" ,
      content : [  ] ,
  },
  {
      id : 9 ,
      category : "lipstick" ,
      image : "https://4.imimg.com/data4/AI/JQ/GLADMIN-3792183/2-250x250.jpg" ,
      title : "Eternal Red Lipstick" ,
      content : [  ] ,
  },
  {
      id : 10 ,
      category : "lipstick" ,
      image :  "https://4.imimg.com/data4/QF/YN/GLADMIN-3792183/3-250x250.jpg" ,
      title : "Muddy Pink Lipstick" ,
      content : [  ] ,
  },
  {
      id : 11 ,
      category : "lipstick" ,
      image : "https://4.imimg.com/data4/KD/IX/GLADMIN-3792183/4-250x250.jpg" ,
      title : "Pretty Purple Lipstick" ,
      content : [  ] ,
  },
  {
      id : 12  ,
      category : "lipstick" ,
      image : "https://4.imimg.com/data4/VH/FC/GLADMIN-3792183/1-250x250.jpg" ,
      title : "Radient Red Lipstick" ,
      content : [  ] ,
  },
  {
      id : 13  ,
      category : "lipstick" ,
      image : "https://4.imimg.com/data4/PH/WB/GLADMIN-3792183/2-250x250.jpg" ,
      title : "Red Cherry Lipstick" ,
      content : [  ] ,
  },
  {
      id : 14  ,
      category : "lipstick" ,
      image : "https://4.imimg.com/data4/SB/UD/GLADMIN-3792183/3-250x250.jpg" ,
      title : "Rose Blossom Lipstick" ,
      content : [  ] ,
  },
  {
      id : 15 ,
      category : "lipsProducts" ,
      image : "https://3.imimg.com/data3/RK/XF/MY-3792183/01-500x500.jpg" ,
      title : "Lip Gloss" ,
      content : [ "Gives your lips a aqua shiny look.", "Gives a plumping look of lips.", "Protect your lips from cracking, cold bites." ] ,
  },
  {
      id : 16 ,
      category : "lipsProducts" ,
      image : "https://3.imimg.com/data3/DG/QO/MY-3792183/lipstick-500x500.jpg" ,
      title : "Lip Stick" ,
      content : [ "Non bleeding, non feathering formula", "Gives rich n creamy feel.", "Provides intense colour.", "Smooth gliding technology", "Increases elasticity and softness of lips" , "Stays for hours on lips." , "Gives full coverage." ] ,
  },
  {
      id : 17  ,
      category : "lipsProducts" ,
      image : "https://3.imimg.com/data3/KE/XS/MY-3792183/lip-liner-500x500.jpg" ,
      title : "Lip Liner" ,
      content : [ "Enriched with vitamins" ,
                  "Colour dense formula",
                  "Stays for hurs",
                  "Aid precision lining at one writing.",
                  "Easy to carry." ,
                  "Self sharpening and recractable",
                  "With sharpener for extra sharpening." ,  
                  "Available" ] ,
  },
  {
      id : 18  ,
      category : "bleachCream" ,
      image : "https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-500x500.jpg" ,
      title : "Fruit Bleach" ,
      content : [ "Bleaching is the simplest and safest way for a women to not only lighten their excess dark hair but to also beautify skin to give a fairlook." ] ,
  },
  {
      id : 19  ,
      category : "bleachCream" ,
      image : "https://3.imimg.com/data3/GE/KN/MY-3792183/gold-bleach-500x500.jpg" ,
      title : "Gold Bleach" ,
      content : [ "Bleaching is the simplest and safest way for a women to not only lighten their excess dark hair but to also beautify skin to give a fair look." ] ,
  },
  {
      id : 20 ,
      topic : "Bleach Cream" ,
      decs : "abc " ,
      category : "bleachCream" ,
      image : "https://3.imimg.com/data3/PO/CT/MY-3792183/personal-bleach-500x500.jpg" ,
      title : "Personal Bleach" ,
      content : [ "Bleaching is the simplest and safest way for a women to not only lighten their excess dark hair but to also beautify skin to give a fair look." ] ,
  }, 
   {
      id:21,
      category:"scrubs",
      image:"https://3.imimg.com/data3/QC/FL/MY-3792183/fairness-scrub-500x500.jpg",
      title:"Fairness Scrub",
      content:["Skin undergoes a natural renewal process where upper skin cells become dead and accumulated with other impurities, hiding skin's freshest layer. Blue heaven's unique deep root exfoliating formula blended with mild surfactants. Fairness vitamins and aloe vera to serve."]
   },
   {
      id:22,
      category:"scrubs",
      image:"https://3.imimg.com/data3/UL/IY/MY-3792183/mix-fruit-scrub-500x500.jpg",
      title:"Mix Fruit Scrub",
      content:["Blue heaven's unique deep root exfoliating formula serves you removel of dead skin cell, dirt and blackheads from your delicate facial skin.","It's cleasing particles unclog pores and mild surfactants gently cleanse the pores deep inside."]
   },
   {
      id:23,
      category:"scrubs",
      image:"https://3.imimg.com/data3/GR/XE/MY-3792183/facial-scrub-walnut-apricot-500x500.jpg",
      title:"Facial Scrub - Walnut & Apricot",
      content:["Blue heaven 's unique deep root exfoliating formula serves you, removed of dead skin cells, dirt & blackheads from your delicate facial skin. It's walnut shell particles unclog pores and mild surfactants gently cleans the pores from deep inside leaving a soft."]
   },
   {
      id:24,
      category:"eyesProducts",
      image:"https://3.imimg.com/data3/ML/RO/MY-3792183/mascara-500x500.jpg",
      title:"Mascara",
      content:["Lash Defining, Waterproof, Conditioning, Creamy, Water proof, flake proof, Clamp proof formula.","Gives your eye lashes body and fullness.","With the tapered spiral brush the lashes can be easily separated."]
   },
   {
      id:25,
      category:"eyesProducts",
      image:"https://3.imimg.com/data3/FX/IN/MY-3792183/eye-shadow-500x500.jpg",
      title:"Eye Shadow",
      content:["A fine powder with glitter in compressed form.","Enriched with oil absorbers.","UV-filters and moisturizer.","Gives a radiant glow on eyes.","Water proof and Stays on for hours."]
   },
   {
      id:26,
      category:"eyesProducts",
      image:"https://rukminim1.flixcart.com/image/612/612/kpcy5jk0/eye-liner/q/8/z/magneteyes-eyeliner-facescanada-original-imag3hmpduvchzgn.jpeg?q=70",
      title:"Eye Liner",
      content:["Creamy, Water proof, flake proof, Clamp proof formula.","Gives your eye lashes body and fullness.","With the tapered spiral brush the lashes can be easily separated.","Usage: Along the edge of the eyelids draw a line with the help of the flexible app."]
   },
   {
      id:27,
      category:"lipcare",
      image:"https://3.imimg.com/data3/US/UJ/MY-3792183/lip-balm-500x500.jpg",
      title:"Lip Balm",
      content:["Protect your lips from chapping and cold bites.","Keeps your lips soft.","With exotic flavors (Strawberry, Orange, Pineapple, Mix fruit, Mint & Chocolate)."]
   },
   {
      id:28,
      category:"lipcare",
      image:"https://3.imimg.com/data3/EJ/OU/MY-3792183/lip-gaurd-500x500.jpg",
      title:"Lip Gaurd",
      content:["White petrolleum jelly based soothing Dressing for burns, Minot cuts, Sun Burns and Chafing.","Very helpful for dry and chapped lips.","Preventls your lips from cold bites."]
   },
    {
      id:29,
      category:"transitionalItems",
      image:"https://3.imimg.com/data3/WJ/EO/MY-3792183/01-500x500.jpg",
      title:"Sindoor",
      content:["Stick Sindoor","Non dropy","Resistant to perspiration","No skin irritation.","Easy to apply and easy to carry."],
   },
   {
      id:30,
      category:"transitionalItems",
      image:"https://3.imimg.com/data3/RI/RI/MY-3792183/01-500x500.jpg",
      title:"Kajal",
      content:["Specially formulated KAJAL with the combination of some exotic herbal extracts to offer.","matte-finish.","Non Smudging","Resistant to perspiration.","Safe to use & no irritation","Easy to apply."]
   },
   {
      id:31,
      category:"creams",
      image:"https://3.imimg.com/data3/QK/RV/MY-3792183/cold-cream-500x500.jpg",
      title:"Cold Cream",
      content:["An easy spread easy absorbed Moisturising Cold Cream enriched with Almond Oil, Aloe vera, Coco butter and Vit-E, which nourishes your skin, making it soft, smooth and brings out hidden radiance. It improves the natural structure of your skin giving complete protective."]
   },
   {
      id:32,
      category:"creams",
      image:"https://3.imimg.com/data3/BH/LB/MY-3792183/massage-cream-500x500.jpg",
      title:"Massage Cream",
      content:["A unique Fruit Massage Cream enriched with skin vitamins, which nourishes your skin, making it soft, smooth brings out hidden radiance.","It's emollient rich formula helps easy penetration of the actives into ypur skin. Ideal for facial  /Body Massage."]
   },
   {
      id:33,
      category:"nailsProducts",
      image:"https://3.imimg.com/data3/BK/MD/MY-3792183/01-500x500.jpg",
      title:"Nail Enamel",
      content:["Non bleeding, non feathering formula","Provides intense colour.","With imported bristles for Smooth application.","Stays for days, no chip off.","Gives full coverage at just one application.","Unlimited glossy as well as matty."]
   },
   {
      id:34,
      category:"roseWater",
      image:"https://3.imimg.com/data3/UP/UB/MY-3792183/rose-water-mask-250x250.jpg",
      title:"Rose Water-Mask",
      content:["Blue Heaven's premium rose water enriched with extracts of fresh rose petals, which tones, refreshes and improves your skin texture.","Usage: It can be used alone or mixed with Blue Heaven."]
   }, 
   
]
let exploreDat = [
    {
        image: "https://4.imimg.com/data4/QY/OX/GLADMIN-3792183/1-250x250.jpg" ,
        title : "Lipstick" ,
        available : "10 products available", 
    },
    {
        image: "https://3.imimg.com/data3/RK/XF/MY-3792183/01-250x250.jpg" ,
        title : "Lips Products" ,
        available : "3 products available", 
    },
    {
        image: "https://3.imimg.com/data3/NL/QG/MY-3792183/fruit-bleach-250x250.jpg" ,
        title : "Bleach Cream" ,
        available : "3 products available", 
    },
    {
        image: "https://3.imimg.com/data3/QC/FL/MY-3792183/fairness-scrub-250x250.jpg" ,
        title : "Scrubs" ,
        available : "3 products available", 
    },
    {
        image: "https://3.imimg.com/data3/ML/RO/MY-3792183/mascara-250x250.jpg" ,
        title : "Eyes Products" ,
        available : "3 products available", 
    }
    
]

localStorage.setItem("data",JSON.stringify(dat))
localStorage.setItem("exploreData",JSON.stringify(exploreDat))


// DOM variables
let data = JSON.parse(localStorage.getItem("data")) 
let exploreData = JSON.parse(localStorage.getItem("exploreData"))  

// let rdetails = JSON.parse(localStorage.getItem("users"))

console.log(data)
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
        card.append(image,title,askPrice)
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

        // setTimeout(function(){

        //     if(rid)
        //     {
        //         clearTimeout(rid)
        //     }
    
        //     window.location.href="index.html"
    
        // },7000)

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
name:"Mascara Waterproof",
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

























