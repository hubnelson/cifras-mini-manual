/**
 * Cifra - Romano-Árabe
 * As vogais são numeradas em romano (A=I, E=II, I=III, O=IV, U=V),
 * e as consoantes em árabe por ordem alfabética (B=1, C=2, ..., Z=21).
 */

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
}

const VOWEL_MAP = {
    'A': 'I',
    'E': 'II',
    'I': 'III',
    'O': 'IV',
    'U': 'V'
};

const ROMAN_TO_VOWEL = {
    'III': 'I',
    'II': 'E',
    'IV': 'O',
    'V': 'U',
    'I': 'A'
};

const CONSONANTS = [
    'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M',
    'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'
];

const CONSONANT_TO_ARABIC = {};
const ARABIC_TO_CONSONANT = {};

CONSONANTS.forEach((c, idx) => {
    const numStr = String(idx + 1);
    CONSONANT_TO_ARABIC[c] = numStr;
    ARABIC_TO_CONSONANT[numStr] = c;
});

export const romanoArabeCipher = {
    id: 'romano-arabe',
    name: 'Romano-Árabe',
    description: 'As vogais são numeradas em romano (A=I, E=II, I=III, O=IV, U=V) e as consoantes em números árabes por ordem alfabética (B=1, C=2, ..., Z=21).',
    example: 'Entrada: "ALERTA"\nSaída: "I 9 II 14 16 I"',
    
    hasExtraFields: false,

    encode(text) {
        if (!text) return '';
        const normalized = normalizeText(text);
        const tokens = [];

        for (let i = 0; i < normalized.length; i++) {
            const char = normalized[i];
            if (VOWEL_MAP[char]) {
                tokens.push(VOWEL_MAP[char]);
            } else if (CONSONANT_TO_ARABIC[char]) {
                tokens.push(CONSONANT_TO_ARABIC[char]);
            } else {
                tokens.push(char);
            }
        }

        // Junta tokens com espaço entre códigos adjacentes
        let result = '';
        for (let i = 0; i < tokens.length; i++) {
            const curr = tokens[i];
            const prev = tokens[i - 1];

            if (i > 0 && curr !== ' ' && prev !== ' ' && !/[\n\r\t]/.test(curr) && !/[\n\r\t]/.test(prev)) {
                result += ' ';
            }
            result += curr;
        }

        return result;
    },

    decode(text) {
        if (!text) return '';
        const rawTokens = text.trim().split(/\s+/);
        let result = '';

        for (let i = 0; i < rawTokens.length; i++) {
            const token = rawTokens[i].toUpperCase();

            if (ROMAN_TO_VOWEL[token]) {
                result += ROMAN_TO_VOWEL[token];
            } else if (ARABIC_TO_CONSONANT[token]) {
                result += ARABIC_TO_CONSONANT[token];
            } else {
                result += token;
            }
        }

        return result;
    }
};
