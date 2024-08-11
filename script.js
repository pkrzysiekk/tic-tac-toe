const gameBoard=(function(){
let board=[];
initiateBoard=()=>{
    for(i=0;i<9;i++){
        board[i]='O';
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
gameBoard.initiateBoard();
gameBoard.displayBoard();



