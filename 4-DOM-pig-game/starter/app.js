/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, dicePrevious, roundScore, activePlayer, dice, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){
        // get a random number
        var diceScore1 = Math.floor(Math.random() * 6) + 1;
        var diceScore2 = Math.floor(Math.random() * 6) + 1;

        //diplay the result
        var dice1 = document.querySelector('.dice-1');
        dice1.style.display = 'block';
        dice1.src = 'dice-' + diceScore1 + '.png';

        var dice2 = document.querySelector('.dice-2');
        dice2.style.display = 'block';
        dice2.src = 'dice-' + diceScore2 + '.png';

        if(diceScore1 !== 1 && diceScore2 !== 1){
            if((diceScore1 === 6 || diceScore2 === 6) && dicePrevious === 6) {
                dicePrevious = 0;
                scores[activePlayer] = 0;
                document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
                nextPlayer();
            } else {
                dicePrevious = diceScore1;
                roundScore += (diceScore1 + diceScore2);
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }
            
        } else {
            nextPlayer();
        }
    }
  
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
        // add the current score to the player's global score
        scores[activePlayer] += roundScore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];


        var specifiedScore = document.getElementById('winning-score').value;
        var winningScore = specifiedScore ? specifiedScore : 100;

        // check if the player won the game
        if(scores[activePlayer] >= winningScore){
            // game over
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            //reset the game board
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
        // update the UI 
            nextPlayer();    
        }
    }
    
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    dice = 0;
    dicePrevious = 0;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;


    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';

    document.querySelector('.player-0-panel').classList.add('active');

}