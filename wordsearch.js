const transpose = require('./transpose');

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    const verticalJoin = letters.map(ls => ls.join(''))
    for (v of verticalJoin) {
        if (v.includes(word)) return true
    }
    const transposedLetters = transpose(letters);
    const verticalJoinFlip = transposedLetters.map(ls => ls.join(''))
    for (v of verticalJoinFlip) {
        if (v.includes(word)) return true
    }
    return false;
}


module.exports = wordSearch