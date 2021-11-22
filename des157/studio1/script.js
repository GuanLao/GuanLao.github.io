(function() {
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("#myform");
    const resultContainer = document.querySelector("#result-container");

    // resultContainer.className="hidden";




    myForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.querySelector("#name").value;
        const village = document.getElementById("village").value;
        const food = document.getElementById("food").value;
        const goal = document.getElementById("goal").value;
        const ultimate = document.getElementById("ultimate").value;
        document.getElementById("main-container").className = "hidden";
        document.getElementById("result-container").className = "showing";
        document.querySelector("footer").className = "hidden";


        const formData = document.querySelectorAll("input[type=text]");
        for (let eachField of formData) {
            eachField.value = "";


            // const myText=`Here are the words: ${noun1}, ${noun2}, ${adj}, and ${verb}`;
            var myText;

            if (name && village && food && goal && ultimate) {
                myText = `<h1 id="resulth1">Your Ninja</h1> 
            <p>My name is <span>${name}</span>, I am from the <span>${village}</span>. My favorite food is <span>${food}</span>, I can eat it all day! My goal is to become the <span>${goal}</span> and become the strongest using my proudest move <span>${ultimate}</span>.</p> 
            
            <br>
            <p>Thank you for playing!!!</p>
            <img id="naru" src="images/naruto1.png" alt="naruto">`

            }



            resultContainer.innerHTML = myText;
        }
    });







})();