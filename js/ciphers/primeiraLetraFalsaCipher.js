/**
 * Cifra - Primeira Letra Falsa
 * Divide exatamente metade das palavras ao meio e adiciona uma letra falsa no início de cada palavra resultante.
 * Para descodificar, remove a primeira letra de cada palavra.
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

export const primeiraLetraFalsaCipher = {
    id: 'primeira-letra-falsa',
    name: 'Primeira Letra Falsa',
    description: 'Divide exatamente metade das palavras da frase ao meio e adiciona uma letra falsa no início de cada palavra. Para descodificar, elimina-se a primeira letra de cada palavra.',
    example: 'Entrada: "AS TENDAS FICAM MONTADAS JUNTO AO RIO"\nSaída: "LAS ATEN UDAS AFIC RAM SMON ATADAS AJU ONTO NAOR BIO"',
    
    hasExtraFields: false,

    encode(text) {
        if (!text) return '';
        const normalized = normalizeText(text);
        const words = normalized.trim().split(/\s+/).filter(w => w.length > 0);

        // Identificar índices de palavras elegíveis para serem cortadas ao meio (tamanho >= 2)
        const eligibleIndices = [];
        words.forEach((w, idx) => {
            const clean = w.replace(/[^A-Z]/g, '');
            if (clean.length >= 2) {
                eligibleIndices.push(idx);
            }
        });

        // Selecionar exatamente metade das palavras elegíveis
        const targetSplitCount = Math.floor(eligibleIndices.length / 2);
        
        // Baralhar aleatoriamente os índices elegíveis para escolher exatamente metade
        const shuffled = [...eligibleIndices].sort(() => Math.random() - 0.5);
        const splitIndexSet = new Set(shuffled.slice(0, targetSplitCount));

        const splitWords = [];
        words.forEach((word, idx) => {
            const cleanWord = word.replace(/[^A-Z]/g, '');
            if (splitIndexSet.has(idx) && cleanWord.length >= 2) {
                const mid = Math.floor(cleanWord.length / 2);
                splitWords.push(cleanWord.slice(0, mid));
                splitWords.push(cleanWord.slice(mid));
            } else if (cleanWord.length > 0) {
                splitWords.push(cleanWord);
            }
        });

        // Adicionar uma letra falsa no INÍCIO de cada palavra da nova frase
        const encodedWords = splitWords.map(w => getRandomLetter() + w);

        return encodedWords.join(' ');
    },

    decode(text) {
        if (!text) return '';
        const words = text.trim().split(/\s+/);
        
        // Remove a primeira letra de cada palavra
        const decodedWords = words.map(w => {
            return w.length > 1 ? w.slice(1) : w;
        });

        return decodedWords.join(' ');
    }
};
