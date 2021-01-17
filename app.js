var gamePlaying,scores, activePlayer,roundScore;
init();

// dice = Math.floor(Math.random() * 6 + 1);
// document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// var x=document.querySelector('#score-0').textContent;
// console.log(x);


document.querySelector('.btn-roll').addEventListener('click',function(){
   
    if(gamePlaying)
    {
       //Random Number
     var dice = Math.floor(Math.random() * 6 + 1);
     //Display Result
     var diceDom=document.querySelector('.dice');
     diceDom.style.display='block';
     diceDom.src='dice-'+dice+'.png';
     if(dice!==1)
     {
         //until dice is not 1 keep adding round score
           
            roundScore=dice+roundScore;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        
     }
     else{
         //when dice is 1,assign round score to player score change active player,initialize round score,
         //document.querySelector('player'+activePlayer+'-panel').classList.remove('active');
         nextPlayer();
     }

    }
     

});
document.querySelector('.btn-hold').addEventListener('click',function(){

    if(gamePlaying)
    {
        //Addd the round score to main score
    scores[activePlayer]+=roundScore;
    //update UI
    document.querySelector('#score-'+activePlayer).textContent=scores[activePlayer];
    
    //who wins first
    if(scores[activePlayer]>= 20){
        document.querySelector('#name-'+activePlayer).textContent='wins!!!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gamePlaying=false;
        
    }
    else{
        nextPlayer();
    }
    }

});

function nextPlayer()
{

    document.querySelector('#current-' + activePlayer).textContent = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore=0;
         
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}
document.querySelector('.btn-new').addEventListener('click',init);

function init()
{
    
    scores = [0,0];
    gamePlaying=true;
    activePlayer = 0;
    roundScore = 0;
    document.querySelector('.dice').style.display='none';
    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.querySelector('#name-0').textContent='Player 1' ;
    document.querySelector('#name-1').textContent='Player 2' ;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    

}








