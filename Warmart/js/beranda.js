var btn_promospesial2 = document.getElementById("buttonspesial2");
var btn_promospesial3 = document.getElementById("buttonspesial3");
var btn_promotopup1 = document.getElementById("buttontopup1");
var btn_promotopup3 = document.getElementById("buttontopup3");
var btn_promochef1 = document.getElementById("buttonchef1");
var btn_promochef2 = document.getElementById("buttonchef2");
var konten1 = document.getElementById("promocontainer1display");
var konten2 = document.getElementById("promocontainer2display");
var konten3 = document.getElementById("promocontainer3display");

btn_promospesial3.addEventListener('click',()=>{
    konten1.style.display='none';
    konten3.style.display='flex';
});

btn_promospesial2.addEventListener('click',()=>{
    konten1.style.display='none';
    konten2.style.display='flex';
});

btn_promotopup1.addEventListener('click',()=>{
    konten2.style.display='none';
    konten1.style.display='flex';
});

btn_promotopup3.addEventListener('click',()=>{
    konten2.style.display='none';
    konten3.style.display='flex';
});

btn_promochef1.addEventListener('click',()=>{
    konten3.style.display='none';
    konten1.style.display='flex';
})

btn_promochef2.addEventListener('click',()=>{
    konten3.style.display='none';
    konten2.style.display='flex';
})


var btn_uang2 = document.getElementById("uangelektronik2");
var btn_uang3 =  document.getElementById("uangelektronik3");

var btn_voucher1 = document.getElementById("voucher1");
var btn_voucher3 = document.getElementById("voucher3");

var btn_tiket1 = document.getElementById("tiket1");
var btn_tiket2 = document.getElementById("tiket2");

var layanandigital1 = document.getElementById("uangelektronik");
var layanandigital2 = document.getElementById("voucher");
var layanandigital3 = document.getElementById("tiket");

btn_uang2.addEventListener('click',()=>{
    layanandigital1.style.display='none';
    layanandigital2.style.display='block';
});

btn_uang3.addEventListener('click',()=>{
    layanandigital1.style.display='none';
    layanandigital3.style.display='block';
});

btn_voucher1.addEventListener('click',()=>{
    layanandigital2.style.display='none';
    layanandigital1.style.display='block';
});

btn_voucher3.addEventListener('click',()=>{
    layanandigital2.style.display='none';
    layanandigital3.style.display='block';
});

btn_tiket1.addEventListener('click',()=>{
    layanandigital3.style.display='none';
    layanandigital1.style.display='block';
});

btn_tiket2.addEventListener('click',()=>{
    layanandigital3.style.display='none';
    layanandigital2.style.display='block';
});


