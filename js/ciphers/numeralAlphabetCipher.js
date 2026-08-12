/**
 * Cifra nº 6 - Alfabeto Numeral (Unificação de Alfabeto Numeral e Alfabeto Numeral com Chave)
 * Substitui cada letra pelo número correspondente.
 * Sem chave: A=01, B=02, ..., Z=26.
 * Com chave N: A=N, B=N+1, ..., Z=N+25.
 */

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getBaseKey(options = {}) {
    if (options.useKey) {
        const parsed = parseInt(options.keyNumber, 10);
        return !isNaN(parsed) ? parsed : 12;
    }
    return 1;
}

export const numeralAlphabetCipher = {
    id: 'numeral-alphabet',
    name: '6. Alfabeto Numeral',
    description: 'A cada letra do alfabeto corresponde um número. Sem chave: A=01, B=02, ..., Z=26. Ativa o interruptor «Com chave» para definir um número inicial diferente para a letra A (ex: 12).',
    example: 'Sem chave: "ESCUTEIRO" -> "051903212005091815"\nCom chave (12): "ESCUTEIRO" -> "163014323116202926"',
    
    hasExtraFields: true,
    extraFields: [
        {
            id: 'useKey',
            label: 'Com chave',
            type: 'switch',
            defaultValue: false
        },
        {
            id: 'keyNumber',
            label: 'Chave (Número para A):',
            type: 'number',
            defaultValue: 12,
            placeholder: 'Ex: 12',
            dependsOn: 'useKey'
        }
    ],

    encode(text, options = {}) {
        if (!text) return '';
        const baseKey = getBaseKey(options);
        const normalized = normalizeText(text);
        let result = '';

        for (let i = 0; i < normalized.length; i++) {
            const char = normalized[i];
            const idx = ALPHABET.indexOf(char);
            if (idx !== -1) {
                const num = baseKey + idx;
                result += num < 10 ? `0${num}` : `${num}`;
            } else {
                result += char;
            }
        }

        return result;
    },

    decode(text, options = {}) {
        if (!text) return '';
        const baseKey = getBaseKey(options);
        let result = '';
        let i = 0;

        while (i < text.length) {
            if (i + 1 < text.length && /\d/.test(text[i]) && /\d/.test(text[i + 1])) {
                const pairStr = text[i] + text[i + 1];
                const num = parseInt(pairStr, 10);
                const idx = num - baseKey;

                if (idx >= 0 && idx < 26) {
                    result += ALPHABET[idx];
                    i += 2;
                    continue;
                }
            }
            result += text[i];
            i++;
        }

        return result;
    }
};
