const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const encodedLetters = [];

    for (let i = 0; i < expr.length; i += 10) {
        encodedLetters.push(expr.substring(i, i + 10));
    }

    for (let i = 0; i < encodedLetters.length; i++) {
        encodedLetters.splice(i, 1, encodedLetters[i].substring(encodedLetters[i].indexOf('1')));
    }

    const morseCode = [];

    encodedLetters.forEach((element) => {
        const tempStorage = [];

        for (let i = 1; i < element.length; i += 2) {
            if (element[i] === '*') {
                tempStorage.push('**');
            } else {
                if (element[i] === '0') {
                    tempStorage.push('.');
                } else {
                    tempStorage.push('-');
                }
            }
        }
        morseCode.push(tempStorage.join(''));
    });

    for (let i = 0; i < morseCode.length; i++) {
        if (morseCode[i] === '**********') {
            morseCode.splice(i, 1, ' ');
        } else {
            morseCode.splice(i, 1, MORSE_TABLE[morseCode[i]]);
        }
    }
    return morseCode.join('');
}

module.exports = {
    decode
}