function core(number) {
    if (number >= 8000 && number <= 10000) {
        number -= 7214;
    }

    if (typeof number !== 'number' || number < 1000 || number > 2000) {
        return 'Invalid value';
    }

    let numberStr = number.toString();

    let 반 = parseInt(numberStr.charAt(1));

    let 학번 = parseInt(numberStr.charAt(2) + numberStr.charAt(3));

    let resultNumber;

    if (반 === 1) {
        resultNumber = 학번 - 1;
    } else {
        resultNumber = (반 - 1) * 35 + 학번;
    }

    let resultStr = resultNumber.toString().padStart(3, '0');



    let email = `yangju.s230${resultStr}@ggh.goe.go.kr`;

    if (email === "yangju.s230NaN@ggh.goe.go.kr") {
        return 'Invalid value';
    } else {
        return email;
    }

    
}




function reverseCore(resultNumber) {
    if (typeof resultNumber !== 'number' || resultNumber < 100000 || resultNumber > 999999) {
        return 'Invalid value';
    }

    let resultStr = resultNumber.toString();
    if (!resultStr.startsWith('230')) {
        return 'Invalid value';
    }

    let actualResultNumber = parseInt(resultStr.slice(3), 10);

    let 반, 학번;

    if (actualResultNumber < 35) {
        반 = 1;
        학번 = actualResultNumber + 1;
    } else {
        반 = Math.floor(actualResultNumber / 35) + 1;
        학번 = actualResultNumber % 35;
        if (학번 === 0) {
            학번 = 35;
            반 -= 1;
        }
    }

    const originalNumber = parseInt(`1${반}${학번.toString().padStart(2, '0')}`, 10);
    return originalNumber;
}





