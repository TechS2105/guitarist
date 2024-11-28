let barIcon = document.querySelector("#open");
let responsive = document.querySelector(".responsive");
let closeIcon = document.querySelector("#close");

function barIconStyle() {
    
    barIcon.style.borderTop = "1px dotted #f3c242";
    barIcon.style.borderLeft = "1px dotted #f3c242";
    barIcon.style.borderRight = "2px dotted #f3c242";
    barIcon.style.borderBottom = "2px dotted #f3c242";

}

function closeIconStyle() {
    
    closeIcon.style.borderTop = "1px dotted #f3c242";
    closeIcon.style.borderLeft = "1px dotted #f3c242";
    closeIcon.style.borderRight = "2px dotted #f3c242";
    closeIcon.style.borderBottom = "2px dotted #f3c242";

}

const clickBar= () => {

    responsive.style.display = "flex";
    barIcon.style.display = "none";
    closeIcon.style.display = "block";

}

const closeBar = () => {

    responsive.style.display = "none";
    barIcon.style.display = "block";
    closeIcon.style.display = "none";
  
}

barIcon.addEventListener('click', (event) => {

    if (event.target) {
        
        barIcon.style.display = "none";

    }

});

document.querySelector("i").addEventListener('click', function () {

    closeIconStyle();
    barIconStyle();

});



