const generatePassword = (length = 8) => {
    const charsets = [
        'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        'abcdefghijklmnopqrstuvwxyz',
        '0123456789',
        '!@#$%^&*()-_=+[]{}|;:,.<>?',
    ];

    let password = '';
    for (let i = 0; i < length; i++) {
        const charSetIndex = Math.floor(Math.random() * charsets.length);
        const charset = charsets[charSetIndex];
        const character = charset[Math.floor(Math.random() * charset.length)];
        password += character;
    }
    return password;
};

module.exports = generatePassword;