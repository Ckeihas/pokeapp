function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.20 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 })
tl.to(".loadScreen", { y: "-100%", duartion: 1 }, "-=1")

const tl2 = gsap.timeline({ defaults: { ease: 'power1.out' } });

//tl2.to(".blackLine", { x: "-100%", duration: 1 })

const tl3 = gsap.timeline({ scrollTrigger: {} });



const observer = new IntersectionObserver(entries => {
    
    entries.forEach(entry => {
        const square = entry.target.querySelector('.anim');

        if (entry.isIntersecting) {
            square.classList.add('anim-animation');
            return; 
        }

        // We're not intersecting, so remove the class!
        square.classList.remove('square-animation');
    });
});

observer.observe(document.querySelector('.content.or'));



/*-----Battle zone animation-------*/


gsap.set('.scrollDist', { width: '150%', height: '200%' })
gsap.timeline({ scrollTrigger: { trigger: '.content.bl', start: 'top top', end: 'bottom bottom', scrub: 2 } })
    
    .fromTo('.cloud1', { y: -60 }, { y: -160 }, 0)
    .fromTo('.cloud2', { y: 190 }, { y: 70 }, 0)
    .fromTo('.cloud3', { y: 300 }, { y: 250 }, 0)
    .fromTo('.cloud4', { y: 311 }, { y: 100 }, 0)
    .fromTo('.cloud5', { y: 130 }, { y: -5 }, 0)
    .fromTo('.cloud6', { y: 330 }, { y: 200 }, 0)
