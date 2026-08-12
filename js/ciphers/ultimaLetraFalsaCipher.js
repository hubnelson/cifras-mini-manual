/**
 * Cifra - Última Letra Falsa
 * Corta palavras ao meio e adiciona uma letra falsa no final de cada palavra resultante.
 * Para descodificar, remove a última letra de cada palavra.
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

export const ultimaLetraFalsaCipher = {
    id: 'ultima-letra-falsa',
    name: 'Última Letra Falsa',
    description: 'Divide aleatoriamente palavras ao meio e adiciona uma letra falsa no final de cada palavra. Para descodificar, elimina-se a última letra de cada palavra.',
    example: 'Entrada: "AS TENDAS FICAM MONTADAS JUNTO AO RIO"\nSaída: "ASO TENDO DASO FIM CAME MONA TADASE JUL NTOU AOR RIOP"',
    
    hasExtraFields: false,

    encode(text) {
        if (!text) return '';
        const normalized = normalizeText(text);
        const words = normalized.trim().split(/\s+/);
        const splitWords = [];

        // 1. Separar aleatoriamente cerca de metade das palavras ao meio
        words.forEach(word => {
            const cleanWord = word.replace(/[^A-Z]/g, '');
            if (cleanWord.length >= 4 && Math.random() < 0.6) {
                const mid = Math.floor(cleanWord.length / 2);
                splitWords.push(cleanWord.slice(0, mid));
                splitWords.push(cleanWord.slice(mid));
            } else if (cleanWord.length > 0) {
                splitWords.push(cleanWord);
            }
        });

        // 2. Adicionar uma letra falsa no final de cada palavra da nova frase
        const encodedWords = splitWords.map(w => w + getRandomLetter());

        return encodedWords.join(' ');
    },

    decode(text) {
        if (!text) return '';
        const words = text.trim().split(/\s+/);
        
        // Remove a última letra de cada palavra
        const decodedWords = words.map(w => {
            return w.length > 1 ? w.slice(0, -1) : w;
        });

        return decodedWords.join(' ');
    }
};
