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

function getGridSize(textLength, userOption) {
    const parsed = parseInt(userOption, 10);
    if (!isNaN(parsed) && parsed >= 2) {
        return parsed;
    }
    const autoSize = Math.ceil(Math.sqrt(textLength));
    return Math.max(2, autoSize);
}

export const caracolCipher = {
    id: 'caracol',
    name: 'Caracol',
    description: 'As letras da mensagem são dispostas em caracol (sentido anti-horário) numa tabela N x N. A mensagem cifrada é lida normalmente na horizontal por linhas.',
    example: 'Chave: 6\nEntrada: "ACAMPAMENTO JUNTO AO RIO COM FOGUEIRA"\nSaída: "AIROAOCOARITACLAENMOTUUUPMFOGJAMENTO"',
    
    hasExtraFields: true,
    extraFields: [
        {
            id: 'gridSize',
            label: 'Tamanho da Tabela (Chave N):',
            type: 'number',
            defaultValue: 0,
            min: 0,
            max: 15,
            placeholder: '0 = Automático (ou ex: 6)'
        }
    ],

    encode(text, options = {}) {
        if (!text) return '';
        const cleaned = normalizeText(text);
        if (!cleaned) return '';

        const N = getGridSize(cleaned.length, options.gridSize);
        const totalCells = N * N;

        // Preenche o array de caracteres (adiciona letras aleatórias se a mensagem for menor que totalCells)
        const charList = [];
        for (let i = 0; i < totalCells; i++) {
            if (i < cleaned.length) {
                charList.push(cleaned[i]);
            } else {
                charList.push(getRandomLetter());
            }
        }

        // Criar matriz N x N
        const matrix = Array.from({ length: N }, () => Array(N).fill(''));

        // Preencher a matriz em caracol anti-horário
        let top = 0;
        let bottom = N - 1;
        let left = 0;
        let right = N - 1;
        let charIdx = 0;

        while (top <= bottom && left <= right) {
            // 1. Descer pela coluna da esquerda
            for (let r = top; r <= bottom && left <= right; r++) {
                matrix[r][left] = charList[charIdx++];
            }
            left++;

            // 2. Ir para a direita pela linha inferior
            for (let c = left; c <= right && top <= bottom; c++) {
                matrix[bottom][c] = charList[charIdx++];
            }
            bottom--;

            // 3. Subir pela coluna da direita
            for (let r = bottom; r >= top && left <= right; r--) {
                matrix[r][right] = charList[charIdx++];
            }
            right--;

            // 4. Ir para a esquerda pela linha superior
            for (let c = right; c >= left && top <= bottom; c--) {
                matrix[top][c] = charList[charIdx++];
            }
            top++;
        }

        // Ler a matriz horizontalmente por linhas
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

        const N = getGridSize(cleaned.length, options.gridSize);
        const totalCells = N * N;

        // Criar matriz N x N e preencher horizontalmente com o texto cifrado
        const matrix = Array.from({ length: N }, () => Array(N).fill(''));
        let charIdx = 0;

        for (let r = 0; r < N; r++) {
            for (let c = 0; c < N; c++) {
                if (charIdx < cleaned.length) {
                    matrix[r][c] = cleaned[charIdx++];
                }
            }
        }

        // Ler a matriz na sequência do caracol anti-horário
        let top = 0;
        let bottom = N - 1;
        let left = 0;
        let right = N - 1;
        let result = '';

        while (top <= bottom && left <= right) {
            // 1. Descer pela coluna da esquerda
            for (let r = top; r <= bottom && left <= right; r++) {
                result += matrix[r][left];
            }
            left++;

            // 2. Ir para a direita pela linha inferior
            for (let c = left; c <= right && top <= bottom; c++) {
                result += matrix[bottom][c];
            }
            bottom--;

            // 3. Subir pela coluna da direita
            for (let r = bottom; r >= top && left <= right; r--) {
                result += matrix[r][right];
            }
            right--;

            // 4. Ir para a esquerda pela linha superior
            for (let c = right; c >= left && top <= bottom; c--) {
                result += matrix[top][c];
            }
            top++;
        }

        return result;
    }
};
