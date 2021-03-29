var today = new Date();
var tYear = today.getFullYear();
var tMonth = today.getMonth() + 1;
var tDay = today.getDate();
console.log(tYear);
console.log(tMonth);
console.log(tDay);

function  daysMonth(M,d,y){
    var numDays1 = 0;
    switch (M) {
        case 1:
        case 01:
            break;
        case 2:
        case 02:
            numDays1 += 31;
            break;
        case 3:
        case 03:
            numDays1 += 59;
            break;

        case 4:
        case 04:
            numDays1 += 90;
            break;
        case 5:
        case 05:
            numDays1 += 120;
            break;
        case 6:
        case 06:
            numDays1 += 151;
            break;
        case 7:
        case 07:
            numDays1 += 181;
            break;
        case 8:
        case 08:
            numDays1 += 212;
            break;
        case 9:
        case 09:
            numDays1 += 243;
            break;
        case 10:
        case 010:
            numDays1 += 273;
            break;
        case 11:
            numDays1 += 304;
            break;
        case 12:
            numDays1 += 334;
            break;
    }

    if(y%4==0){
        numDays1++;
    }
    numDays1 += d;
    return numDays1;
    

}

function ageInDays() {
    var numDays = 0;
    var day = Number(prompt("Enter the day you were born"));
    var month = Number(prompt("Enter the month you were born"));
    var year = Number(prompt("Enter the year you were born"));
    console.log("Your birthday is on : " + day + "-" + month + "-" + year);

   var diffYear = tYear - year;
   var leapDays = 0;
   for(let i = year; i < tYear;i++){
       if(i % 4 == 0){
            leapDays++;
       }
      
   }
   numDays += diffYear * 365;
   numDays += leapDays;

   var dayDiff;
   var daysBornYear = daysMonth(month , day, year);
   var dayscurrentYear = daysMonth(tMonth , tDay , tYear);
   if(dayscurrentYear > daysBornYear){
       dayDiff = dayscurrentYear - daysBornYear;
   }else{
    dayDiff = daysBornYear - dayscurrentYear;
   }
   console.log('Month diff:' + dayDiff);
   console.log('year days:'+numDays);

   numDays += Number(dayDiff);
   

    

    console.log('Total days' + numDays);

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode(' You are ' + numDays + ' days old ');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = 'https://thecatapi.com/api/images/get?format=src&type=gif&size=small';
    div.appendChild(image);

}
function rpsGame(yourChoice){
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(botChoiceNumber());
    var results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEnd(humanChoice, botChoice , message);


    
    

}

function botChoiceNumber(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(humanChoice, botChoice){
    var rpsDatabase = {
        'rock' : {'scissors' : 1, 'rock' : 0.5, 'paper' : 0},
        'paper' : {'rock' : 1, 'paper' : 0.5, 'scissors':0},
        'scissors' : {'paper' : 1, 'scissors' : 0.5, 'rock' : 0}
    }
    var yourScore = rpsDatabase[humanChoice][botChoice];
    var computerScore = rpsDatabase[botChoice][humanChoice];
    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message' : 'You Lost!', 'color' : 'red'};
    }
    else if(yourScore === 0.5){
        return {'message' : 'You Tied!' , 'color' : 'yellow'};
    }
    else{
        return{'message' : 'You Won!', 'color' : 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice , finalmessage){
    var imageDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    
    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    
    humanDiv.innerHTML = "<img src='" + imageDatabase[humanImageChoice] + "'height=150 width=150 style ='box-shadow: 0px 10px 50px rgba(37 , 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalmessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>" 
    botDiv.innerHTML = "<img src='" + imageDatabase[botImageChoice] + "'height = 150; width = 150; style = 'box-shadow: 0px 10px 50px rgba(243,38,24,1);'>"


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    
}


//Challenge 4: Change the color of all buttons

var all_buttons = document.getElementsByTagName('button');
var copyAllbuttons = [];
for(let i = 0;i<all_buttons.length;i++){
    copyAllbuttons.push(all_buttons[i].classList[1]);
}
console.log(copyAllbuttons);
function buttonColorChange(buttonThingy){
    
    
    if(buttonThingy.value === 'red'){
        buttonsRed();
        
    }else if(buttonThingy.value === 'green'){
        buttonsGreen();
        
    }else if(buttonThingy.value === 'reset'){
        resetAllButtons();
        
        
    }else if(buttonThingy.value === 'yellow'){
        buttonsYellow();
    }else if(buttonThingy.value === 'random'){
        randomColors();
    }
}
function buttonsRed(){
    
        for(let i =0; i< all_buttons.length;i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-danger');
        }
}

function buttonsGreen(){
    
        for(let i =0; i< all_buttons.length;i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('btn-success');
        }



}

function buttonsYellow(){
    for(let i = 0; i< all_buttons.length;i++){
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-warning');
    }
}
function resetAllButtons(){
    for(let i =0; i< all_buttons.length;i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(copyAllbuttons[i]);
            
        }
        console.log(all_buttons);

}

function randomColors(){
    let choice = ['btn-primary','btn-danger','btn-success','btn-warning'];
    for(let i = 0; i<all_buttons.length;i++){
        let randomNumber = Math.floor(Math.random() * 4);
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choice[randomNumber]);
        
    }
}

//Challenge 5 : BlackJack
let blackJackGame = {
    'you':{'scoreSpan':'#your-blackjack-result','div':'#your-box','score': 0},
    'dealer':{'scoreSpan':'#dealer-blackjack-result','div':'#dealer-box','score': 0},
    'cards' : ['2','3','4','5','6','7','8','9','10','A','J','K','Q'],
    'cardsMap' : {'2': 2,'3' : 3,'4' : 4,'5' : 5,'6' : 6,'7':7,'8':8,'9':9,'10':10,'A':[1,11],'J':10,'K':10,'Q':10},
};

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);
document.querySelector('#blackjack-deal-button').addEventListener('click', blackJackDeal);
document.querySelector('#blackjack-stand-button').addEventListener('click', dealerLogic);


