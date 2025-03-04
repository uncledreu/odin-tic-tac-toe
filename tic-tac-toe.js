function removeForm(){
    // remove form from main container
    const form = document.querySelector('form');
    const Player1Name = document.getElementById('firstPlayerName').value;
    const Player2Name = document.getElementById('secondPlayerName').value;
    //console.log({firstPlayerName, secondPlayerName})
    form.remove();
    return {Player1Name, Player2Name}
}


function gameSetUp(a, b){

    const player1 = a
    const player2 = b
    let turn = player1;
    let lastMove;

    // main container variable
    const mainContainer = document.querySelector('.mainContainer')

    //display player names
    const nameDisplay = document.createElement('div');
    nameDisplay.classList.add('NameDisplay');

    // create game board
    const gameBoard = document.createElement('div');
    gameBoard.classList.add('container');

    for (let i = 0; i < 9; i++){
        const box = document.createElement('div')
        gameBoard.appendChild(box);
    }

    mainContainer.appendChild(nameDisplay);
    mainContainer.appendChild(gameBoard);

    const boxes = document.querySelectorAll('.container div');
    let move = 'X';

    boxes.forEach(box => {
        displayPlayerTurn(turn); //player turn
        //console.log(turn);
        box.addEventListener('click', () =>{
            if(!box.textContent){
                box.textContent = move;
                move == 'X' ? move = 'O' : move= 'X';
                turn == player1 ? turn = player2 : turn = player1;
                lastMove == player1 ? lastMove = player2 : lastMove = player1;
                //console.log(`${turn}'s turn`);
                //console.log(`${lastMove} made the last move`);
                displayPlayerTurn(turn); // player turn
                
                checkWinCombination(lastMove);
            }
        })
    })

}

function displayPlayerTurn(a){
    const turnDisplay = document.querySelector(".NameDisplay")
    turnDisplay.textContent = `${a}, it's your turn!`
    
}

function displayWinner(a){

    const turnDisplay = document.querySelector('.NameDisplay');
    const gameContainer = document.querySelector('.container');

    turnDisplay.remove();
    gameContainer.remove();

    const outsideContainer = document.querySelector('.mainContainer');

    const winningMessage = document.createElement('h2');
    winningMessage.textContent =  a;
    outsideContainer.appendChild(winningMessage);

    const resetButton = document.createElement('button');
    resetButton.textContent = 'Restart Game';
    outsideContainer.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        location.reload();
      });

}


function checkWinCombination (name) {

    const winCombos =
    [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    let boxes = document.querySelectorAll('.container div');

    for (combo of winCombos){
        let [a, b, c] = combo;
        let boxA = boxes[a];
        let boxB = boxes[b];
        let boxC = boxes[c];

        if(boxA.textContent && boxA.textContent == boxB.textContent && boxB.textContent == boxC.textContent){
            //alert(`${boxA.textContent} win!`);
            //displayWinner(`${boxA.textContent} win!`);
            displayWinner(`${name} win!`);
            //break;
            //return
        }

        if(Array.from(boxes).every(e => e.textContent)){
            //alert('Match Draw');
            displayWinner(`Match Draw!`);
           // return
        }
    }
}


function abc(){

    const formInfo = document.querySelector('form');

    formInfo.addEventListener('submit', function(evt){
        evt.preventDefault();
        const playerNames = removeForm();
        //console.log(playerNames)
        const {Player1Name, Player2Name} = playerNames;
        //console.log(Player1Name)
        gameSetUp(Player1Name, Player2Name);
    })
}

abc();