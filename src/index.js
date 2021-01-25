module.exports = function reverse(n) {
    nString = String(n);
    nString = nString[0] == "-" ? nString.slice(1) : nString;
    return Number(Array.from(nString).reverse().join(""));
};
