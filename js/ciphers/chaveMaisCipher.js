/**
 * Cifra - Chave + ?
 * Cada letra do alfabeto é deslocada N posições (positivo ou negativo, de -25 a +25).
 */

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
}

function parseShiftValue(val) {
    let parsed = parseInt(val, 10);
    if (isNaN(parsed)) parsed = 3;
    if (parsed < -25) parsed = -25;
    if (parsed > 25) parsed = 25;
    return parsed;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const chaveMaisCipher = {
    id: 'chave-mais',
    name: 'Chave + ?',
    description: 'Cada letra do alfabeto corresponde à letra que está N posições à frente (número positivo) ou atrás (número negativo). O deslocamento é ajustável entre -25 e +25.',
    example: 'Deslocamento: 3\nEntrada: "ESCUTA"\nSaída: "HVFXWD"',
    
    hasExtraFields: true,
    extraFields: [
        {
            id: 'shiftValue',
            label: 'Deslocamento (-25 a +25):',
            type: 'number',
            defaultValue: 3,
            min: -25,
            max: 25,
            placeholder: 'Ex: 3 ou -3'
        }
    ],

    encode(text, options = {}) {
        if (!text) return '';
        const shift = parseShiftValue(options.shiftValue);
        const normalized = normalizeText(text);
        let result = '';

        for (let i = 0; i < normalized.length; i++) {
            const char = normalized[i];
            const idx = ALPHABET.indexOf(char);
            if (idx !== -1) {
                const newIdx = (idx + shift % 26 + 26) % 26;
                result += ALPHABET[newIdx];
            } else {
                result += char;
            }
        }

        return result;
    },

    decode(text, options = {}) {
        if (!text) return '';
        const shift = parseShiftValue(options.shiftValue);
        const normalized = normalizeText(text);
        let result = '';

        for (let i = 0; i < normalized.length; i++) {
            const char = normalized[i];
            const idx = ALPHABET.indexOf(char);
            if (idx !== -1) {
                const newIdx = (idx - shift % 26 + 26) % 26;
                result += ALPHABET[newIdx];
            } else {
                result += char;
            }
        }

        return result;
    }
};
