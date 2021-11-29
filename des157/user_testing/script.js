(function() {
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("#myform");
    const resultContainer = document.querySelector("#result-container");
    const mainContainer = document.querySelector("#main-container");

    // resultContainer.className="hidden";

    const sections = document.querySelectorAll('section');
    const one = document.querySelector('#one');
    const two = document.querySelector('#two');
    const next = document.querySelector('#next');
    const open = document.querySelector('#open');
    const first = document.querySelector('#first');
    const second = document.querySelector('#second');
    const restart = document.querySelector('#restart');
    const villageinfo = document.querySelector('#overlayone');
    const foodinfo = document.querySelector('#overlaytwo');
    const goalinfo = document.querySelector('#overlaythree');
    const ultimateinfo = document.querySelector('#overlayfour');
    const senseiinfo = document.querySelector('#overlayfive');

    document.querySelector('#one').addEventListener('click', function() {
        one.className = "underline"
        two.classList.remove("underline");
        second.className = "hidden";
        first.classList.remove("hidden");
    });
    document.querySelector('#two').addEventListener('click', function() {
        two.className = "underline"
        one.classList.remove("underline");
        first.className = "hidden";
        second.classList.remove("hidden");
    });


    // more info
    document.querySelector('#villageButton').addEventListener('click', function() {
        villageinfo.classList.remove("hidden");
    });
    document.querySelector('#foodButton').addEventListener('click', function() {
        foodinfo.classList.remove("hidden");
    });
    document.querySelector('#goalButton').addEventListener('click', function() {
        goalinfo.classList.remove("hidden");
    });
    document.querySelector('#ultimateButton').addEventListener('click', function() {
        ultimateinfo.classList.remove("hidden");
    });
    document.querySelector('#senseiButton').addEventListener('click', function() {
        senseiinfo.classList.remove("hidden");
    });

    // overlay
    document.querySelector('#close').addEventListener('click', function() {
        villageinfo.className = "hidden";

    });
    document.querySelector('#close1').addEventListener('click', function() {
        foodinfo.className = "hidden";
    });
    document.querySelector('#close2').addEventListener('click', function() {
        goalinfo.className = "hidden";

    });
    document.querySelector('#close3').addEventListener('click', function() {
        ultimateinfo.className = "hidden";

    });
    document.querySelector('#close4').addEventListener('click', function() {
        senseiinfo.className = "hidden";

    });

    document.querySelector('#next').addEventListener('click', function() {

        two.className = "underline";
        one.classList.remove("underline");
        open.classList.remove("hidden");
        next.className = "hidden";
        first.className = "hidden";
        second.classList.remove("hidden");
    });






    myForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("#name").value;
        const village = document.getElementById("village").value;
        const food = document.getElementById("food").value;
        const goal = document.getElementById("goal").value;
        const ultimate = document.getElementById("ultimate").value;
        const sensei = document.getElementById("sensei").value;
        mainContainer.className = "hidden";
        resultContainer.className = "showing";
        restart.classList.remove("hidden");
        document.querySelector("footer").className = "hidden";



        const formData = document.querySelectorAll("input[type=text]");
        for (let eachField of formData) {
            eachField.value = "";


            // const myText=`Here are the words: ${noun1}, ${noun2}, ${adj}, and ${verb}`;
            var myText;

            if (name && village && food && goal && ultimate && sensei) {
                myText = `<h1 id="resulth1">Your Ninja</h1> 
            <p>My name is <span>${name}</span>, I am from the <span>${village}</span>. My favorite food is <span>${food}</span>, I can eat it all day! My goal is to become the <span>${goal}</span> and become the strongest using my proudest move <span>${ultimate}</span> and with the help of sensei <span>${sensei}</span>.</p> 
            
          
            <img id="narufront" src="images/narufront.png" alt="naruto">`


            }
            document.querySelector('#restart').addEventListener('click', function() {

                location.reload();

            });



            resultContainer.innerHTML = myText;
        }
    });

})();