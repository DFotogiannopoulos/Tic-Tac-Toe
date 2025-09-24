document.addEventListener('DOMContentLoaded', function(){
    const startButton = document.getElementById("start-btn");

    startButton.addEventListener("click",dataToGame);

    function dataToGame(){
        const name1 = document.getElementById("player1").value;
        const name2 = document.getElementById("player2").value;

        localStorage.setItem("player1", name1);
        localStorage.setItem("player2",name2);

        window.location.href = "game.html";
    }
});