const gameBoard=(function(){

let board=[];

displayBoard=()=>{
    for(i=0;i<9;i++){
        if(i % 3===0){
            console.log('\n')
        }
        console.log(board[i]);
        
    }
}
return {board,displayBoard}
})();

function addPlayer(name,mark){
    const playerName=name;
    const playerMark=mark;
    let turn=false;
    return {playerName,playerMark,turn}
}
function getRandomInt(max=2) {
    return Math.floor(Math.random() * max);
  }
function game(player1,player2,gameBoard){
    let movesTaken=0;
    let activePlayer;
    const gameContainer=document.querySelector(".game");
    function boxIsEmpty(gameBox){
        return gameBox.innerHTML==='';
    }
    initiateBoard=()=>{

        for(i=0;i<9;i++){
            const gameBox=document.createElement("div");
            gameBox.classList.add("gameBox");
            gameBox.addEventListener("click", () => {
                activePlayer = player1.turn === true ? player1 : player2;
                if(boxIsEmpty(gameBox)){
                gameBox.innerHTML = activePlayer.playerMark;
                const index = Array.from(gameContainer.children).indexOf(gameBox);
                gameBoard.board[index] = activePlayer.playerMark; 
                movesTaken++;
                if(activePlayer===player1){
                    player1.turn=false;
                    player2.turn=true;
                }
                else{
                    player2.turn=false;
                    player1.turn=true;
                }

                if (movesTaken >= 9) {
                    console.log("Game over!");
                }
            }
            });
            gameContainer.appendChild(gameBox);
        }
        
    }
    startTheGame=()=>{
        if(player1.turn===true){
            console.log(`Mark the field you want to ${player1.playerName}!`);
         
            
        }
        else{
            console.log(`Mark the field you want to ${player2.playerName}!`);

        }
        initiateBoard();
        
        
        
        

    }
    getStartingPlayer=()=>{
        let result=getRandomInt();
        if(result===0){
            console.log(`${player1.playerName} starts!`)
            player1.turn=true;
             activePlayer=player1
            
            startTheGame();
        }
        else{
            console.log(`${player2.playerName} starts!`)
            player2.turn=true;
             activePlayer=player2;
            startTheGame();
        }

      
    }
    gameIsRunning=()=>{
        return movesTaken < 9; 
    }
    continueGame=()=>{

    }
  getStartingPlayer();

}
pkrzysiek=addPlayer('pkrzysiek','X');
Computer=addPlayer('Computer','Y');
game(pkrzysiek,Computer,gameBoard);


