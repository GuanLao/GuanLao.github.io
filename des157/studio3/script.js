(function() {

    'use strict';
    console.log('reading js');

    var startGame = document.getElementById('startgame');
    var gameControl = document.getElementById('gamecontrol');
    var game = document.getElementById('game');
    var score = document.getElementById('score');
    var actionArea = document.getElementById('actions');
    const sections = document.querySelectorAll('section');
    const beepSound = new Audio('audio/diceroll.mp3');
    const ohNo = new Audio('audio/ohno.mp3');
    const ohYes = new Audio('audio/yes.mp3');

    document.querySelector('#gotoinput1').addEventListener('click', function() {
        sections[0].className = "hidden";
        sections[1].className = "showing orange";
    });


    var gameData = {
        dice: ['1die.png', '2die.png', '3die.png',
            '4die.png', '5die.png', '6die.png'
        ],
        players: ["player 1", "player 2"],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    // game start//
    startGame.addEventListener("click", function() {
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '';
        gameControl.innerHTML += '<button id="quit"> EXIT </button>';

        document.getElementById('quit').addEventListener("click", function() {
            location.reload();

        });
        setUpTurn();
    })


    function setUpTurn() {
        game.innerHTML = `<p> Roll the dice for the ${gameData.players[gameData.index]}</p>`

        actionArea.innerHTML = ' <button id="roll">Roll the Dice </button>';
        document.getElementById('roll').addEventListener('click', function() {
            throwDice();
            beepSound.play();
        });
    }


    function throwDice() {
        actionArea.innerHTML = ' ';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">
                                                    <img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // if two one is rolled
        if (gameData.rollSum === 2) {
            game.innerHTML += '<p> oh snap! Snake eyes</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            ohNo.play();
            //show the current score//
            setTimeout(setUpTurn, 2000);
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
            //switch player
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p> Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]}</p>`;

            setTimeout(setUpTurn, 2000)


        } else {
            gameData.score[gameData.index] += gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">pass</button>';

            document.getElementById('rollagain').addEventListener('click', function() {
                console.log('rolling again');
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function() {
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();

        }
    }

    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {
            score.innerHTML = `<h2 id="win"> HORRAYYY!!! ${gameData.players[gameData.index]}
                    win with <span>${gameData.score[gameData.index]}</span> points!</h2> `;
            ohYes.play();

            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
        } else {
            // show the current score
            showCurrentScore();
        }
    }

    function showCurrentScore() {

        score.innerHTML = `<p id="result"> ${gameData.players[0]} score is <span>${gameData.score[0]}</span> and ${gameData.players[1]} score is <span>${gameData.score[1]}</span> </p>`;

    }





})();