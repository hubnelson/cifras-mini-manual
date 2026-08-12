/**
 * Cifra - Batalha Naval com Chave
 * Tabela 5x5 estilo Batalha Naval (Colunas A-E, Linhas 1-5).
 * As letras do alfabeto (25) são dispostas a partir da letra a seguir à Letra Chave (omitindo a chave).
 */

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
}

function getGridMaps(keyLetterOption) {
    const raw = normalizeText(String(keyLetterOption || 'J')).replace(/[^A-Z]/g, '');
    const keyChar = raw.length > 0 ? raw[0] : 'J';
    const fullAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const keyIdx = fullAlphabet.indexOf(keyChar);

    // Constrói array com as 25 letras a partir da letra a seguir a keyChar
    const letters = [];
    for (let i = 1; i <= 25; i++) {
        const idx = (keyIdx + i) % 26;
        letters.push(fullAlphabet[idx]);
    }

    const cols = ['A', 'B', 'C', 'D', 'E'];
    const charToCoord = {};
    const coordToChar = {};

    letters.forEach((char, idx) => {
        const col = cols[idx % 5];
        const row = Math.floor(idx / 5) + 1;
        const coord = `${col}${row}`;
        charToCoord[char] = coord;
        coordToChar[coord] = char;
    });

    // A letra chave é mapeada para '...'
    charToCoord[keyChar] = '...';
    coordToChar['...'] = keyChar;

    return { charToCoord, coordToChar, keyChar };
}

export const batalhaNavalComChaveCipher = {
    id: 'batalha-naval-com-chave',
    name: 'Batalha Naval com Chave',
    description: 'É feita uma tabela 5x5 estilo Batalha Naval (Colunas A-E, Linhas 1-5). As 25 letras do alfabeto são dispostas ordenadamente a partir da letra a seguir à Letra Chave. A letra chave em si é representada por «...».',
    example: 'Chave: J\nEntrada: "CHAMAR A JOANA"\nSaída: "D4 D5 B4 C1 B4 C2 B4 ... E1 B4 D1 B4"',
    
    hasExtraFields: true,
    extraFields: [
        {
            id: 'keyLetter',
            label: 'Letra Chave:',
            type: 'text',
            defaultValue: 'J',
            placeholder: 'Ex: J'
        }
    ],

    encode(text, options = {}) {
        if (!text) return '';
        const { charToCoord } = getGridMaps(options.keyLetter);
        const normalized = normalizeText(text);
        const tokens = [];

        for (let i = 0; i < normalized.length; i++) {
            const char = normalized[i];
            if (charToCoord[char]) {
                tokens.push(charToCoord[char]);
            } else {
                tokens.push(char);
            }
        }

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

    decode(text, options = {}) {
        if (!text) return '';
        const { coordToChar } = getGridMaps(options.keyLetter);
        const rawTokens = text.trim().split(/\s+/);
        let result = '';

        for (let i = 0; i < rawTokens.length; i++) {
            const token = rawTokens[i].toUpperCase();

            if (coordToChar[token]) {
                result += coordToChar[token];
            } else {
                result += token;
            }
        }

        return result;
    }
};
