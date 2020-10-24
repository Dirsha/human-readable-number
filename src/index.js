module.exports = function toReadable(number) {
    var arrOfStrNum = [
        [
            "",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ],
        [
            "",
            "",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ],
        [
            "",
            "one hundred",
            "two hundred",
            "three hundred",
            "four hundred",
            "five hundred",
            "six hundred",
            "seven hundred",
            "eight hundred",
            "nine hundred",
        ],
    ];
    let arrOfNum = number.toString().split(""),
        arrPush = [],
        arrOfNumCopy = arrOfNum,
        flag = false;
    if (number == 0) {
        return "zero";
    }

    let arrDeletedItems = arrOfNum.splice(-2);
    if (
        parseInt(arrDeletedItems[0] + arrDeletedItems[1]) > 9 &&
        parseInt(arrDeletedItems[0] + arrDeletedItems[1]) < 20
    ) {
        arrPush.push(
            arrOfStrNum[0][parseInt(arrDeletedItems[0] + arrDeletedItems[1])]
        );
        arrPush.push(arrOfStrNum[2][arrOfNum[0]]);
        arrPush = arrPush.reverse();

        arrPush = arrPush.join(" ").trim();
        return arrPush;
    } else {
        arrOfNum = arrOfNum.concat(arrDeletedItems);
        arrOfNum = arrOfNum.reverse();
    }

    // console.log(arrOfNum);

    for (let i = 0; i < arrOfNum.length; i++) {
        // console.log(arrOfNum[i]);

        arrPush.push(arrOfStrNum[i][arrOfNum[i]]);
    }
    arrPush = arrPush.reverse();
    arrPush = arrPush.filter(Boolean);
    arrPush = arrPush.join(" ");

    return arrPush;
};
