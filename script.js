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
