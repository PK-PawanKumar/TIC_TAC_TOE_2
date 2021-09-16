

// home page
//chaging color on clicking

var name1;
var name2;
var modeSelected = false;
var optionSelected = false;
var SingleMode = false;
var DoubleMode = false;

function GameModeSingle(i) {
    document.getElementById("single").style.backgroundColor = "rgb(100, 200, 95)";
    document.getElementById("double").style.backgroundColor = "wheat";
    modeSelected = true;
    //alert
    // alert("sorry! , this mode is no available now");
    // if AI process cpmplted alert to ask name

    name1 = prompt("enter player name : ");
    name2 = "Computer";
    SingleMode=true;
    DoubleMode=false;
}

function GameModeDouble(i) {
    document.getElementById("double").style.backgroundColor = "rgb(100, 200, 95)";
    document.getElementById("single").style.backgroundColor = "wheat";

    //alert , input of player name
    name1 = prompt("enter player1 name : ");
    name2 = prompt("enter player2 name : ");

    modeSelected = true;

    SingleMode=false;
    DoubleMode=true;

}

function chooseX(i) {
    document.getElementById("selectX").style.backgroundColor = "rgb(100, 200, 95)";
    document.getElementById("selectO").style.backgroundColor = "wheat";
    optionSelected = true;
}

function chooseO(i) {
    document.getElementById("selectO").style.backgroundColor = "rgb(100, 200, 95)";
    document.getElementById("selectX").style.backgroundColor = "wheat";
    optionSelected = true;
}

// play game button

function startGame() {
    if (modeSelected == true && optionSelected == true) {
        if(DoubleMode ==true)
        window.open('1.html');
        else if(SingleMode ==true)
        window.open('2.html');
    }
    else {
        alert("kindly select game mode and starting option both!");
    }
}


// reset details

function ResetInfo() {
    document.getElementById("single").style.backgroundColor = "wheat";
    document.getElementById("double").style.backgroundColor = "wheat";
    document.getElementById("selectX").style.backgroundColor = "wheat";
    document.getElementById("selectO").style.backgroundColor = "wheat";
}


function updateName()
{
    alert(name1);
    document.setElementById("p1").innerHTML=name1;
    
}




// game page 
// double mode
// player's move
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var plrmove = 'O';
var clr = "green"
var p1Winner = 0;
var p2Winner = 0;

var counter = 0;

function checkWinner() {
    if (arr[0] == arr[1] && arr[1] == arr[2]) {
        document.getElementById("0").style.backgroundColor = "yellow";
        document.getElementById("1").style.backgroundColor = "yellow";
        document.getElementById("2").style.backgroundColor = "yellow";
        return true;
    }
    else if (arr[3] == arr[4] && arr[4] == arr[5]) {
        document.getElementById("3").style.backgroundColor = "yellow";
        document.getElementById("4").style.backgroundColor = "yellow";
        document.getElementById("5").style.backgroundColor = "yellow";
        return true;
    }
    else if (arr[6] == arr[7] && arr[7] == arr[8]) {
        document.getElementById("6").style.backgroundColor = "yellow";
        document.getElementById("7").style.backgroundColor = "yellow";
        document.getElementById("8").style.backgroundColor = "yellow";
        return true;
    }
    else if (arr[0] == arr[3] && arr[3] == arr[6]) {
        document.getElementById("0").style.backgroundColor = "yellow";
        document.getElementById("3").style.backgroundColor = "yellow";
        document.getElementById("6").style.backgroundColor = "yellow";
        return true;
    }
    else if (arr[1] == arr[4] && arr[4] == arr[7]) {
        document.getElementById("1").style.backgroundColor = "yellow";
        document.getElementById("4").style.backgroundColor = "yellow";
        document.getElementById("7").style.backgroundColor = "yellow";
        return true;
    }
    else if (arr[2] == arr[5] && arr[5] == arr[8]) {
        document.getElementById("2").style.backgroundColor = "yellow";
        document.getElementById("5").style.backgroundColor = "yellow";
        document.getElementById("8").style.backgroundColor = "yellow";
        return true;
    }
    else if (arr[0] == arr[4] && arr[4] == arr[8]) {
        document.getElementById("0").style.backgroundColor = "yellow";
        document.getElementById("4").style.backgroundColor = "yellow";
        document.getElementById("8").style.backgroundColor = "yellow";
        return true;
    }
    else if (arr[2] == arr[4] && arr[4] == arr[6]) {
        document.getElementById("2").style.backgroundColor = "yellow";
        document.getElementById("4").style.backgroundColor = "yellow";
        document.getElementById("6").style.backgroundColor = "yellow";
        return true;
    }
    else {
        return false;
    }
}

