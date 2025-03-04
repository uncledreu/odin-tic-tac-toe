let boxes = document.querySelectorAll('.container div');
let move = 'X';

boxes.forEach(box => {
    box.addEventListener('click', () =>{
        if(!box.textContent){
            box.textContent = move;
            move == 'X' ? move = 'O' : move= 'X';
            checkWinCombination()
        }
    })
})

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

const checkWinCombination = () =>{
    
    let boxes = document.querySelectorAll('.container div');

    for (combo of winCombos){
        let [a, b, c] = combo;
        let boxA = boxes[a];
        let boxB = boxes[b];
        let boxC = boxes[c];

        if(boxA.textContent && boxA.textContent == boxB.textContent && boxB.textContent == boxC.textContent){
            alert(`${boxA.textContent} win!`);
            break;
            return
        }

        if(Array.from(boxes).every(e => e.textContent)){
            alert('Match Draw');
            return
        }
    }
}

