const $input = document.querySelector('input["type"="text"]') as HTMLInputElement;
const val = $input.value;

const $input1 = <HTMLInputElement>document.querySelector('input["type"="text"]');
const val1 = $input.value;