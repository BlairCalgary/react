
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
};

export default functions;
