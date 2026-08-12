/**
 * Cifra nº 4 - Transposto
 * Por baixo do alfabeto normal, escreve-se o mesmo alfabeto, mas começando na letra chave (ex: V, em que A = V).
 */

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
}

function getKeyShift(keyOption) {
    const cleaned = normalizeText(String(keyOption || 'V')).replace(/[^A-Z]/g, '');
    const keyChar = cleaned.length > 0 ? cleaned[0] : 'V';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shift = alphabet.indexOf(keyChar);
    return shift >= 0 ? shift : 21; // 21 é o índice de 'V'
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const transposedCipher = {
    id: 'transposed',
    name: 'Transposto',
    description: 'Por baixo do alfabeto normal, escreve-se o mesmo alfabeto, mas começando na letra chave do código (ex: V, em que A = V). As letras de baixo são a codificação das de cima.',
    example: 'Chave: V\nEntrada: "ESCUTEIRO"\nSaída: "ZNXPOZDMJ"',
    
    hasExtraFields: true,
    extraFields: [
        {
            id: 'keyLetter',
            label: 'Letra Chave (A = ...):',
            type: 'text',
            defaultValue: 'V',
            placeholder: 'Ex: V'
        }
    ],

    encode(text, options = {}) {
        if (!text) return '';
        const shift = getKeyShift(options.keyLetter);
        const normalized = normalizeText(text);
        let result = '';

        for (let i = 0; i < normalized.length; i++) {
            const char = normalized[i];
            const idx = ALPHABET.indexOf(char);
            if (idx !== -1) {
                result += ALPHABET[(idx + shift) % 26];
            } else {
                result += char;
            }
        }

        return result;
    },

    decode(text, options = {}) {
        if (!text) return '';
        const shift = getKeyShift(options.keyLetter);
        const normalized = normalizeText(text);
        let result = '';

        for (let i = 0; i < normalized.length; i++) {
            const char = normalized[i];
            const idx = ALPHABET.indexOf(char);
            if (idx !== -1) {
                result += ALPHABET[(idx - shift + 26) % 26];
            } else {
                result += char;
            }
        }

        return result;
    }
};
