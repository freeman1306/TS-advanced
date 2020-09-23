"use strict";
const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    console.log('btn cliked');
});
function logInfo(data, _) {
    console.log(data);
    const message = 'String';
}
logInfo('I am log string');
function mult(a, b) {
    if (a && b) {
        return a * b;
    }
}
//# sourceMappingURL=app.js.map