const YOU = blackJackGame['you'];
const DEALER = blackJackGame['dealer'];
const hitSound = new Audio('static/sounds/swish.m4a');
const winSound = new Audio('static/sounds/cash.mp3');
const lossSound = new Audio('static/sounds/aww.mp3');


function blackjackHit(){
    let card = randomCard();
    let activePlayer = YOU;
    showCard(card,activePlayer);
    updateScore(card, activePlayer);
    console.log(activePlayer['score']);
    showScore(activePlayer);  
}

function randomCard(){
    let randomCardIndex = Math.floor(Math.random() * 13);
    return blackJackGame['cards'][randomCardIndex]; 
}



function showCard(card , activePlayer){
    
    if(activePlayer['score'] <=21){
        let cardImage = document.createElement('img');
        cardImage.src = `static/images/${card}.png`;
        console.log(cardImage.src);
        document.querySelector(activePlayer['div']).appendChild(cardImage);
        hitSound.play();
    }
    
}

function blackJackDeal(){
    showResult(computeWinner());
    let yourImages = document.querySelector(YOU['div']).querySelectorAll('img');
    console.log(yourImages);
    for(let i=0;i<yourImages.length;i++){
        yourImages[i].remove();
    }
    let dealerImages = document.querySelector(DEALER['div']).querySelectorAll('img');
    for(let i=0;i<dealerImages.length;i++){
        dealerImages[i].remove();
    }
    document.querySelector(YOU['scoreSpan']).textContent = 0;
    document.querySelector(DEALER['scoreSpan']).textContent = 0;
    document.querySelector(YOU['scoreSpan']).style.color = 'white';
    document.querySelector(DEALER['scoreSpan']).style.color = 'white';
    YOU['score'] = 0;
    DEALER['score'] = 0;
    
    
    
}

function updateScore(card , activePlayer){
    if(activePlayer['score'] <= 21){
        if(card === 'A'){
            //When the card is a Ace, add 11 if score is less than 21 after adding or else add 1
            if(activePlayer['score'] + blackJackGame['cardsMap'][card][1] <= 21){
                activePlayer['score'] += blackJackGame['cardsMap'][card][1];            
            }else{
                activePlayer['score'] += blackJackGame['cardsMap'][card][0];            
            }
            
        }else{
        activePlayer['score'] += blackJackGame['cardsMap'][card];
    
        }
    }
    
}

function showScore(activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];

    }
}

function dealerLogic(){
    card = randomCard();
    showCard(card,DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
}

function computeWinner(){
    let winner;
    if(YOU['score'] <=21){
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21){
            winner = YOU;
            console.log('You Won!');
        }else if(YOU['score'] < DEALER['score']){
            winner = DEALER;
            console.log('You lost!');
        }else if(YOU['score'] === DEALER['score']){
            console.log('You Tied!')
        }
    }else if(YOU['score'] > 21 && DEALER['score'] <= 21){
        winner = DEALER;
        console.log('You Lost!');
    }else if(YOU['score'] > 21 && DEALER['score'] > 21){
        console.log('You Tied');
    }

    console.log('Winner is' + winner);
    return winner;

}

function showResult(winner){
    let message;
    let messageColor;
    if(winner === YOU){
        message = 'You Won!';
        messageColor = 'green';
        winSound.play();
    }else if(winner === DEALER){
        message = 'You Lost!';
        messageColor = 'red';
        lossSound.play();
    }else{
        message = 'You tied!';
        messageColor = 'Yellow';
    }

    document.querySelector('#blackjack-result').textContent = message;
    document.querySelector('#blackjack-result').style.color = messageColor;

}







  