function mkmove(i) {
    // alert(i.textContent);
    counter++;
    // check winning condition
    var winnerfound = checkWinner();

    if (winnerfound == true) {
        alert("winner alredy found !,restart game");
    }
    else {
        if (i.textContent != 'X' && i.textContent != 'O') {
            var chance;

            if (clr == "green")
                clr = "red";
            else
                clr = "green";

            if (plrmove === 'X') {
                plrmove = 'O';
            }
            else
                plrmove = 'X';

            var position = i.textContent;
            i.textContent = plrmove;
            document.getElementById(position).style.color = clr;
            chance = plrmove;
            document.getElementById(chance).style.backgroundColor = "rgb(228, 102, 102)";

            if (chance == "X")
                chance = "O";
            else
                chance = "X";
            document.getElementById(chance).style.backgroundColor = "rgb(102, 228, 102)";
            // alert(i.textContent);
            arr[position] = i.textContent;
            // alert(arr);
        }
        winnerfound = checkWinner();
        if (winnerfound == true) {
            alert("congratulations!🥳  player  " + plrmove + " is winner");
            counter = 0;
            if (plrmove == 'X')
                p1Winner++;
            else
                p2Winner++;

            // updating scoreboard
            UpdateScoreboard();
        }
        else if (counter == 9) {
            alert("Draw !");
        }
    }
}

function Restart() {
    var ask = confirm("are you sure ?");
    // alert(ask);
    if (ask) {
        arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        document.getElementById("0").innerHTML = 0;
        document.getElementById("1").innerHTML = 1;
        document.getElementById("2").innerHTML = 2;
        document.getElementById("3").innerHTML = 3;
        document.getElementById("4").innerHTML = 4;
        document.getElementById("5").innerHTML = 5;
        document.getElementById("6").innerHTML = 6;
        document.getElementById("7").innerHTML = 7;
        document.getElementById("8").innerHTML = 8;
        document.getElementById("0").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("1").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("2").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("3").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("4").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("5").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("6").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("7").style.color = "rgba(8, 58, 72, 0)";
        document.getElementById("8").style.color = "rgba(8, 58, 72, 0)";

        document.getElementById("0").style.backgroundColor = "rgba(2, 43, 69, 0.434)";
        document.getElementById("1").style.backgroundColor = "rgba(2, 43, 69, 0.434)";
        document.getElementById("2").style.backgroundColor = "rgba(2, 43, 69, 0.434)";
        document.getElementById("3").style.backgroundColor = "rgba(2, 43, 69, 0.434)";
        document.getElementById("4").style.backgroundColor = "rgba(2, 43, 69, 0.434)";
        document.getElementById("5").style.backgroundColor = "rgba(2, 43, 69, 0.434)";
        document.getElementById("6").style.backgroundColor = "rgba(2, 43, 69, 0.434)";
        document.getElementById("7").style.backgroundColor = "rgba(2, 43, 69, 0.434)";
        document.getElementById("8").style.backgroundColor = "rgba(2, 43, 69, 0.434)";

        // counter = 0
        counter = 0;
        board = [ [ '_', '_', '_' ],
              [ '_', '_', '_' ],
              [ '_', '_', '_' ] 
            ];
            winnerfound=false;
    }
}

function UpdateScoreboard() {
    // alert(p1Winner);
    // alert(p2Winner);
    document.getElementById("score1").innerHTML = p1Winner;
    document.getElementById("score2").innerHTML = p2Winner;

    if (p1Winner > p2Winner) {
        document.getElementById("score1").style.backgroundColor = "lightgreen";
        document.getElementById("score2").style.backgroundColor = "tomato";
    }
    else if (p1Winner < p2Winner) {
        document.getElementById("score2").style.backgroundColor = "lightgreen";
        document.getElementById("score1").style.backgroundColor = "tomato";
    }
    else {
        document.getElementById("score1").style.backgroundColor = "yellow";
        document.getElementById("score2").style.backgroundColor = "yellow";
    }
}

function ResetScore() {
    var decisionConfermation = confirm("are you sure ?");
    if (decisionConfermation == true) {
        p1Winner = 0;
        p2Winner = 0;
        document.getElementById("score1").innerHTML = p1Winner;
        document.getElementById("score2").innerHTML = p2Winner;
        document.getElementById("score1").style.backgroundColor = "yellow";
        document.getElementById("score2").style.backgroundColor = "yellow";
        
    }


}


