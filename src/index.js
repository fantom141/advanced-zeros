module.exports = function getZerosCount(number, base) {
    var multipliers = [];
    var i = 2;
    while (i <= base) {
        if (base % i === 0) {
            base = base / i;
            multipliers.push(i);
        } else {
            i++;
        }
    }

    divider = multipliers.sort((a, b) => b - a)[0];
    function fact(zeroCount, val, fac) {
        if (Math.round(val / fac) >= 1) {
            zeroCount += ((val - (val % fac)) / fac);
            return fact(zeroCount, val, fac * divider);
        }
        return zeroCount;
    }

    return fact(0, number, divider);
}