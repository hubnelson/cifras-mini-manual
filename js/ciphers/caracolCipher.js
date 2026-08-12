/**
 * Cifra - Caracol
 * Dispõe a mensagem em caracol (sentido contrário aos ponteiros do relógio) numa tabela N x N.
 * A mensagem cifrada é obtida lendo normalmente na horizontal (linha a linha).
 */

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase()
        .replace(/[^A-Z]/g, '');
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getRandomLetter() {
    return ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
}

function calculateGridSize(text) {
    const cleaned = normalizeText(text);
    if (!cleaned || cleaned.length === 0) return 0;
    return Math.ceil(Math.sqrt(cleaned.length));
}

export const caracolCipher = {
    id: 'caracol',
    name: 'Caracol',
    description: 'As letras da mensagem são dispostas em caracol (sentido anti-horário) numa tabela N x N. O tamanho N da tabela é calculado automaticamente fazendo a raiz quadrada do número total de carateres (sem espaços), arredondando para o número inteiro acima.',
    example: 'Tamanho (36 letras -> N=6)\nEntrada: "ACAMPAMENTO JUNTO AO RIO COM FOGUEIRA"\nSaída: "AIROAOCOARITACLAENMOTUUUPMFOGJAMENTO"',
    
    hasExtraFields: true,
    extraFields: [
        {
            id: 'gridSize',
            label: 'Tamanho da Tabela (Calculado N x N):',
            type: 'number',
            defaultValue: 0,
            readOnly: true
        }
    ],

    calculateGridSize(text) {
        return calculateGridSize(text);
    },

    encode(text, options = {}) {
        if (!text) return '';
        const cleaned = normalizeText(text);
        if (!cleaned) return '';

        const N = calculateGridSize(text);
        const totalCells = N * N;

        const charList = [];
        for (let i = 0; i < totalCells; i++) {
            if (i < cleaned.length) {
                charList.push(cleaned[i]);
            } else {
                charList.push(getRandomLetter());
            }
        }

        const matrix = Array.from({ length: N }, () => Array(N).fill(''));

        let top = 0;
        let bottom = N - 1;
        let left = 0;
        let right = N - 1;
        let charIdx = 0;

        while (top <= bottom && left <= right) {
            for (let r = top; r <= bottom && left <= right; r++) {
                matrix[r][left] = charList[charIdx++];
            }
            left++;

            for (let c = left; c <= right && top <= bottom; c++) {
                matrix[bottom][c] = charList[charIdx++];
            }
            bottom--;

            for (let r = bottom; r >= top && left <= right; r--) {
                matrix[r][right] = charList[charIdx++];
            }
            right--;

            for (let c = right; c >= left && top <= bottom; c--) {
                matrix[top][c] = charList[charIdx++];
            }
            top++;
        }

        let result = '';
        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                result += matrix[r][c];
            }
        }

        return result;
    },

    decode(text, options = {}) {
        if (!text) return '';
        const cleaned = normalizeText(text);
        if (!cleaned) return '';

        const N = calculateGridSize(text);

        const matrix = Array.from({ length: N }, () => Array(N).fill(''));
        let charIdx = 0;

        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                if (charIdx < cleaned.length) {
                    matrix[r][c] = cleaned[charIdx++];
                }
            }
        }

        let top = 0;
        let bottom = N - 1;
        let left = 0;
        let right = N - 1;
        let result = '';

        while (top <= bottom && left <= right) {
            for (let r = top; r <= bottom && left <= right; r++) {
                result += matrix[r][left];
            }
            left++;

            for (let c = left; c <= right && top <= bottom; c++) {
                result += matrix[bottom][c];
            }
            bottom--;

            for (let r = bottom; r >= top && left <= right; r--) {
                result += matrix[r][right];
            }
            right--;

            for (let c = right; c >= left && top <= bottom; c--) {
                result += matrix[top][c];
            }
            top++;
        }

        return result;
    }
};