// game page 
// single mode
// player's move


var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var plrmove = 'O';
var clr = "green"
var ComputerWin=false;
var PlayerWin=false;
var counter=0;
var cek;
var winnerfound = false;

// make move
function mkmove2(i)
{
       
   if(winnerfound==false)
   {
    playerMove(i);
    Winner("You");
    if(counter<=9 && winnerfound==false && plrmv==true)
    {
        computerMove(arr);
        Winner("Computer");
    }
   }
}

// player move
var plrmv=false;
function playerMove(i)
{
    counter++;
    // alert("text = " + i.textContent);
    // alert("winner = " + winnerfound);
    if (i.textContent != 'X' && i.textContent != 'O' && winnerfound==false) {
        var chance;

        if (clr == "green")
            clr = "red";
        else
            clr = "green";
            
        plrmove = 'X';

        var position = i.textContent;
        i.textContent = plrmove;
        document.getElementById(position).style.color = "black";
        document.getElementById(position).style.backgroundColor = "black";
        chance = plrmove;
        // document.getElementById(chance).style.backgroundColor = "rgb(228, 102, 102)";

        if (chance == "X")
            chance = "O";
        else
            chance = "X";
        // document.getElementById(chance).style.backgroundColor = "rgb(102, 228, 102)";
        // alert(i.textContent);
        arr[position] = i.textContent;
        // alert(arr);

        // Winner("You");
        plrmv=true;
    }
}

function CompMove(i)
{
    counter++;
   
        if(winnerfound==false)
        {
            var chance;

        if (clr == "green")
            clr = "red";
        else
            clr = "green";

        plrmove='O';

        var position = i;
        // alert("position = "+ i + ", x/o = "+ plrmove);
        document.getElementById(position).style.color = "white";
        document.getElementById(position).style.backgroundColor= "white";
        chance = plrmove;
        // document.getElementById(chance).style.backgroundColor = "rgb(02, 228, 102)";
        arr[position] = 'O';
        // alert("change at = " + i);
        // Winner("Computer");
        plrmv=false;
        }
}


function computerMove(arr)
{
    // alert(arr);
    var index = miniMaxAlg(arr);
    // alert("computer movee at : ");
    // alert(index);
    CompMove(index);
}


