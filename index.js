import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
document.querySelector("h1").addEventListener("click", function(e) {
    alert("Bana tıkladın!");
});

document.querySelector(".btn").addEventListener("click", function(e) {
    console.log("Seni de alacağız. Çok yakında!");
});

document.querySelectorAll("img").forEach((element) => {
    element.addEventListener("mouseover", function(e) {
        e.target.style.filter = "grayscale(1)";
    });

document.querySelectorAll("img").forEach((element) => {
    element.addEventListener("mouseout", function(e) {
        e.target.style.filter = null;
    });
});

    
});

addEventListener("dblclick", (event) => {
    event.target.style.transform = "scale(0.5)"
});

addEventListener("click", (event) => {
    event.target.style.transform = null  //geri almak için null//
});

/*window.addEventListener("load", (event) => {
    setTimeout(() => {
    console.log("settimeout");
    document.querySelector("body").style.backgroundColor = "gray";
    }, 2000);
    console.log("Kod çalışıyor.");
});*/


const theInput = document.createElement("input");
theInput.setAttribute("type", "text");

theInput.addEventListener("focus", (event) => {
    event.target.value = "text";
    event.target.style.border = "5px solid blue";
});

/*function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(0.125, scale), 4);
    el.style.transform = `scale(${scale})`;
}*/

document.querySelector("input").addEventListener("keyup", (event) => {
    if (event.key == 3) {
        document.querySelector("body").style.backgroundColor = "pink";
    }
    console.log(event.key);
    event.target.value = event.target.value.toUpperCase();

});

addEventListener("click")



