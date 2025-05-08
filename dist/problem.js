"use strict";
function formatString(input, toUpper = true) {
    return toUpper ? input.toUpperCase() : input.toLocaleLowerCase();
}
console.log(formatString("Hello", false));
console.log(formatString("Hello", true));
console.log(formatString("Hello", false));
