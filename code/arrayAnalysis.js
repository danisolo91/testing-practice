const arrayAnalysis = (arr) => {
    return {
        average: arr.reduce((result, n) => result += n, 0) / arr.length,
        max: Math.max(...arr),
        min: Math.min(...arr),
        length: arr.length,
    };
};

module.exports = arrayAnalysis;