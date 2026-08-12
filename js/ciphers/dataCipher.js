/**
 * Cifra nº 2 - Data
 * O código Data utiliza uma data (ex: 1984) cujos dígitos formam as linhas de uma tabela 4x10.
 * Cada letra ou número é representado por 2 dígitos: [Dígito da Linha][Dígito da Coluna].
 */

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
}

function parseDateKey(dateKey) {
    const digits = String(dateKey || '1984').replace(/\D/g, '');
    const defaultDigits = '1984';
    let result = '';
    for (let i = 0; i < 4; i++) {
        result += digits[i] !== undefined ? digits[i] : defaultDigits[i];
    }
    return result.split('');
}

const SYMBOLS = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3',
    '4', '5', '6', '7', '8', '9'
];

const COL_DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export const dataCipher = {
    id: 'data',
    name: 'Data',
    description: 'O código Data é feito com uma tabela em que na coluna mais à esquerda se coloca uma data (a data chave do código, ex: 1984). Cada letra é composta por dois algarismos: o 1.º corresponde à linha (dígito da data) e o 2.º à coluna (1-9, 0).',
    example: 'Chave: 1984\nEntrada: "ALERTA"\nSaída: "119215989011"',
    
    hasExtraFields: true,
    extraFields: [
        {
            id: 'dateKey',
            label: 'Data (Chave):',
            type: 'number',
            defaultValue: '1984',
            placeholder: 'Ex: 1984'
        }
    ],

    encode(text, options = {}) {
        if (!text) return '';
        const dateKey = options.dateKey || '1984';
        const rowDigits = parseDateKey(dateKey);
        
        const symbolToCode = {};
        SYMBOLS.forEach((sym, idx) => {
            const rIdx = Math.floor(idx / 10);
            const cIdx = idx % 10;
            symbolToCode[sym] = `${rowDigits[rIdx]}${COL_DIGITS[cIdx]}`;
        });

        const normalized = normalizeText(text);
        let result = '';

        for (let i = 0; i < normalized.length; i++) {
            const char = normalized[i];
            if (symbolToCode[char]) {
                result += symbolToCode[char];
            } else {
                result += char;
            }
        }

        return result;
    },

    decode(text, options = {}) {
        if (!text) return '';
        const dateKey = options.dateKey || '1984';
        const rowDigits = parseDateKey(dateKey);

        const codeToSymbol = {};
        SYMBOLS.forEach((sym, idx) => {
            const rIdx = Math.floor(idx / 10);
            const cIdx = idx % 10;
            const code = `${rowDigits[rIdx]}${COL_DIGITS[cIdx]}`;
            if (!codeToSymbol[code]) {
                codeToSymbol[code] = sym;
            }
        });

        let result = '';
        let i = 0;

        while (i < text.length) {
            if (i + 1 < text.length && /\d/.test(text[i]) && /\d/.test(text[i + 1])) {
                const pair = text[i] + text[i + 1];
                if (codeToSymbol[pair]) {
                    result += codeToSymbol[pair];
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
