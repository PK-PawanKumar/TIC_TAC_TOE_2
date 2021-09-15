// home page
//chaging color on clicking

var name1;
var name2;
var modeSelected = false;
var optionSelected = false;

function GameModeSingle(i) {
    document.getElementById("single").style.backgroundColor = "rgb(100, 200, 95)";
    document.getElementById("double").style.backgroundColor = "wheat";
    // modeSelected = false;
    //alert
    alert("sorry! , this mode is no available now");
    // if AI process cpmplted alert to ask name
}

function GameModeDouble(i) {
    document.getElementById("double").style.backgroundColor = "rgb(100, 200, 95)";
    document.getElementById("single").style.backgroundColor = "wheat";

    //alert , input of player name
    name1 = prompt("enter player1 name : ");
    name2 = prompt("enter player2 name : ");

    modeSelected = true;

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
        window.open('1.html');
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
// player's move
var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
plrmove = 'O';
var clr = "green"
var p1Winner = 0, p2Winner = 0;

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
        alert("winner alredy found !");
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

