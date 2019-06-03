let your_turn = 1;
let winner = "";
let imageUrl = "";
let background = "";
let initiated = 0;
let playerX = 0;
let playerO = 0;


const housesAlike = (a, b, c) => {
    const backgroundA = $("#house"+a).css("background-image");
    const backgroundB = $("#house"+b).css("background-image");
    const backgroundC = $("#house"+c).css("background-image");
    if( (backgroundA == backgroundB) && (backgroundB == backgroundC) && (backgroundA != "none" && backgroundA != "")){
        if($('#house'+a).hasClass('playerX')){
            winner = 'X';
            playerX++;
            $("#X").html(`Player ${winner} : ${playerX}`);
        }else if($('#house'+a).hasClass('playerO')){           
            winner = 'O';
            playerO++;
            $("#O").html(`Player ${winner} : ${playerO}`);
        }
        return true;
    }
    else{
        return false;
    }
}
const endOfTheGame = () => {
    if( housesAlike('One', 'Two', 'Three') || housesAlike('Four', 'Five', 'Six') || housesAlike('Seven', 'Eight', 'Nine') ||
        housesAlike('One', 'Four', 'Seven') || housesAlike('Two', 'Five', 'Eight') || housesAlike('Three', 'Six', 'Nine') ||
        housesAlike('One', 'Five', 'Nine') || housesAlike('Three', 'Five', 'Seven')
    ){
        initiated = 1;
    }
}



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