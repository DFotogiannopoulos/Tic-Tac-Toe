document.addEventListener('DOMContentLoaded', function() {
    const turn = document.getElementById("turn");

    const name1 = localStorage.getItem("player1");
    const name2 = localStorage.getItem("player2");

    
    turn.innerHTML = "<p>" + name1 + " plays!" + "</p>";

    const cells = document.getElementsByClassName("cell");

    let symbol = "X";
    Array.from(cells).forEach(cell => {
        cell.addEventListener("click", function() {
            if (cell.innerHTML ===''){
                cell.dataset.mark = symbol;
                cell.innerHTML = symbol;
                cell.classList.add("show");
                const array_cells = Array.from(cells);
                let check = checkIfOver(array_cells, name1, name2);
                console.log(check);
                if (check == name1){
                    turn.innerHTML = "<p>" + name1 + " wins!" + "</p>";
                }else if (check == name2){
                    turn.innerHTML = "<p>" + name2 + " wins!" + "</p>";
                }else if(check == "Tie"){
                    turn.innerHTML = "<p>It was a boring tie...</p>";
                }else{
                    if (symbol == "X"){
                        symbol = "O";
                        turn.innerHTML = "<p>" + name2 + " plays!" + "</p>";
                    }else{
                        symbol = "X";
                        turn.innerHTML = "<p>" + name1 + " plays!" + "</p>";
                    }
                };
            }
        });
    });

    function checkIfOver(cells, name1, name2){
        if(cells[0].innerHTML==cells[1].innerHTML && cells[1].innerHTML==cells[2].innerHTML && cells[0].innerHTML!=""){
            if (cells[0].innerHTML=="X"){
                return name1;
            }else{
                return name2;
            }
        }if(cells[3].innerHTML==cells[4].innerHTML && cells[4].innerHTML==cells[5].innerHTML && cells[3].innerHTML!=""){
            if (cells[3].innerHTML=="X"){
                return name1;
            }else{
                return name2;
            }
        }if(cells[6].innerHTML==cells[7].innerHTML && cells[7].innerHTML==cells[8].innerHTML && cells[6].innerHTML!=""){
            if (cells[6].innerHTML=="X"){
                return name1;
            }else{
                return name2;
            }
        }if(cells[0].innerHTML==cells[3].innerHTML && cells[3].innerHTML==cells[6].innerHTML && cells[0].innerHTML!=""){
            if (cells[0].innerHTML=="X"){
                return name1;
            }else{
                return name2;
            }
        }if(cells[1].innerHTML==cells[4].innerHTML && cells[4].innerHTML==cells[7].innerHTML && cells[1].innerHTML!=""){
            if (cells[1].innerHTML=="X"){
                return name1;
            }else{
                return name2;
            }
        }if(cells[2].innerHTML==cells[5].innerHTML && cells[5].innerHTML==cells[8].innerHTML && cells[2].innerHTML!=""){
            if (cells[2].innerHTML=="X"){
                return name1;
            }else{
                return name2;
            }
        }if(cells[0].innerHTML==cells[4].innerHTML && cells[4].innerHTML==cells[8].innerHTML && cells[0].innerHTML!=""){
            if (cells[0].innerHTML=="X"){
                return name1;
            }else{
                return name2;
            }
        }if(cells[2].innerHTML==cells[4].innerHTML && cells[4].innerHTML==cells[6].innerHTML && cells[2].innerHTML!=""){
            if (cells[2].innerHTML=="X"){
                return name1;
            }else{
                return name2;
            }
        }else if (cells.some(cell => cell.innerHTML ==="")){
            return ("Play");
        }else{
            return ("Tie");
        }
    }
});


