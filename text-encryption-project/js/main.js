import { encrypt, decrypt } from './encryption.js';

document.getElementById('encryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const encrypted = encrypt(inputText);
    document.getElementById('outputText').value = encrypted;
});

document.getElementById('decryptButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const decrypted = decrypt(inputText);
    document.getElementById('outputText').value = decrypted;
});