/**
 * Cifra nº 5 - Passa N Melros (Unificação de Passa Um Melro, Passa Dois Melros, etc.)
 * Intercala N letras aleatórias (de 1 a 5) a seguir a cada letra da mensagem original.
 */

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getRandomLetter() {
    return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
}

function parseMelrosCount(optionVal) {
    const parsed = parseInt(optionVal, 10);
    if (isNaN(parsed) || parsed < 1) return 1;
    if (parsed > 5) return 5;
    return parsed;
}

export const passaNMelrosCipher = {
    id: 'passa-n-melros',
    name: 'Passa N Melros',
    description: 'O código «Passa N Melros» consiste em intercalar N letras aleatórias a seguir a cada letra da mensagem (ex: 1 melro, 2 melros, até 5 melros). Escolhe a quantidade N no seletor.',
    example: 'Seletor: 1 Melro\nEntrada: "SOL"\nSaída: "SAOXLY" (exemplo com letras aleatórias intercaladas)',
    
    hasExtraFields: true,
    extraFields: [
        {
            id: 'melrosCount',
            label: 'Número de Melros (N):',
            type: 'select',
            defaultValue: 1,
            options: [
                { value: 1, label: '1 Melro (Passa Um Melro)' },
                { value: 2, label: '2 Melros (Passa Dois Melros)' },
                { value: 3, label: '3 Melros (Passa Três Melros)' },
                { value: 4, label: '4 Melros (Passa Quatro Melros)' },
                { value: 5, label: '5 Melros (Passa Cinco Melros)' }
            ]
        }
    ],

    encode(text, options = {}) {
        if (!text) return '';
        const n = parseMelrosCount(options.melrosCount);
        const normalized = normalizeText(text);
        let result = '';

        for (let i = 0; i < normalized.length; i++) {
            const char = normalized[i];
            if (/[A-Z]/.test(char)) {
                result += char;
                for (let k = 0; k < n; k++) {
                    result += getRandomLetter();
                }
            } else {
                result += char;
            }
        }

        return result;
    },

    decode(text, options = {}) {
        if (!text) return '';
        const n = parseMelrosCount(options.melrosCount);
        const normalized = normalizeText(text);
        let result = '';
        let i = 0;

        while (i < normalized.length) {
            const char = normalized[i];
            if (/[A-Z]/.test(char)) {
                result += char;
                i++;
                let skipped = 0;
                while (i < normalized.length && skipped < n) {
                    if (/[A-Z]/.test(normalized[i])) {
                        skipped++;
                        i++;
                    } else {
                        break;
                    }
                }
            } else {
                result += char;
                i++;
            }
        }

        return result;
    }
};
