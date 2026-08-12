/**
 * Cifra nº 3 - Alfabeto Invertido
 * Substitui cada letra pelo seu correspondente no alfabeto invertido (A=Z, B=Y, C=X, etc.).
 */

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const REVERSED_ALPHABET = 'ZYXWVUTSRQPONMLKJIHGFEDCBA';

// Mapeamento bidirecional A <-> Z, B <-> Y, ...
const charMap = {};
for (let i = 0; i < ALPHABET.length; i++) {
    charMap[ALPHABET[i]] = REVERSED_ALPHABET[i];
}

function substitute(text) {
    if (!text) return '';
    const normalized = normalizeText(text);
    let result = '';

    for (let i = 0; i < normalized.length; i++) {
        const char = normalized[i];
        result += charMap[char] !== undefined ? charMap[char] : char;
    }

    return result;
}

export const invertedAlphabetCipher = {
    id: 'inverted-alphabet',
    name: 'Alfabeto Invertido',
    description: 'Por baixo do alfabeto normal, escreve-se o mesmo alfabeto, mas invertido. As letras de baixo são a codificação das de cima (A=Z, B=Y, C=X, etc.).',
    example: 'Entrada: "ESCUTEIRO"\nSaída: "VHXFGVRIL"',
    
    hasExtraFields: false,

    encode(text) {
        return substitute(text);
    },

    decode(text) {
        return substitute(text);
    }
};
