export function encrypt(text, key = 'default-key') {
    // Simple XOR encryption for demonstration
    return Array.from(text)
        .map(char => char.charCodeAt(0) ^ key.charCodeAt(0))
        .map(code => String.fromCharCode(code))
        .join('');
}

export function decrypt(encryptedText, key = 'default-key') {
    // XOR decryption (same as encryption for XOR)
    return encrypt(encryptedText, key);
}