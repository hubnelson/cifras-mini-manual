/**
 * Cifra - Palavras Seguidas
 * As palavras são escritas seguidas, sem os espaços que normalmente as separam.
 */

function normalizeText(text) {
    return text
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase();
}

export const palavrasSeguidasCipher = {
    id: 'palavras-seguidas',
    name: 'Palavras Seguidas',
    description: 'As palavras são escritas seguidas, sem os espaços que normalmente as separam.',
    example: 'Entrada: "SAIR DO CAMPO AS NOVE HORAS E PROCURAR O CHEFE"\nSaída: "SAIRDOCAMPOASNOVEHORASEPROCURAROCHEFE"',
    
    hasExtraFields: false,

    encode(text) {
        if (!text) return '';
        const normalized = normalizeText(text);
        return normalized.replace(/\s+/g, '');
    },

    decode(text) {
        if (!text) return '';
        const normalized = normalizeText(text);
        return normalized.replace(/\s+/g, '');
    }
};
