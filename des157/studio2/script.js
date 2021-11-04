(function() {

    'use strict';
    console.log('reading js');

    const sections = document.querySelectorAll('section');

    document.querySelector('#gotoinput1').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[1].className = "showing orange";
    });

    document.querySelector('#gotoinput2').addEventListener('click', function() {
        sections[1].className = "hidden";
        sections[2].className = "showing magenta";
    });

    document.querySelector('#gotomadlib').addEventListener('click', function() {
        sections[2].className = "hidden";
        sections[3].className = "showing gray";
    });

})();