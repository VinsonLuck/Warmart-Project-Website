const carousel = document.querySelector(".list-kategory");

let isDragStart = false, prevPageX, prevScrollLeft;

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX
    prevScrollLeft = carousel.scrollLeft
}

const dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff; 
}

const dragStop = () => {
    isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

const carousel2 = document.querySelector(".dua");

let isDragStart2 = false, prevPageX2, prevScrollLeft2;

const dragStart2 = (e) => {
    isDragStart2 = true;
    prevPageX2 = e.pageX
    prevScrollLeft2 = carousel2.scrollLeft
}

const dragging2 = (e) =>{
    if(!isDragStart2) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX2;
    carousel2.scrollLeft = prevScrollLeft2 - positionDiff; 
}

const dragStop2 = () => {
    isDragStart2 = false;
}

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousemove", dragging2);
carousel2.addEventListener("mouseup", dragStop2);

const carousel3 = document.querySelector(".tiga");

let isDragStart3 = false, prevPageX3, prevScrollLeft3;

const dragStart3 = (e) => {
    isDragStart3 = true;
    prevPageX3 = e.pageX
    prevScrollLeft3 = carousel3.scrollLeft
}

const dragging3 = (e) =>{
    if(!isDragStart3) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX3;
    carousel2.scrollLeft = prevScrollLeft3 - positionDiff; 
}

const dragStop3 = () => {
    isDragStart3 = false;
}

carousel2.addEventListener("mousedown", dragStart3);
carousel2.addEventListener("mousemove", dragging3);
carousel2.addEventListener("mouseup", dragStop3);

// window.addEventListener('scroll', (e)=>{
//     console.log(window.pageYOffset);
// })

var logo = document.getElementById('logo-banner');
logo.addEventListener('click', ()=>{
    window.scrollTo(0, 0.17*document.body.scrollHeight);
    console.log('logo');
})

var unilever = document.getElementById('unilever');
unilever.addEventListener('click',()=>{
    window.scrollTo(0, 0.58*document.body.scrollHeight);
    console.log('unilever');
})

var indofood = document.getElementById('indofood');
indofood.addEventListener('click',()=>{
    window.scrollTo(0, 0.35*document.body.scrollHeight);
    console.log('indo');
})