$('.btn-scroll').html  (function up (px){
    window.addEventListener('scroll', ()=>{
        var scroll = document.documentElement.scrollTop;
        var btn-scroll = document.getElementById('btn-scroll');
        if (scroll > px){
            btn-scroll.style.left == 20 + "px";
        }    else {
                    btn-scroll.style.left == 100 + "px";
        }
    })
    up (500);

})
