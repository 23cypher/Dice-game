var scores, roundScore, activePlayer, gamePlaying;

init();


document.querySelector('#btnroll').addEventListener('click', function() {
    if(gamePlaying) {
    
        var dice = Math.floor(Math.random() * 6) + 1;

    
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'die_face_' + dice + '.png';


        if (dice !== 1) {

            roundScore += dice;
            document.querySelector('#current' + activePlayer).textContent = roundScore;
        } else {
        
            nextPlayer();
        }
    }    
});


document.querySelector('#btnhold').addEventListener('click', function() {
    if (gamePlaying) {
   
        scores[activePlayer] += roundScore;

    
        document.querySelector('#score' + activePlayer).textContent = scores[activePlayer];

   
        if (scores[activePlayer] >= 100) {
            document.querySelector('#name' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('panel-'+ activePlayer ).classList.add('winner');
            document.querySelector('panel-' + activePlayer ).classList.remove('active');
            gamePlaying = false;
        } else {
           
            nextPlayer();
        }
    }
});


function nextPlayer() {
   
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current0').textContent = '0';
    document.getElementById('current1').textContent = '0';

    document.querySelector('.panel-1').classList.toggle('active');
    document.querySelector('.panel-2').classList.toggle('active');


    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('#btnnew').addEventListener('click', init);

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score0').textContent = '0';
    document.getElementById('score1').textContent = '0';
    document.getElementById('current0').textContent = '0';
    document.getElementById('current1').textContent = '0';
    document.getElementById('name0').textContent = 'Player 1';
    document.getElementById('name1').textContent = 'Player 2';
    document.querySelector('.panel-1').classList.remove('winner');
    document.querySelector('.panel-2').classList.remove('winner');
    document.querySelector('.panel-1').classList.remove('active');
    document.querySelector('.panel-2').classList.remove('active');
    document.querySelector('.panel-1').classList.add('active');
}