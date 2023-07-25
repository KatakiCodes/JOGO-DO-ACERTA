var number;
var tentative = 1;
var answer;

function play(){

    while(tentative <= 3){
        generateRandom();
      answer = prompt(tentative+"º Tentativa  \n Tente advinhar o número: ");
        if(answer == number){
            alert(answer +' = ' + number + " Parabéns acertou!!!");
            tentative = 3;
        }
        else{
            alert(answer +' != ' + number + " Você errou!!!");
            tentative ++;
            if(tentative >3 )alert('GAME OVER');
            
        }
    }
    resetGame();
}
function generateRandom(){
    number =  Math.floor(Math.random() * 10);
    return number;
}
function resetGame(){
    tentative = 0;
    generateRandom(answer);
}