const reverseString = (string) => {
    return string.split('').reduce((result, c) => c + result, '');
};

module.exports = reverseString;