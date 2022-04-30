/*Faire apparaitre le menu caché*/
// const navMenu = document.getElementById('nav-menu'),
//     navToggle = document.getElementById('nav-toggle'),
//     navClose = document.getElementById('nav-close')
// if(navToggle){
//     navToggle.addEventListener('click', () => {
//         navMenu.classList.add('show-menu')
//     })
// }
document.addEventListener("DOMContentLoaded",()=>{
    const allRonds = document.querySelectorAll('.rond');
    const allBoxes = document.querySelectorAll('.box');

    const controller = new ScrollMagic.Controller()

    allBoxes.forEach(box => {

        for(i = 0; i < allRonds.length; i++){

            if(allRonds[i].getAttribute('data-anim') === box.getAttribute('data-anim')){

                let tween = gsap.from(box, {y: -50, opacity: 0, duration: 1})

                let scene = new ScrollMagic.Scene({
                    triggerElement: allRonds[i],
                    reverse: false
                })
                .setTween(tween)
                // .addIndicators()
                .addTo(controller)

        }

    }

})
})