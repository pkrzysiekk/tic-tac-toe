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
    function isVictory() {
        const b = gameBoard.board; // Skrót dla wygody
        const winningCombinations = [
            [0, 1, 2], // Pierwszy rząd
            [3, 4, 5], // Drugi rząd
            [6, 7, 8], // Trzeci rząd
            [0, 3, 6], // Pierwsza kolumna
            [1, 4, 7], // Druga kolumna
            [2, 5, 8], // Trzecia kolumna
            [0, 4, 8], // Przekątna od lewej do prawej
            [2, 4, 6]  // Przekątna od prawej do lewej
        ];

        // Sprawdź, czy którakolwiek z kombinacji wygrywających jest wypełniona przez jednego gracza
        for (let combo of winningCombinations) {
            const [a, b, c] = combo;
            if (gameBoard.board[a] && gameBoard.board[a] === gameBoard.board[b] && gameBoard.board[a] === gameBoard.board[c]) {
                return true; // Zwycięzca został znaleziony
            }
        }
        return false; // Brak zwycięzcy
    }
    

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
                if(isVictory())
                {
                    console.log("Someone won!")
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


