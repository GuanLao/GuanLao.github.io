(function() {

    'use strict';
    console.log('reading js');

    const sections = document.querySelectorAll('section');

    document.querySelector('#gotoinput1').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[1].className = "showing orange";
    });
    const scroll = window.requestAnimationFrame || function(callback){
        window.setTimeout(callback,1000/60)};
    const elementsToShow = document.querySelectorAll(".show-on-scroll");
    
    function loop(){
        elementsToShow.forEach(function(element){
        
            if(isElementInViewport(element)){
                element.classList.add("is-visible");
            }else{
                element.classList.remove("is-visible")
            }
        });
        scroll(loop);
            }
            loop();
    function isElementInViewport(el){
        if(typeof jQuery === "function" && el instanceof jQuery){
            el=el[0];
        }
        const rect = el.getBoundingClientRect();
        return(rect.top <= 0 && rect.bottom >=0)
        || 
        (rect.bottom>= (window.innerHeight|| document.documentElement.clientHeight)&& 
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    }
})();