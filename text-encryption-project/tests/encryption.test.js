// encryption.test.js

// Import the functions to be tested
import { encryptText, decryptText } from '../js/encryption.js';

// Test suite for encryption and decryption functions
describe('Encryption and Decryption Functions', () => {
    const originalText = 'Hello, World!';
    const key = 'mySecretKey';

    test('should encrypt text correctly', () => {
        const encryptedText = encryptText(originalText, key);
        expect(encryptedText).not.toBe(originalText);
    });

    test('should decrypt text correctly', () => {
        const encryptedText = encryptText(originalText, key);
        const decryptedText = decryptText(encryptedText, key);
        expect(decryptedText).toBe(originalText);
    });

    test('should return the same text when decrypted twice', () => {
        const encryptedText = encryptText(originalText, key);
        const decryptedText = decryptText(encryptedText, key);
        const decryptedAgain = decryptText(encryptedText, key);
        expect(decryptedAgain).toBe(decryptedText);
    });
});