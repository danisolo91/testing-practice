const caesarCipher = (shift, string) => {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const str = string.toLowerCase();

    return str.split('').reduce((result, c) => {
        if(c.match(/[a-z]/i)) {
            if(letters.indexOf(c) + shift > letters.length - 1) {
                return result + letters[(letters.indexOf(c) + shift) - letters.length];
            } else {
                return result + letters[letters.indexOf(c) + shift];
            }
        }
        return result + c;
    }, '');
};

module.exports = caesarCipher;