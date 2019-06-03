let your_turn = 1;
let winner = "";
let imageUrl = "";
let background = "";
let initiated = 0;
let playerX = 0;
let playerO = 0;






$(".house" ).click(function() {
    if(your_turn === 1 && initiated === 0){
        bg = $(this).css("background-image");
        if(background === "none"  || background === ""){
            imageUrl= `url(./imgs/${your_turn}.jpg)`;
            $(this).addClass("playerX");
            $(this).css({
                background: imageUrl,
            })
        your_turn = 2;
        endOfTheGame()
        }else{
            alert("This house is full. Choose another.");
        }
    }else if(your_turn === 2 && initiated === 0){
        background = $(this).css("background-image");
        if(background === "none"  || background === ""){
            imageUrl= `url(./imgs/${your_turn}.jpg)`;
            $(this).addClass("playerO");
            $(this).css({
                background: imageUrl,
            })
        your_turn = 1;
        endOfTheGame()
        }else{
            alert("This house is full. Choose another.");
        }
    }
});