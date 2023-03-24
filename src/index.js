import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });


// Kodlar buraya gelecek!
document.querySelectorAll("nav a").forEach((item) =>{
    item.addEventListener("mouseover",(item) =>{
        item.target.style.backgroundColor = "#5594f2";
    });
});

//mouseout
document.querySelectorAll("nav a").forEach((item) =>{
    item.addEventListener("mouseout",(item) =>{
        item.target.style.color = "#f7607c";
    });
});

//click
const imgOtobus = document.querySelectorAll("img");
imgOtobus.forEach((item) =>{
    item.addEventListener("click",(item) =>{
        item.target.setAttribute("style","filter:grayscale(100%)");
    });
});

//dblclick
document.querySelectorAll("img");
imgOtobus.forEach((item) =>{
    item.addEventListener("dblclick",(item) =>{
        item.target.setAttribute("style","filter:grayscale(0%)");
    });
});

//resize
window.addEventListener("resize",fresize);
let x=0;
function fresize(item){
    let txt = (x +=1);
    console.log(item);
    if(item.window.innerWidth <500){
        document.querySelector("body").style.backgroundColor ="red";
    }
    else{
        document.querySelector("body").style.backgroundColor = "blue";
    }
}

//load
const acilis = document.getElementById("login");
window.addEventListener("load", (event) => {
  setTimeout(() => {
    acilis.style.display = "none";
  }, 2000);
});

//wheel
const imgWheel = document.querySelectorAll("footer");
imgWheel.forEach((footer) => {
  footer.addEventListener("wheel", (event) => {
    footer.style.fontSize = "45";
  });
});