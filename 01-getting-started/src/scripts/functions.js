
const functions = {

    size: (num) => {
        if (num < 10) return "small";
        if (num < 20) return "medium";
        if (num < 101) return "large";
        return "extra large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        return num1 / num2;
    },

    getValues: () => {
        return [Number(document.getElementById("var1").value),Number(document.getElementById("var2").value)];
    },

    isEven: (num1) => {
        return (num1%2===0) ? true : false;
    },

    earningsBrackets: (num1) => {
        var aBracket = 0, bBracket = 0, cBracket = 0, dBracket = 0, eBracket = 0;
        if (num1 > 214368) {
            eBracket = num1 - 214368;
            num1 = 214368;
        }
        if (num1 > 150473) {
            dBracket = num1 - 150473;
            num1 = 150473;
        }
        if (num1 > 97069) {
            cBracket = num1 - 97069;
            num1 = 97069;
        }
        if (num1 > 48535) {
            bBracket = num1 - 48535;
            num1 = 48535;
        }
        aBracket = Math.round((num1 * .15 + Number.EPSILON) * 100) / 100;
        bBracket = Math.round((bBracket * .205 + Number.EPSILON) * 100) / 100;
        cBracket = Math.round((cBracket * .26 + Number.EPSILON) * 100) / 100;
        dBracket = Math.round((dBracket * .29 + Number.EPSILON) * 100) / 100;
        eBracket = Math.round((eBracket * .33 + Number.EPSILON) * 100) / 100;
        return [aBracket,bBracket,cBracket,dBracket,eBracket];
    }
};

export default functions;
