(function() {

    'use strict';
    console.log('reading js');

    const sections = document.querySelectorAll('section');

    document.querySelector('#gotoinput1').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[1].className = "showing orange";
    });

    window.addEventListener("scroll", show);

    function show() {
        const shows = document.querySelectorAll(".show");

        for (let i = 0; i < shows.length; i++) {

            const windowheight = window.innerHeight;
            const showingpoint = 180;
            const showtop = shows[i].getBoundingClientRect().top;


            if (showtop < windowheight - showingpoint) {
                shows[i].classList.add('active');
            } else {
                shows[i].classList.remove('active');
            }
        }
    }
})();