/**
 * Cifra - Vogais por Pontos
 * Substitui todas as vogais (A, E, I, O, U e acentuadas) por pontos (.).
 */

function normalizeChar(char) {
    return char
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
}

const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

export const vogaisPorPontosCipher = {
    id: 'vogais-por-pontos',
    name: 'Vogais por Pontos',
    description: 'As vogais (A, E, I, O, U) são todas substituídas por pontos (.).',
    example: 'Entrada: "SEMPRE ALERTA"\nSaída: "S.MPR. .L.RT."',
    
    hasExtraFields: false,

    encode(text) {
        if (!text) return '';
        let result = '';

        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            const normalized = normalizeChar(char);
            if (VOWELS.has(normalized)) {
                result += '.';
            } else {
                result += char;
            }
        }

        return result;
    },

    decode(text) {
        if (!text) return '';
        // Como todas as vogais se tornam '.', a descodificação direta preserva a estrutura cifrada.
        return text;
    }
};
