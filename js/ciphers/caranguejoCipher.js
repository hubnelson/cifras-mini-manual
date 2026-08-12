/**
 * Cifra - Caranguejo
 * As letras e as palavras são escritas completamente ao contrário.
 */

function reverseString(str) {
    return str.split('').reverse().join('');
}

export const caranguejoCipher = {
    id: 'caranguejo',
    name: 'Caranguejo',
    description: 'As letras e as palavras são escritas ao contrário (de trás para a frente).',
    example: 'Entrada: "BOA CAÇA E SEMPRE ALERTA"\nSaída: "ATRELA ERPMES E AÇAC AOB"',
    
    hasExtraFields: false,

    encode(text) {
        if (!text) return '';
        return reverseString(text);
    },

    decode(text) {
        if (!text) return '';
        return reverseString(text);
    }
};