function miniMaxAlg(a)
{
    class Move
    {
        constructor()
        {
            let row,col;
        }
    }
 

    let player = 'x', opponent = 'o';
    
    // This function returns true if there are moves
    // remaining on the board. It returns false if
    // there are no moves left to play.

    function isMovesLeft(board)
    {

        for(var i = 0; i < 3; i++)

            for(var j = 0; j < 3; j++)

                if (board[i][j] == '_')

                    return true;

                    

        return false;
    }                           
 
    // This is the evaluation function as discussed
    // in the previous article ( http://goo.gl/sJgv68 )

    function evaluate(b)
    {

        

        // Checking for Rows for X or O victory.

        for(let row = 0; row < 3; row++)

        {

            if (b[row][0] == b[row][1] &&

                b[row][1] == b[row][2])

            {

                if (b[row][0] == player)

                    return +10;

                    

                else if (b[row][0] == opponent)

                    return -10;

            }

        }

    

        // Checking for Columns for X or O victory.

        for(let col = 0; col < 3; col++)

        {

            if (b[0][col] == b[1][col] &&

                b[1][col] == b[2][col])

            {

                if (b[0][col] == player)

                    return +10;

    

                else if (b[0][col] == opponent)

                    return -10;

            }

        }

    

        // Checking for Diagonals for X or O victory.

        if (b[0][0] == b[1][1] && b[1][1] == b[2][2])

        {

            if (b[0][0] == player)

                return +10;

                

            else if (b[0][0] == opponent)

                return -10;

        }

    

        if (b[0][2] == b[1][1] && 

            b[1][1] == b[2][0])

        {

            if (b[0][2] == player)

                return +10;

                

            else if (b[0][2] == opponent)

                return -10;

        }

    

        // Else if none of them have

        // won then return 0

        return 0;
    }
 
// This is the minimax function. It 
// considers all the possible ways 
// the game can go and returns the 
// value of the board

    function minimax(board, depth, isMax)
    {

        let score = evaluate(board);

    

        // If Maximizer has won the game

        // return his/her evaluated score

        if (score == 10)

            return score;

    

        // If Minimizer has won the game

        // return his/her evaluated score

        if (score == -10)

            return score;

    

        // If there are no more moves and

        // no winner then it is a tie

        if (isMovesLeft(board) == false)

            return 0;

    

        // If this maximizer's move

        if (isMax)

        {

            let best = -1000;

    

            // Traverse all cells

            for(let i = 0; i < 3; i++)

            {

                for(let j = 0; j < 3; j++)

                {

                    

                    // Check if cell is empty

                    if (board[i][j]=='_')

                    {

                        

                        // Make the move

                        board[i][j] = player;

    

                        // Call minimax recursively 

                        // and choose the maximum value

                        best = Math.max(best, minimax(board,

                                        depth + 1, !isMax));

    

                        // Undo the move

                        board[i][j] = '_';

                    }

                }

            }

            return best;

        }

    

        // If this minimizer's move

        else

        {

            let best = 1000;

    

            // Traverse all cells

            for(var i = 0; i < 3; i++)

            {

                for(var j = 0; j < 3; j++)

                {

                    

                    // Check if cell is empty

                    if (board[i][j] == '_')

                    {

                        

                        // Make the move

                        board[i][j] = opponent;

    

                        // Call minimax recursively and 

                        // choose the minimum value

                        best = Math.min(best, minimax(board,

                                        depth + 1, !isMax));

    

                        // Undo the move

                        board[i][j] = '_';

                    }

                }

            }

            return best;

        }
    }
 
// This will return the best possible
// move for the player

    function findBestMove(board)
    {

        let bestVal = -1000;

        let bestMove = new Move();

        bestMove.row = -1;

        bestMove.col = -1;

    

        // Traverse all cells, evaluate 

        // minimax function for all empty 

        // cells. And return the cell

        // with optimal value.

        for(var i = 0; i < 3; i++)

        {

            for(var j = 0; j < 3; j++)

            {

                

                // Check if cell is empty

                if (board[i][j] == '_')

                {

                    

                    // Make the move

                    board[i][j] = player;
                    let moveVal = minimax(board, 0, false);

    

                    // Undo the move

                    board[i][j] = '_';

                    if (moveVal > bestVal)

                    {

                        bestMove.row = i;

                        bestMove.col = j;

                        bestVal = moveVal;

                    }

                }

            }

        }
        return bestMove;
    }
 


var k=0,ch;
let board = [ [ '_', '_', '_' ],
              [ '_', '_', '_' ],
              [ '_', '_', '_' ] 
            ];
// alert(board);
for(var i=0;i<3;i++)
{
    for(var j=0;j<3;j++)
    {
        if(a[k]=='X')
        {
            ch = 'x';
        }
        else if(a[k]=='O')
        {
            ch='o';
        }
        else
        {
            ch='_';
        }
        board[i][j]=ch;
        k++;
    }
}

// alert(board);
let bestMove = findBestMove(board);
 
var i,j;
i = bestMove.row;
j = bestMove.col;

// alert("row = " + i + "col = " + j);
var p;
    if(i==0 && j==0)
    p= 0;
    else if(i==0 && j==1)
    p= 1;
    else if(i==0 && j==2)
    p= 2;
    else if(i==1 && j==0)
    p= 3;
    else if(i==1 && j==1)
    p= 4;
    else if(i==1 && j==2)
    p= 5;
    else if(i==2 && j==0)
    p= 6;
    else if(i==2 && j==1)
    p= 7;
    else if(i==2 && j==2)
    p= 8;
    // alert("final return = " + p);
    return p;
}

// function ReturnIndex(i,j)
// {
//     var p;
//     if(i==0 && j==0)
//     p= 0;
//     else if(i==0 && j==1)
//     p= 1;
//     else if(i==0 && j==2)
//     p= 2;
//     else if(i==1 && j==0)
//     p= 3;
//     else if(i==1 && j==1)
//     p= 4;
//     else if(i==1 && j==2)
//     p= 5;
//     else if(i==2 && j==0)
//     p= 6;
//     else if(i==2 && j==1)
//     p= 7;
//     else if(i==2 && j==2)
//     p= 8;
//     alert("final retunr = " + p);
//     return p;
// }

var nm;

function Winner(win)
{
    winnerfound = checkWinner();

    if (winnerfound == true) {
        alert(win + "won!");
        counter=100;
        if(win=="You")
        p2Winner++;
        else if(win=="Computer")
        p1Winner++;
        UpdateScoreboard();
        return true;
    }
    else if (counter == 9) {
        alert("Draw !");
        counter=100;
        return true;
    }
    return false;
}