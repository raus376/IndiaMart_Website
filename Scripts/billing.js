var robj={
    img:"https://5.imimg.com/data5/UA/ZN/VP/SELLER-3074232/hydro-boost-hydrating-hyaluronic-acid-serum-250x250.jpg",
    title:"Lip Balm",
   
}

var rdetails={
    name:"Raushan",
    number:7070107767,
    email:"raushan376kumar@gamil.com"
}

var rid;


function rshow(obj,details){

    let img=document.createElement("img");
    img.src=obj.img;
    document.querySelector("#rimg").append(img)

   document.querySelector("#rtitle").innerText=obj.title;

   document.querySelector("#rname").innerText=details.name;
   
   document.querySelector("#rnumber").innerHTML=details.number;
   document.querySelector("#rgmail").innerHTML=details.email;

//    second page

let img2=document.createElement("img");
img2.src=obj.img;
document.querySelector("#rimg2").append(img2)

document.querySelector("#rtitle2").innerText=obj.title;

document.querySelector("#rname2").innerText=details.name;

document.querySelector("#rnumber2").innerHTML=details.number;
document.querySelector("#rgmail2").innerHTML=details.email;
   
// Third page

let img3=document.createElement("img");
img3.src=obj.img;
document.querySelector("#rimg3").append(img3)

document.querySelector("#rtitle3").innerText=obj.title;

document.querySelector("#rname3").innerText=details.name;

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
        document.querySelector("#rinpinp").value=null;
        document.querySelector("#rcheckbox1").value=null;
        document.querySelector("#rcheckbox2").value=null;
        document.querySelector("#rcheckbox3").value=null;
    })

    let dis2=document.querySelector("#rnext");
    dis2.addEventListener("click",function(){
        document.body.classList.remove("popup-active");
        document.body.classList.add("popup-active2")
        document.querySelector("#rinpinp").value=null;
        document.querySelector("#rcheckbox1").value=null
        ;
        document.querySelector("#rcheckbox2").value=null;
        document.querySelector("#rcheckbox3").value=null;
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
      }
     
     

        setTimeout(function(){

            if(rid)
            {
                clearTimeout(rid)
            }
    
            window.location.href="index.html"
    
        },10000)

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
{img:"https://3.imimg.com/data3/US/UJ/MY-3792183/lip-balm-250x250.jpg",
name:"Lip Balm",
price:1295,
supplier:"3G Channel"},
{img:"https://3.imimg.com/data3/US/UJ/MY-3792183/lip-balm-250x250.jpg",
name:"Lip Balm",
price:1295,
supplier:"3G Channel"},
{img:"https://3.imimg.com/data3/US/UJ/MY-3792183/lip-balm-250x250.jpg",
name:"Lip Balm",
price:1295,
supplier:"3G Channel"}];

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


