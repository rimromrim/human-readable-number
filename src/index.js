let words1 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
let words2 = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
let words3 = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

module.exports = function toReadable (number) {
    let numToStr = number.toString();
    if (number === 0) {
        return 'zero'
    }
    if (number < 10) {
        return words1[number];
    }
    // > 9
    if (numToStr.length == 2) {
        if (numToStr[1] == 0) {
           return words3[numToStr[0]];
        }
        if (numToStr[1] != 0 && number < 20) {
            return words2[numToStr[1]];
        }
        if (numToStr[1] !=0 && number > 20) {
            return words3[numToStr[0]] + ' ' + words1[numToStr[1]];
        }
    } // > 99
    if (numToStr.length === 3) {
        if (numToStr[2] == 0) {
            result = words1[numToStr[0]] + ' hundred ' + words3[numToStr[1]];
            return result.trim();
        }
        if (numToStr[2] != 0 && numToStr[1] > 1) {
            return words1[numToStr[0]] + ' hundred ' + words3[numToStr[1]] + ' ' + words1[numToStr[2]];
        }
        if (numToStr[1] != 0 && numToStr[2] != 0) {
            return words1[numToStr[0]] + ' hundred ' + words2[numToStr[2]];
        }
        if (numToStr[1] == 0) {
            result = words1[numToStr[0]] + ' hundred ' + words1[numToStr[2]];
            return result.trim();
        }
    }
}