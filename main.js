var fs = require('fs')

function generateNumber(length) {

    let number = '';

    for (var i = 0; i < length; i++) {
        number += Math.floor(Math.random() * 9) + ''
    }

    return number;
}

function evaluateNumber() {

    let number_eval = generateNumber(8);
    
    // IF FIRST DIGIT IS NOT EQUAL TO 8
    // TO STRING CONVERTS IT TO STRING
    // SLICE BASICALLY SLICES FROM INDEX 0 TO 1
    if (number_eval.toString().slice(0, 1) !== '8') {

        // RUN THE FUNCTION AGAIN
        setTimeout(() => {
            evaluateNumber()
        }, 1)
    } else {

        // CONSOLE LOG THE NUMBER
        return number_eval.toString()
    }
}

function writing(){

    var data = evaluateNumber()
    
    if(data == undefined){
        data = 'no match'
    }
    
    fs.writeFileSync('./cool.txt' , data + '\n' , {flag: 'a'})
}

for (var i = 0; i < 500; i++) {
    writing()
}