const btn: Element = document.querySelector('#btn')!;

btn.addEventListener('click', () => {
  console.log('btn cliked');
});

function logInfo(data: string, _?: number) {
  console.log(data);
  const message = 'String';
}

logInfo('I am log string');

function mult(a: number, b: number) {
  if (a && b) {
    return a * b;
  }
}
