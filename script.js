const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptBtn = document.getElementById('encrypt-btn');
const decryptBtn = document.getElementById('decrypt-btn');

encryptBtn.addEventListener('click', () => {
  outputText.value = encrypt(inputText.value);
});

decryptBtn.addEventListener('click', () => {
  outputText.value = decrypt(inputText.value);
});

function encrypt(text) {
  return text
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
}

function decrypt(text) {
  return text
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}
