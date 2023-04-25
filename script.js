const xl = document.getElementById('PlayAgn');
xl.style.display = 'none';  					//hides the "play again" button

var table = document.getElementById("myTable");
if (table != null) {
	for (let i = 0; i < table.rows.length; i++) {
		for (let j = 0; j < table.rows[i].cells.length; j++){
		    table.rows[i].cells[j].onclick = function () {
		        tableText(this);
		    };
		}
	}
}

let nValue = 'X';
let counter = 0;
let Ncount = 0;
function tableText(tableCell) {
    //if (tableCell.innerHTML == ''){alert('EmptyCell');}
    if(tableCell.innerHTML == '' && Ncount < 9){
        tableCell.innerHTML = nValue;
        counter++;
        changeNValue();
        Ncount = checkWinner(counter);
        // console.log(Ncount);
        if(Ncount === 9){
            document.getElementById('Result').innerHTML = 'This is a tie !';
            xl.style.display = 'block';
            document.getElementById('PlayAgn').addEventListener('click', function(event) {
                window.location.reload();
            });
        }else if(Ncount === 10){
            document.getElementById('Result').innerHTML = `Player X WINS !`;
            xl.style.display = 'block';
            document.getElementById('PlayAgn').addEventListener('click', function(event) {
                window.location.reload();
            });
        }else if(Ncount === 11){
            document.getElementById('Result').innerHTML = `Player ${nValue} WINS !`;
            xl.style.display = 'block';
            document.getElementById('PlayAgn').addEventListener('click', function(event) {
                window.location.reload();
            });
        }
    }
}
		
function changeNValue(){
    if (counter%2 === 1){
        nValue = 'O';	
    }else {
        nValue = 'X';
    }
    console.log(nValue);
}

function checkWinner(moves){
    if (table.rows[0].cells[0].innerHTML === 'X' || table.rows[0].cells[0].innerHTML === 'O'){
        if(table.rows[0].cells[0].innerHTML === table.rows[0].cells[1].innerHTML && table.rows[0].cells[1].innerHTML === table.rows[0].cells[2].innerHTML){
            table.rows[0].style.backgroundColor = "lightgreen";
            if(table.rows[0].cells[0].innerHTML === 'X'){
                moves = 10;
                return moves;
            }else{
                moves = 11;
                return moves;
            }
        }
    }
    if (table.rows[1].cells[0].innerHTML === 'X' || table.rows[1].cells[0].innerHTML === 'O'){
        if(table.rows[1].cells[0].innerHTML === table.rows[1].cells[1].innerHTML && table.rows[1].cells[1].innerHTML === table.rows[1].cells[2].innerHTML){
            table.rows[1].style.backgroundColor = "lightgreen";
            // alert('Player ' + table.rows[0].cells[0].innerHTML + ' WINS!');
            if(table.rows[0].cells[0].innerHTML === 'X'){
                moves = 10;
                return moves;
            }else{
                moves = 11;
                return moves;
            }
        }
    }
    if (table.rows[2].cells[0].innerHTML === 'X' || table.rows[2].cells[0].innerHTML === 'O'){
        if(table.rows[2].cells[0].innerHTML === table.rows[2].cells[1].innerHTML && table.rows[2].cells[1].innerHTML === table.rows[2].cells[2].innerHTML){
            table.rows[2].style.backgroundColor = "lightgreen";
            // alert('Player ' + table.rows[0].cells[0].innerHTML + ' WINS!');
            if(table.rows[0].cells[0].innerHTML === 'X'){
                moves = 10;
                return moves;
            }else{
                moves = 11;
                return moves;
            }
        }
    }
    if (table.rows[0].cells[0].innerHTML === 'X' || table.rows[0].cells[0].innerHTML === 'O'){
        if(table.rows[0].cells[0].innerHTML == table.rows[1].cells[0].innerHTML && table.rows[1].cells[0].innerHTML === table.rows[2].cells[0].innerHTML){
            table.rows[0].cells[0].style.backgroundColor = "lightgreen";
            table.rows[1].cells[0].style.backgroundColor = "lightgreen";
            table.rows[2].cells[0].style.backgroundColor = "lightgreen";
            if(table.rows[0].cells[0].innerHTML === 'X'){
                moves = 10;
                return moves;
            }else{
                moves = 11;
                return moves;
            }
        }
    }
    if (table.rows[0].cells[1].innerHTML === 'X' || table.rows[0].cells[1].innerHTML === 'O'){
        if(table.rows[0].cells[1].innerHTML === table.rows[1].cells[1].innerHTML && table.rows[1].cells[1].innerHTML === table.rows[2].cells[1].innerHTML){
            table.rows[0].cells[1].style.backgroundColor = "lightgreen";
            table.rows[1].cells[1].style.backgroundColor = "lightgreen";
            table.rows[2].cells[1].style.backgroundColor = "lightgreen";
            if(table.rows[0].cells[0].innerHTML === 'X'){
                moves = 10;
                return moves;
            }else{
                moves = 11;
                return moves;
            }
        }
    }
    if (table.rows[0].cells[2].innerHTML === 'X' || table.rows[0].cells[2].innerHTML === 'O'){
        if(table.rows[0].cells[2].innerHTML === table.rows[1].cells[2].innerHTML && table.rows[1].cells[2].innerHTML === table.rows[2].cells[2].innerHTML){
            table.rows[0].cells[2].style.backgroundColor = "lightgreen";
            table.rows[1].cells[2].style.backgroundColor = "lightgreen";
            table.rows[2].cells[2].style.backgroundColor = "lightgreen";
            if(table.rows[0].cells[0].innerHTML === 'X'){
                moves = 10;
                return moves;
            }else{
                moves = 11;
                return moves;
            }
        }
    }
    if (table.rows[0].cells[0].innerHTML === 'X' || table.rows[0].cells[0].innerHTML === 'O'){
        if(table.rows[0].cells[0].innerHTML === table.rows[1].cells[1].innerHTML && table.rows[1].cells[1].innerHTML === table.rows[2].cells[2].innerHTML){
            table.rows[0].cells[0].style.backgroundColor = "lightgreen";
            table.rows[1].cells[1].style.backgroundColor = "lightgreen";
            table.rows[2].cells[2].style.backgroundColor = "lightgreen";
            if(table.rows[0].cells[0].innerHTML === 'X'){
                moves = 10;
                return moves;
            }else{
                moves = 11;
                return moves;
            }
        }
    }
    if (table.rows[0].cells[2].innerHTML === 'X' || table.rows[0].cells[2].innerHTML === 'O'){
        if(table.rows[0].cells[2].innerHTML === table.rows[1].cells[1].innerHTML && table.rows[1].cells[1].innerHTML === table.rows[2].cells[0].innerHTML){
            table.rows[0].cells[2].style.backgroundColor = "lightgreen";
            table.rows[1].cells[1].style.backgroundColor = "lightgreen";
            table.rows[2].cells[0].style.backgroundColor = "lightgreen";
            if(table.rows[0].cells[0].innerHTML === 'X'){
                moves = 10;
                return moves;
            }else{
                moves = 11;
                return moves;
            }
        }
    }
    return moves;

}