var btn_hotpromo = document.getElementById("hotpromo");
var btn_memberonly = document.getElementById("memberonly");
var btn_rumahtangga = document.getElementById("rumahtangga");
var konten1 = document.getElementById("third");
var konten2 = document.getElementById("four");
var konten3 = document.getElementById("five");

btn_memberonly.addEventListener('click',()=>{
    konten1.style.display='none';
    konten2.style.display='flex';
    konten3.style.display='none';
});

btn_hotpromo.addEventListener('click',()=>{
    konten1.style.display='flex';
    konten2.style.display='none';
    konten3.style.display='none';
})

btn_rumahtangga.addEventListener('click',()=>{
    konten1.style.display='none';
    konten2.style.display='none';
    konten3.style.display='flex';
})