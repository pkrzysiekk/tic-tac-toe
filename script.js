const gameBoard=(function(){
let board=[];
initiateBoard=()=>{
    for(i=0;i<9;i++){
        board[i]='';
    }
}
displayBoard=()=>{
    for(i=0;i<9;i++){
        console.log(board[i]);
        
    }
}
return {board,initiateBoard,displayBoard}
})();

function addPlayer(name,mark){
    const playerName=name;
    const playerMark=mark;
    return {playerName,playerMark}
}
function getRandomInt(max=2) {
    return Math.floor(Math.random() * max);
  }
function game(player1,player2,gameBoard){

    startTheGame=()=>{
        if(player1.turn===true){
            console.log(`Mark the field you want to ${player1.playerName}!`);
        }
        else{
            console.log(`Mark the field you want to ${player2.playerName}!`);
        }

    }
    getStartingPlayer=()=>{
        let result=getRandomInt();
        if(result===0){
            console.log(`${player1.playerName} starts!`)
            player1.turn=true;
            startTheGame();
        }
        else{
            console.log(`${player2.playerName} starts!`)
            player2.turn=true;
            startTheGame();
        }

      
    }
    getStartingPlayer();

}
pkrzysiek=addPlayer('pkrzysiek','X');
Computer=addPlayer('Computer','Y');
game(pkrzysiek,Computer,gameBoard.board);


